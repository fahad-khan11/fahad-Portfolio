"use client"

import { useEffect, useRef } from "react"

/**
 * 3D constellation behind the hero: points live in a 3D volume, rotate slowly,
 * follow the pointer with eased parallax, and link to nearby points with depth-faded lines.
 * Also exposes --px / --py on the hero so CSS glyphs can parallax in sync.
 * Plain canvas 2D — no WebGL library. Paused when offscreen or the tab is hidden.
 */
export function Constellation() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    const hero = canvas?.parentElement?.parentElement
    if (!canvas || !hero) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    type P = { x: number; y: number; z: number }
    let pts: P[] = []
    let w = 0, h = 0

    const seed = () => {
      const count = Math.round(Math.min(110, Math.max(40, (w * h) / 14000)))
      pts = Array.from({ length: count }, () => ({
        x: Math.random() * 2 - 1,
        y: Math.random() * 2 - 1,
        z: Math.random() * 2 - 1,
      }))
    }
    const resize = () => {
      const r = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = r.width; h = r.height
      canvas.width = w * dpr; canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      seed()
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    let tx = 0, ty = 0, cx = 0, cy = 0, mx = -9999, my = -9999
    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect()
      mx = e.clientX - r.left; my = e.clientY - r.top
      tx = (mx / r.width) * 2 - 1
      ty = (my / r.height) * 2 - 1
    }
    window.addEventListener("pointermove", onMove, { passive: true })

    let raf = 0, visible = true, t0 = performance.now()
    const proj: { x: number; y: number; z: number; d: number }[] = []

    const frame = (now: number) => {
      const t = (now - t0) / 1000
      cx += (tx - cx) * 0.04
      cy += (ty - cy) * 0.04
      hero.style.setProperty("--px", cx.toFixed(3))
      hero.style.setProperty("--py", cy.toFixed(3))

      const ay = t * 0.05 + cx * 0.35
      const ax = cy * 0.25
      const cY = Math.cos(ay), sY = Math.sin(ay), cX = Math.cos(ax), sX = Math.sin(ax)
      const sx = w * 0.62, sy = h * 0.62, f = 2.2

      proj.length = 0
      for (const p of pts) {
        const x1 = p.x * cY - p.z * sY
        const z1 = p.x * sY + p.z * cY
        const y1 = p.y * cX - z1 * sX
        const z2 = p.y * sX + z1 * cX
        const s = f / (f + z2)
        proj.push({ x: w / 2 + x1 * sx * s, y: h / 2 + y1 * sy * s, z: z2, d: (1 - z2) / 2 })
      }

      ctx.clearRect(0, 0, w, h)
      const maxD = Math.min(170, w * 0.16)
      ctx.lineWidth = 1
      for (let i = 0; i < proj.length; i++) {
        const a = proj[i]
        for (let j = i + 1; j < proj.length; j++) {
          const b = proj[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist > maxD) continue
          const alpha = (1 - dist / maxD) * 0.32 * Math.min(a.d, b.d) * 1.6
          ctx.strokeStyle = `rgba(255,255,255,${alpha.toFixed(3)})`
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
        }
        // link to pointer
        const pd = Math.hypot(a.x - mx, a.y - my)
        if (pd < 160) {
          ctx.strokeStyle = `rgba(197,242,90,${((1 - pd / 160) * 0.45).toFixed(3)})`
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mx, my); ctx.stroke()
        }
      }
      for (const a of proj) {
        const near = Math.hypot(a.x - mx, a.y - my) < 160
        ctx.fillStyle = near ? `rgba(197,242,90,${0.5 + a.d * 0.5})` : `rgba(255,255,255,${0.25 + a.d * 0.6})`
        ctx.beginPath(); ctx.arc(a.x, a.y, 0.6 + a.d * 1.8, 0, Math.PI * 2); ctx.fill()
      }
      if (visible && !reduce) raf = requestAnimationFrame(frame)
    }

    const start = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(frame) }
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting && !document.hidden; if (visible && !reduce) start() })
    io.observe(canvas)
    const onVis = () => { visible = !document.hidden; if (visible && !reduce) start() }
    document.addEventListener("visibilitychange", onVis)
    start()

    return () => {
      cancelAnimationFrame(raf); io.disconnect(); ro.disconnect()
      window.removeEventListener("pointermove", onMove)
      document.removeEventListener("visibilitychange", onVis)
    }
  }, [])

  return <canvas ref={ref} aria-hidden className="absolute inset-0 h-full w-full" />
}
