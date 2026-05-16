"use client"

import { useEffect, useRef } from "react"

type TrailPoint = { x: number; y: number; life: number }
type Glyph = {
  x: number
  y: number
  vx: number
  vy: number
  text: string
  life: number
  hue: "cyan" | "violet"
}
type Pulse = { x: number; y: number; r: number; life: number; sides: number }

const GLYPHS = ["{ }", "</>", "=>", "fn", "0x", "&&", "||", "::", "[]", "AI"]
const ORBIT_COUNT = 4

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

export function UniqueCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const stateRef = useRef({
    mx: -100,
    my: -100,
    sx: -100,
    sy: -100,
    px: -100,
    py: -100,
    angle: 0,
    orbit: 0,
    trail: [] as TrailPoint[],
    glyphs: [] as Glyph[],
    pulses: [] as Pulse[],
    active: false,
  })

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches
    if (!fine) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const s = stateRef.current
    s.active = true
    document.body.classList.add("unique-cursor")

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()

    const spawnGlyph = (x: number, y: number, speed: number) => {
      if (Math.random() > 0.35 + Math.min(speed / 80, 0.4)) return
      s.glyphs.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 1.2,
        vy: -0.6 - Math.random() * 1.4,
        text: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
        life: 1,
        hue: Math.random() > 0.5 ? "cyan" : "violet",
      })
      if (s.glyphs.length > 14) s.glyphs.shift()
    }

    const onMove = (e: MouseEvent) => {
      const dx = e.clientX - s.px
      const dy = e.clientY - s.py
      const speed = Math.hypot(dx, dy)

      s.mx = e.clientX
      s.my = e.clientY
      s.px = e.clientX
      s.py = e.clientY

      s.trail.unshift({ x: e.clientX, y: e.clientY, life: 1 })
      if (s.trail.length > 18) s.trail.pop()

      if (speed > 2) spawnGlyph(e.clientX, e.clientY, speed)
    }

    const onClick = (e: MouseEvent) => {
      s.pulses.push({ x: e.clientX, y: e.clientY, r: 8, life: 1, sides: 6 })
      if (s.pulses.length > 6) s.pulses.shift()
    }

    const drawHex = (
      cx: number,
      cy: number,
      radius: number,
      rotation: number,
      stroke: string,
      lineWidth = 1.5,
      fill?: string
    ) => {
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const a = rotation + (Math.PI / 3) * i
        const x = cx + Math.cos(a) * radius
        const y = cy + Math.sin(a) * radius
        if (i === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.closePath()
      if (fill) {
        ctx.fillStyle = fill
        ctx.fill()
      }
      ctx.strokeStyle = stroke
      ctx.lineWidth = lineWidth
      ctx.stroke()
    }

    let animationId = 0

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      s.sx = lerp(s.sx, s.mx, 0.18)
      s.sy = lerp(s.sy, s.my, 0.18)
      s.angle += 0.028
      s.orbit += 0.04

      // Motion trail — constellation path (not a glow)
      for (let i = 0; i < s.trail.length - 1; i++) {
        const a = s.trail[i]
        const b = s.trail[i + 1]
        a.life *= 0.92
        const alpha = a.life * (1 - i / s.trail.length) * 0.55
        if (alpha < 0.02) continue
        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(b.x, b.y)
        ctx.strokeStyle =
          i % 2 === 0 ? `rgba(34, 211, 238, ${alpha})` : `rgba(167, 139, 250, ${alpha})`
        ctx.lineWidth = 1
        ctx.stroke()
        ctx.beginPath()
        ctx.arc(a.x, a.y, 1.2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(34, 211, 238, ${alpha * 0.8})`
        ctx.fill()
      }
      s.trail = s.trail.filter((p) => p.life > 0.05)

      // Click pulse — expanding hexagon
      s.pulses = s.pulses.filter((p) => {
        p.r += 2.2
        p.life *= 0.94
        if (p.life < 0.04) return false
        drawHex(p.x, p.y, p.r, s.angle * 0.5, `rgba(34, 211, 238, ${p.life * 0.5})`, 1)
        return true
      })

      // Floating code fragments
      s.glyphs = s.glyphs.filter((g) => {
        g.x += g.vx
        g.y += g.vy
        g.vy -= 0.02
        g.life *= 0.965
        if (g.life < 0.05) return false
        ctx.font = "11px ui-monospace, SFMono-Regular, Menlo, monospace"
        ctx.fillStyle =
          g.hue === "cyan"
            ? `rgba(34, 211, 238, ${g.life * 0.85})`
            : `rgba(167, 139, 250, ${g.life * 0.85})`
        ctx.fillText(g.text, g.x, g.y)
        return true
      })

      const cx = s.sx
      const cy = s.sy

      // Orbiting satellites
      for (let i = 0; i < ORBIT_COUNT; i++) {
        const orbitR = 22 + i * 9
        const a = s.orbit + (Math.PI * 2 * i) / ORBIT_COUNT
        const ox = cx + Math.cos(a) * orbitR
        const oy = cy + Math.sin(a) * orbitR
        ctx.beginPath()
        ctx.moveTo(cx, cy)
        ctx.lineTo(ox, oy)
        ctx.strokeStyle = i % 2 === 0 ? "rgba(34, 211, 238, 0.2)" : "rgba(167, 139, 250, 0.18)"
        ctx.lineWidth = 0.6
        ctx.stroke()
        ctx.beginPath()
        ctx.arc(ox, oy, 2, 0, Math.PI * 2)
        ctx.fillStyle = i % 2 === 0 ? "rgba(34, 211, 238, 0.9)" : "rgba(167, 139, 250, 0.85)"
        ctx.fill()
      }

      // Crosshair ticks
      const tick = 14
      ctx.strokeStyle = "rgba(34, 211, 238, 0.45)"
      ctx.lineWidth = 1
      ;[
        [cx - tick, cy, cx - 5, cy],
        [cx + 5, cy, cx + tick, cy],
        [cx, cy - tick, cx, cy - 5],
        [cx, cy + 5, cx, cy + tick],
      ].forEach(([x1, y1, x2, y2]) => {
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()
      })

      // Main cursor — rotating hollow hex (unique shape, zero glow)
      drawHex(cx, cy, 10, s.angle, "rgba(34, 211, 238, 0.95)", 1.8)
      drawHex(cx, cy, 4, -s.angle * 1.4, "rgba(167, 139, 250, 0.8)", 1)

      ctx.beginPath()
      ctx.arc(cx, cy, 1.5, 0, Math.PI * 2)
      ctx.fillStyle = "#fff"
      ctx.fill()

      animationId = requestAnimationFrame(draw)
    }

    animationId = requestAnimationFrame(draw)
    window.addEventListener("resize", resize)
    window.addEventListener("mousemove", onMove)
    window.addEventListener("click", onClick)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("click", onClick)
      document.body.classList.remove("unique-cursor")
      s.active = false
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999] mix-blend-normal"
      aria-hidden
    />
  )
}
