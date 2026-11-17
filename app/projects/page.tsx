import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { projects } from "@/lib/data"
import { Nav } from "../components/nav"
import { Effects } from "../components/effects"
import { BrowserFrame } from "../components/project-visuals"
import { TechIcon } from "../components/tech-icon"

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description:
    "Case studies of production SaaS platforms built by Fahad Farman: travel booking, logistics, real-time interpretation, HR, healthcare and more, using Next.js, NestJS and TypeScript.",
  alternates: { canonical: "/projects" },
}

export default function ProjectsIndex() {
  return (
    <>
      <Effects />
      <Nav base="/" />
      <main className="relative overflow-x-clip pb-24 pt-32 md:pt-40">
        <div aria-hidden className="grid-bg pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem]" />
        <div className="container-x">
          <p className="eyebrow enter" style={{ ["--i" as string]: 0, ["--sd" as string]: "60ms" }}>Case studies</p>
          <h1 className="enter mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl" style={{ ["--i" as string]: 1, ["--sd" as string]: "60ms" }}>
            Projects I&apos;ve <span className="text-gradient">engineered</span>
          </h1>
          <p className="enter mt-5 max-w-2xl text-lg text-muted-foreground" style={{ ["--i" as string]: 2, ["--sd" as string]: "60ms" }}>
            {projects.length} production builds: what each product does, who it serves, and exactly what I built.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {projects.map((p, i) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className="group block" data-reveal style={{ ["--d" as string]: i % 2 }}>
                <div data-tilt>
                  <BrowserFrame p={p} sizes="(min-width: 768px) 600px, 100vw" />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4 px-1">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">{p.category}</p>
                    <h2 className="mt-1.5 text-2xl font-bold transition-colors group-hover:text-primary">{p.title}</h2>
                    <p className="mt-1 text-muted-foreground">{p.tagline}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {p.stack.slice(0, 4).map((t) => (
                        <span key={t} className="chip gap-1.5 !px-2.5 !py-0.5 !text-[11px]">
                          <TechIcon name={t} className="h-3 w-3" />
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 transition group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
