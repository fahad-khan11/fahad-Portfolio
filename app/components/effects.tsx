"use client"

import { useEffect } from "react"

/**
 * One small client island for page-wide effects:
 *  - reveal [data-reveal] on enter
 *  - count-up numbers [data-count]
 *  - cursor spotlight on .card and 3D tilt on [data-tilt]
 *  - sticky stacking project cards [data-stack] that tip back in 3D as the next card covers them
 */
export function Effects() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    // ---- count-up
    const countUp = (el: HTMLElement) => {
      const to = Number(el.dataset.count || 0)
      const suffix = el.dataset.suffix || ""
      if (reduce) { el.textContent = `${to}${suffix}`; return }
      const t0 = performance.now(), dur = 1400
      const step = (now: number) => {
        const p = Math.min(1, (now - t0) / dur)
        const e = 1 - Math.pow(1 - p, 3)
        el.textContent = `${Math.round(to * e)}${suffix}`
        if (p < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }

    // ---- reveal
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          e.target.classList.add("in")
          e.target.querySelectorAll<HTMLElement>("[data-count]").forEach(countUp)
          io.unobserve(e.target)
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    )
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el))

    // ---- spotlight + tilt
    let frame = 0
    let tilted: HTMLElement | null = null
    const onMove = (ev: PointerEvent) => {
      const target = ev.target as HTMLElement | null
      const card = target?.closest<HTMLElement>(".card") ?? null
      const tilt = ev.pointerType === "touch" ? null : target?.closest<HTMLElement>("[data-tilt]") ?? null
      if (tilted && tilted !== tilt) {
        tilted.style.setProperty("--tx", "0deg")
        tilted.style.setProperty("--ty", "0deg")
        tilted = null
      }
      if (!card && !tilt) return
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        if (card) {
          const r = card.getBoundingClientRect()
          card.style.setProperty("--mx", `${ev.clientX - r.left}px`)
          card.style.setProperty("--my", `${ev.clientY - r.top}px`)
        }
        if (tilt) {
          const r = tilt.getBoundingClientRect()
          const px = (ev.clientX - r.left) / r.width - 0.5
          const py = (ev.clientY - r.top) / r.height - 0.5
          tilt.style.setProperty("--tx", `${(-py * 7).toFixed(2)}deg`)
          tilt.style.setProperty("--ty", `${(px * 9).toFixed(2)}deg`)
          tilted = tilt
        }
      })
    }
    window.addEventListener("pointermove", onMove, { passive: true })

    // ---- sticky stacking cards
    const stack = Array.from(document.querySelectorAll<HTMLElement>("[data-stack]"))
    let sraf = 0
    const updateStack = () => {
      sraf = 0
      for (let i = 0; i < stack.length - 1; i++) {
        const card = stack[i].firstElementChild as HTMLElement | null
        if (!card) continue
        const a = stack[i].getBoundingClientRect()
        const b = stack[i + 1].getBoundingClientRect()
        const gap = parseFloat(getComputedStyle(stack[i + 1]).top) - parseFloat(getComputedStyle(stack[i]).top)
        const p = Math.min(1, Math.max(0, 1 - (b.top - a.top - gap) / Math.max(1, a.height - gap)))
        card.style.setProperty("--sp", p.toFixed(3))
      }
    }
    const onScroll = () => { if (!sraf && !reduce) sraf = requestAnimationFrame(updateStack) }
    if (stack.length) {
      window.addEventListener("scroll", onScroll, { passive: true })
      window.addEventListener("resize", onScroll)
      updateStack()
    }

    return () => {
      io.disconnect()
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      cancelAnimationFrame(frame)
      cancelAnimationFrame(sraf)
    }
  }, [])

  return null
}
