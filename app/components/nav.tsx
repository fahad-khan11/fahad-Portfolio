"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Menu, X, Download, Github } from "lucide-react"
import { profile } from "@/lib/data"

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
]

export function Nav({ base = "" }: { base?: string }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`)
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    ;[...links.map((l) => l.href), "#contact"].forEach((h) => {
      const el = document.querySelector(h)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 sm:px-4">
      <div className="scroll-progress fixed inset-x-0 top-0 h-0.5 bg-primary" aria-hidden />
      <nav
        aria-label="Primary"
        className="mx-auto mt-3 flex max-w-4xl items-center justify-between gap-3 rounded-full border border-white/10 bg-background/70 py-2 pl-2 pr-2 shadow-2xl shadow-black/40 backdrop-blur-xl sm:mt-4"
      >
        <a href={base ? "/" : "#top"} className="flex items-center gap-2.5 rounded-full pr-2">
          <span className="relative h-9 w-9 overflow-hidden rounded-full ring-1 ring-white/15">
            <Image src={profile.photo} alt="" fill sizes="36px" className="object-cover" />
          </span>
          <span className="font-[family-name:var(--font-heading)] text-[15px] font-semibold">Fahad Farman</span>
        </a>

        <ul className="hidden items-center md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={`${base}${l.href}`}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                  active === l.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active === l.href && <span className="absolute inset-0 -z-10 rounded-full bg-white/[0.07]" />}
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden h-9 w-9 place-items-center rounded-full text-muted-foreground transition hover:bg-white/[0.07] hover:text-foreground sm:grid"
          >
            <Github className="h-[18px] w-[18px]" />
          </a>
          <a
            href={profile.cv}
            download
            aria-label="Download resume"
            className="hidden h-9 w-9 place-items-center rounded-full text-muted-foreground transition hover:bg-white/[0.07] hover:text-foreground sm:grid"
          >
            <Download className="h-[18px] w-[18px]" />
          </a>
          <a href={`${base}#contact`} className="btn-primary hidden !px-5 !py-2 sm:inline-flex">
            Get in touch
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 -z-10 bg-background/95 backdrop-blur-xl transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="flex h-full flex-col items-center justify-center gap-6">
          {[...links, { href: "#contact", label: "Contact" }].map((l, i) => (
            <li
              key={l.href}
              className={`transition-all duration-500 ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
              style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
            >
              <a href={`${base}${l.href}`} onClick={() => setOpen(false)} className="font-[family-name:var(--font-heading)] text-3xl font-semibold">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href={profile.cv} download className="btn-primary mt-4">
              <Download className="h-4 w-4" /> Download resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
