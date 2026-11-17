"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { profile } from "@/lib/data"

const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
const lerp = (a: number, b: number, t: number) => a + (b - a) * t

/**
 * The hero avatar "flies" into a docked bubble at the bottom-right as you scroll,
 * flipping in 3D on the way (photo on the front, FF monogram on the back).
 * Once docked it's a shortcut to the contact section.
 */
export function FloatingAvatar() {
  const el = useRef<HTMLButtonElement>(null)
  const [docked, setDocked] = useState(false)

  useEffect(() => {
    const node = el.current
    const anchor = document.getElementById("hero-avatar")
    if (!node || !anchor) return
    let raf = 0

    const update = () => {
      raf = 0
      const a = anchor.getBoundingClientRect()
      const vw = window.innerWidth, vh = window.innerHeight
      const small = vw < 640
      const end = small ? 52 : 64
      const margin = small ? 16 : 28
      const p = Math.min(1, Math.max(0, window.scrollY / (vh * 0.6)))
      const e = ease(p)
      const size = a.width || 112
      const x = lerp(a.left, vw - margin - end, e)
      const y = lerp(a.top, vh - margin - end, e)
      // Resize (not scale) so the tooltip/status dot keep their real size when docked
      const d = lerp(size, end, e)
      node.style.width = node.style.height = `${d}px`
      node.style.transform = `translate3d(${x}px, ${y}px, 0)`
      node.style.setProperty("--flip", `${(e * 360).toFixed(1)}deg`)
      const active = p > 0.002
      node.dataset.active = String(active)
      anchor.style.opacity = active ? "0" : ""
      setDocked(p >= 0.999)
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)

    // Step aside while the contact section is on screen (it's where the bubble leads anyway)
    const contact = document.getElementById("contact")
    const io = new IntersectionObserver(([e]) => { node.dataset.away = String(e.isIntersecting) }, { threshold: 0.15 })
    if (contact) io.observe(contact)

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      cancelAnimationFrame(raf)
      io.disconnect()
    }
  }, [])

  return (
    <button
      ref={el}
      type="button"
      data-active="false"
      data-docked={docked}
      aria-label="Get in touch with Fahad"
      tabIndex={docked ? 0 : -1}
      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
      className="fly-avatar group fixed left-0 top-0 z-40 origin-top-left"
    >
      <span className="fly-coin">
        <span className="fly-face overflow-hidden">
          <Image src={profile.photo} alt="" fill sizes="112px" className="object-cover" />
        </span>
        <span className="fly-face fly-back grid place-items-center bg-primary font-[family-name:var(--font-heading)] text-3xl font-extrabold text-primary-foreground">
          FF
        </span>
      </span>
      <span className="fly-status" />
      <span className="fly-tip">Let&apos;s talk 👋</span>
    </button>
  )
}
