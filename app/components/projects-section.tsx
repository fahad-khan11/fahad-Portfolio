import Link from "next/link"
import { ArrowUpRight, ArrowRight, Check } from "lucide-react"
import { projects } from "@/lib/data"
import { TechIcon } from "./tech-icon"
import { BrowserFrame } from "./project-visuals"

export function ProjectsSection() {
  const featured = projects.filter((p) => p.featured)
  const more = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="section" aria-labelledby="proj-title">
      <div className="container-x">
        <div className="section-head flex flex-wrap items-end justify-between gap-6" data-reveal>
          <div className="max-w-2xl">
            <p className="eyebrow">Selected work</p>
            <h2 id="proj-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Featured <span className="text-gradient">projects</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Production platforms used by real customers. Scroll to stack through them.
            </p>
          </div>
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-3xl font-bold text-foreground">{String(projects.length).padStart(2, "0")}</span> projects shipped
          </p>
        </div>

        {/* Sticky stacking cards */}
        <div className="stack-list pb-[8vh]">
          {featured.map((p, i) => (
            <div
              key={p.slug}
              data-stack
              className="stack-item sticky"
              style={{ top: `calc(5.5rem + ${i * 1.1}rem)`, zIndex: i + 1 }}
            >
              <article className="stack-card group relative grid gap-6 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#101112] p-4 sm:p-6 lg:grid-cols-[1.15fr_1fr] lg:gap-10 lg:p-8">
                <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
                <Link href={`/projects/${p.slug}`} aria-label={`${p.title} case study`} className="block">
                  <BrowserFrame p={p} sizes="(min-width: 1024px) 640px, 100vw" />
                </Link>

                <div className="relative flex flex-col">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{p.tagline}</span>
                    <span className="outline-num font-[family-name:var(--font-heading)] text-4xl font-extrabold leading-none sm:text-5xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-3 text-2xl font-bold sm:text-3xl lg:text-4xl">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{p.description}</p>
                  {p.points && (
                    <ul className="mt-4 hidden space-y-2 sm:block">
                      {p.points.map((pt) => (
                        <li key={pt} className="flex gap-3 text-sm text-foreground/85">
                          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                            <Check className="h-3 w-3" />
                          </span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span key={t} className="chip gap-1.5">
                        <TechIcon name={t} className="h-3.5 w-3.5" />
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3 lg:mt-auto lg:pt-6">
                    <Link href={`/projects/${p.slug}`} className="btn-primary">
                      Read case study <ArrowRight className="h-4 w-4" />
                    </Link>
                    {p.link && (
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn-ghost" aria-label={`Visit ${p.title} live site`}>
                        Live site <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
                <div aria-hidden className="stack-shade pointer-events-none absolute inset-0 rounded-[inherit] bg-black" />
              </article>
            </div>
          ))}
        </div>

        {/* More projects */}
        <div className="mt-14 flex flex-wrap items-center gap-x-4 gap-y-2 lg:mt-20" data-reveal>
          <h3 className="text-xl font-semibold">More projects</h3>
          <span className="h-px flex-1 bg-white/10" />
          <Link href="/projects" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary">
            All case studies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {more.map((p, i) => (
            <Link key={p.slug} href={`/projects/${p.slug}`} className="group block" data-reveal style={{ ["--d" as string]: i % 3 }}>
              <div data-tilt>
                <BrowserFrame p={p} sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw" />
              </div>
              <div className="mt-4 flex items-start justify-between gap-3 px-1">
                <div>
                  <h4 className="text-lg font-semibold transition-colors group-hover:text-primary">{p.title}</h4>
                  <p className="text-sm text-muted-foreground">{p.tagline}</p>
                </div>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 transition group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
