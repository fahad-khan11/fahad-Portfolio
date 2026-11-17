import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Users, Briefcase, Building2, Layers, Plug } from "lucide-react"
import { projects, profile, SITE_URL } from "@/lib/data"
import { Nav } from "../../components/nav"
import { Effects } from "../../components/effects"
import { TechIcon } from "../../components/tech-icon"
import { BrowserFrame, host } from "../../components/project-visuals"

export const dynamicParams = false

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const p = projects.find((x) => x.slug === slug)
  if (!p) return {}
  const title = `${p.title}: ${p.tagline} (Case Study)`
  const description = `${p.overview.slice(0, 155).trimEnd()}…`
  return {
    title,
    description,
    alternates: { canonical: `/projects/${p.slug}` },
    keywords: [p.title, p.tagline, ...p.stack, "Fahad Farman", "case study"],
    openGraph: { type: "article", title, description, url: `${SITE_URL}/projects/${p.slug}`, ...(p.image ? { images: [{ url: p.image }] } : {}) },
    twitter: { card: "summary_large_image", title, description },
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const i = projects.findIndex((x) => x.slug === slug)
  if (i < 0) notFound()
  const p = projects[i]
  const prev = projects[(i - 1 + projects.length) % projects.length]
  const next = projects[(i + 1) % projects.length]

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: `${p.title}: ${p.tagline}`,
        description: p.overview,
        url: `${SITE_URL}/projects/${p.slug}`,
        ...(p.image ? { image: `${SITE_URL}${p.image}` } : {}),
        author: { "@type": "Person", name: profile.name, url: SITE_URL },
        publisher: { "@type": "Person", name: profile.name },
        keywords: p.stack.join(", "),
        about: { "@type": "SoftwareApplication", name: p.title, applicationCategory: p.category, ...(p.link ? { url: p.link } : {}) },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE_URL}/projects` },
          { "@type": "ListItem", position: 3, name: p.title, item: `${SITE_URL}/projects/${p.slug}` },
        ],
      },
    ],
  }

  const meta = [
    { icon: Briefcase, label: "Role", value: p.role },
    { icon: Building2, label: "Company", value: p.company },
    { icon: Layers, label: "Category", value: p.category },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Effects />
      <Nav base="/" />

      <main className="relative overflow-x-clip pb-24 pt-28 md:pt-36">
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[30rem] w-[70%] -translate-x-1/2 rounded-full bg-primary/[0.08] blur-[120px]" />
        <div aria-hidden className="grid-bg pointer-events-none absolute inset-x-0 top-0 -z-10 h-[40rem]" />

        <article className="container-x">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="enter font-mono text-xs text-muted-foreground" style={{ ["--i" as string]: 0, ["--sd" as string]: "60ms" }}>
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-primary">~</Link></li>
              <li>/</li>
              <li><Link href="/projects" className="hover:text-primary">projects</Link></li>
              <li>/</li>
              <li className="text-primary">{p.slug}</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mt-8 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow enter" style={{ ["--i" as string]: 1, ["--sd" as string]: "60ms" }}>{p.tagline}</p>
              <h1 className="enter mt-4 text-4xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl" style={{ ["--i" as string]: 2, ["--sd" as string]: "60ms" }}>
                {p.title}
              </h1>
              <p className="enter mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground" style={{ ["--i" as string]: 3, ["--sd" as string]: "60ms" }}>
                {p.overview}
              </p>
            </div>
            <div className="enter flex flex-wrap gap-3 lg:justify-end" style={{ ["--i" as string]: 4, ["--sd" as string]: "60ms" }}>
              {p.link && (
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Visit live site <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
              <Link href="/#projects" className="btn-ghost">
                <ArrowLeft className="h-4 w-4" /> All projects
              </Link>
            </div>
          </header>

          {/* Visual */}
          <div className="enter mt-14 md:mt-20" style={{ ["--i" as string]: 5, ["--sd" as string]: "60ms" }}>
            <div className="photo3d">
              <div data-tilt>
                <BrowserFrame p={p} sizes="(min-width: 1280px) 1200px, 100vw" />
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="mt-16 grid gap-10 md:mt-24 lg:grid-cols-[1fr_22rem] lg:gap-16">
            <div className="space-y-14">
              <section data-reveal>
                <h2 className="text-2xl font-bold sm:text-3xl">Overview</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{p.overview}</p>
              </section>

              <section data-reveal>
                <h2 className="text-2xl font-bold sm:text-3xl">What I built</h2>
                <ul className="mt-6 space-y-4">
                  {p.built.map((b, k) => (
                    <li key={b} className="flex gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/15 font-mono text-xs font-bold text-primary">
                        {String(k + 1).padStart(2, "0")}
                      </span>
                      <p className="leading-relaxed text-foreground/85">{b}</p>
                    </li>
                  ))}
                </ul>
              </section>

              <section data-reveal>
                <h2 className="flex items-center gap-3 text-2xl font-bold sm:text-3xl">
                  <Users className="h-6 w-6 text-primary" /> Who it serves
                </h2>
                <ul className="mt-5 flex flex-wrap gap-3">
                  {p.users.map((u) => (
                    <li key={u} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm">
                      <Check className="h-4 w-4 text-primary" /> {u}
                    </li>
                  ))}
                </ul>
              </section>

              {/* CTA */}
              <section data-reveal className="term">
                <div className="term-bar">
                  <span className="term-dots"><i /><i /><i /></span>
                  <span className="term-tab">next-steps.sh</span>
                </div>
                <div className="flex flex-col items-start justify-between gap-6 p-6 sm:flex-row sm:items-center sm:p-8">
                  <div>
                    <p className="font-mono text-sm text-primary">$ echo &quot;need something similar?&quot;</p>
                    <p className="mt-2 text-xl font-semibold">Let&apos;s build your {p.category.split("·")[0].trim().toLowerCase()} product.</p>
                  </div>
                  <Link href="/#contact" className="btn-primary shrink-0">
                    Get in touch <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-28 lg:self-start" data-reveal>
              <div className="term">
                <div className="term-bar">
                  <span className="term-dots"><i /><i /><i /></span>
                  <span className="term-tab">project.json</span>
                </div>
                <dl className="divide-y divide-white/[0.06] px-5">
                  {meta.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-3 py-4">
                      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <div>
                        <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{label}</dt>
                        <dd className="mt-0.5 text-sm font-medium">{value}</dd>
                      </div>
                    </div>
                  ))}
                  {p.integrations && (
                    <div className="flex items-start gap-3 py-4">
                      <Plug className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <div>
                        <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Integrations</dt>
                        <dd className="mt-0.5 text-sm font-medium">{p.integrations.join(" · ")}</dd>
                      </div>
                    </div>
                  )}
                  <div className="py-4">
                    <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Tech stack</dt>
                    <dd className="mt-3 flex flex-wrap gap-2">
                      {p.stack.map((t) => (
                        <span key={t} className="chip gap-1.5">
                          <TechIcon name={t} className="h-3.5 w-3.5" />
                          {t}
                        </span>
                      ))}
                    </dd>
                  </div>
                  {p.link && (
                    <div className="py-4">
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-3 text-sm hover:text-primary">
                        <span className="truncate font-mono">{host(p.link)}</span>
                        <ArrowUpRight className="h-4 w-4 shrink-0" />
                      </a>
                    </div>
                  )}
                </dl>
              </div>
            </aside>
          </div>

          {/* Prev / next */}
          <nav aria-label="More case studies" className="mt-24 grid gap-4 sm:grid-cols-2">
            {[
              { label: "Previous", item: prev, icon: ArrowLeft },
              { label: "Next", item: next, icon: ArrowRight },
            ].map(({ label, item, icon: Icon }, k) => (
              <Link
                key={label}
                href={`/projects/${item.slug}`}
                className={`card group flex items-center gap-4 p-5 ${k === 1 ? "sm:flex-row-reverse sm:text-right" : ""}`}
                data-reveal
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/10 transition group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-4 w-4" />
                </span>
                <span>
                  <span className="block font-mono text-xs text-muted-foreground">{label} case study</span>
                  <span className="block text-lg font-semibold group-hover:text-primary">{item.title}</span>
                  <span className="block text-sm text-muted-foreground">{item.tagline}</span>
                </span>
              </Link>
            ))}
          </nav>
        </article>
      </main>

      <footer className="border-t border-white/[0.06] py-8">
        <div className="container-x flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Fahad Farman</p>
          <Link href="/" className="hover:text-primary">← Back to portfolio</Link>
        </div>
      </footer>
    </>
  )
}
