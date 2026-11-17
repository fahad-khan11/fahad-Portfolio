import Image from "next/image"
import { ArrowRight, Download, ArrowDown, GraduationCap, Github, Linkedin, Mail } from "lucide-react"
import { Nav } from "./components/nav"
import { Effects } from "./components/effects"
import { Splash } from "./components/splash"
import { Constellation } from "./components/constellation"
import { FloatingAvatar } from "./components/floating-avatar"
import { ProjectsSection } from "./components/projects-section"
import { ContactSection } from "./components/contact-section"
import { TechIcon } from "./components/tech-icon"
import { Certifications } from "./components/certifications"
import { profile, stats, experience, skills, techRows, education, certifications } from "@/lib/data"
import { techIcons } from "@/lib/tech"

const heroStack = ["Next.js", "React", "NestJS", "TypeScript", "PostgreSQL", "LangChain", "OpenAI API"]
const glyphs = [
  { t: "</>", x: "8%", y: "22%", z: 0.9, s: "2.6rem" },
  { t: "{ }", x: "86%", y: "18%", z: 0.6, s: "2.2rem" },
  { t: "=>", x: "12%", y: "74%", z: 0.5, s: "2rem" },
  { t: "λ", x: "90%", y: "70%", z: 1, s: "3rem" },
  { t: "#", x: "74%", y: "88%", z: 0.4, s: "1.8rem" },
  { t: "()", x: "24%", y: "92%", z: 0.7, s: "1.8rem" },
]

function Term({ file, children, className = "", extra }: { file: string; children: React.ReactNode; className?: string; extra?: React.ReactNode }) {
  return (
    <div className={`term ${className}`}>
      <div className="term-bar">
        <span className="term-dots"><i /><i /><i /></span>
        <span className="term-tab">{file}</span>
        {extra && <span className="ml-auto">{extra}</span>}
      </div>
      {children}
    </div>
  )
}

function Heading({ eyebrow, title, intro, center }: { eyebrow: string; title: React.ReactNode; intro?: string; center?: boolean }) {
  return (
    <div className={`section-head max-w-2xl ${center ? "mx-auto text-center" : ""}`} data-reveal>
      <p className={`eyebrow ${center ? "justify-center" : ""}`}>{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">{title}</h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{intro}</p>}
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Splash />
      <Effects />
      <Nav />
      <FloatingAvatar />

      <main id="top" className="relative overflow-x-clip">
        {/* ================= HERO ================= */}
        <section id="hero" className="hero relative flex min-h-[100svh] items-center justify-center pb-16 pt-24 sm:pb-20 sm:pt-28" aria-labelledby="hero-title">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0">
              <Constellation />
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_45%,transparent_0%,hsl(var(--background))_100%)]" />
            <div className="absolute left-1/2 top-[38%] h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.12] blur-[110px]" />
            {glyphs.map((g) => (
              <span key={g.t} className="glyph" style={{ left: g.x, top: g.y, fontSize: g.s, ["--z" as string]: g.z }}>
                <span>{g.t}</span>
              </span>
            ))}
          </div>

          <div className="container-x relative text-center">
            <div className="enter mx-auto w-fit" style={{ ["--i" as string]: 0 }}>
              <div id="hero-avatar" className="relative mx-auto h-24 w-24 sm:h-28 sm:w-28">
                <span aria-hidden className="avatar-ring absolute -inset-1.5 rounded-full" />
                <Image
                  src={profile.photo}
                  alt="Fahad Farman"
                  fill
                  priority
                  fetchPriority="high"
                  sizes="112px"
                  className="rounded-full border-4 border-background object-cover"
                />
              </div>
            </div>

            <a
              href="#contact"
              className="enter mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-foreground/80 backdrop-blur sm:text-sm"
              style={{ ["--i" as string]: 1 }}
            >
              <span className="pulse-dot relative h-2 w-2 rounded-full bg-primary" />
              Open to freelance & full-time roles
            </a>

            <h1
              id="hero-title"
              className="enter mt-7 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-primary sm:text-sm"
              style={{ ["--i" as string]: 2 }}
            >
              Fahad Farman <span className="text-muted-foreground">·</span> Full Stack &amp; AI Application Engineer
            </h1>
            <p className="mt-4 font-[family-name:var(--font-heading)] font-extrabold leading-[0.95] tracking-tight">
              <span className="w3d block text-[clamp(2.6rem,9vw,6.5rem)]">
                {["From", "idea"].map((w, i) => (
                  <span key={w} style={{ ["--w" as string]: i }}>{w}&nbsp;</span>
                ))}
              </span>
              <span className="w3d block text-[clamp(2.6rem,9vw,6.5rem)] text-gradient-muted">
                {["to", "production."].map((w, i) => (
                  <span key={w} style={{ ["--w" as string]: i + 2 }}>{w}&nbsp;</span>
                ))}
              </span>
            </p>

            <p className="enter mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl" style={{ ["--i" as string]: 4 }}>
              I&apos;m <span className="font-semibold text-foreground">Fahad Farman</span>, a Full Stack Engineer building AI-powered SaaS, RAG pipelines
              and real-time web apps with Next.js, NestJS, TypeScript and LangChain, from database design to pixel-perfect UI.
            </p>

            <div className="enter mt-9 flex flex-wrap justify-center gap-3" style={{ ["--i" as string]: 5 }}>
              <a href="#projects" className="btn-primary">
                View projects <ArrowRight className="h-4 w-4" />
              </a>
              <a href={profile.cv} download className="btn-ghost">
                <Download className="h-4 w-4" /> Download resume
              </a>
            </div>

            <ul className="enter mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-2.5" style={{ ["--i" as string]: 6 }}>
              {heroStack.map((t) => (
                <li key={t} className="chip gap-2 !px-3.5 !py-1.5 !text-sm backdrop-blur">
                  <TechIcon name={t} className="h-4 w-4" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <a href="#about" aria-label="Scroll to about" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block">
            <span className="scroll-cue grid h-9 w-6 justify-center rounded-full border border-white/20 pt-1.5">
              <span className="h-2 w-1 rounded-full bg-primary" />
            </span>
          </a>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about" className="section" aria-labelledby="about-title">
          <div className="container-x grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="photo3d mx-auto w-full max-w-md" data-reveal>
              <div className="photo3d-card relative aspect-[4/5]">
                <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border border-primary/40" />
                <div className="absolute inset-0 overflow-hidden rounded-[2rem] bg-primary shadow-[0_50px_100px_-40px_rgba(0,0,0,0.9)] ring-1 ring-white/10">
                  <Image
                    src={profile.photo}
                    alt="Fahad Farman, Full Stack Engineer based in Islamabad, Pakistan"
                    fill
                    sizes="(min-width: 1024px) 448px, 90vw"
                    className="object-cover"
                  />
                  <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
                  <p className="absolute bottom-4 left-4 rounded-full bg-black/50 px-3 py-1.5 font-mono text-xs text-white/85 backdrop-blur">
                    📍 {profile.location}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="eyebrow" data-reveal>About me</p>
              <h2 id="about-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl" data-reveal>
                Engineering products that <span className="text-gradient">scale and convert.</span>
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p data-reveal style={{ ["--d" as string]: 1 }}>
                  I&apos;m a full-stack engineer who works across the entire stack, from Next.js frontends to NestJS APIs and
                  PostgreSQL/MongoDB data models, shipping production SaaS used by real customers.
                </p>
                <p data-reveal style={{ ["--d" as string]: 2 }}>
                  At <span className="text-foreground">Firnas.tech</span> I build booking workflows, admin dashboards, RBAC-secured
                  APIs and payment integrations. I&apos;ve shipped real-time WebRTC calling, WebSocket chat and AI-assisted features,
                  and I&apos;m studying Software Engineering at <span className="text-foreground">COMSATS University</span>.
                </p>
                <p data-reveal style={{ ["--d" as string]: 3 }}>
                  On the AI engineering side, I build <span className="text-foreground">RAG pipelines</span>, LLM integrations and
                  agentic workflows with LangChain, LangGraph and the OpenAI API, backed by 20 certifications in generative
                  AI, LLM fine-tuning, vector databases and AI agents.
                </p>
              </div>
              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 sm:mt-10 sm:grid-cols-4" data-reveal style={{ ["--d" as string]: 4 }}>
                {stats.map((s) => (
                  <div key={s.label}>
                    <dd className="font-[family-name:var(--font-heading)] text-4xl font-bold text-foreground">
                      <span data-count={s.value} data-suffix={s.suffix}>{s.value}{s.suffix}</span>
                    </dd>
                    <dt className="mt-1 text-sm text-muted-foreground">{s.label}</dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* ================= TECH MARQUEE ================= */}
        <section className="section" aria-labelledby="stack-title">
          <div className="container-x">
            <Heading center eyebrow="Toolbox" title={<span id="stack-title">Tech <span className="text-gradient">stack</span></span>} />
          </div>
          <div className="space-y-4 sm:space-y-5">
            {techRows.map((row, r) => (
              <div key={r} className="marquee">
                <ul className={`marquee-track flex w-max gap-5 py-2 ${r % 2 ? "marquee-rev" : ""}`}>
                  {[...row, ...row].map((t, i) => (
                    <li
                      key={i}
                      aria-hidden={i >= row.length}
                      className="tech-tile"
                      style={{ ["--brand" as string]: techIcons[t] ? `#${techIcons[t].hex}` : "#c5f25a" }}
                    >
                      <TechIcon name={t} className="h-8 w-8" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ================= EXPERIENCE ================= */}
        <section id="experience" className="section" aria-labelledby="exp-title">
          <div className="container-x">
            <Heading
              eyebrow="Experience"
              title={<span id="exp-title">Where I&apos;ve <span className="text-gradient">built & shipped</span></span>}
              intro="Production work across SaaS, booking, logistics and CMS-driven platforms."
            />
            <ol className="space-y-5 sm:space-y-6">
              {experience.map((job, i) => (
                <li key={job.file} className="relative pl-5 sm:pl-8" data-reveal style={{ ["--d" as string]: i }}>
                  <span aria-hidden className="exp-rail absolute bottom-0 left-0 top-0 w-[3px] rounded-full" />
                  <Term
                    file={job.file}
                    className="w-full"
                    extra={
                      job.current ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 text-[11px] text-primary">
                          <span className="pulse-dot relative h-1.5 w-1.5 rounded-full bg-primary" /> Current
                        </span>
                      ) : undefined
                    }
                  >
                    <div className="p-5 sm:p-7">
                      <div className="flex flex-wrap items-start gap-4">
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.04] font-mono font-bold text-primary">
                          {job.company[0]}
                        </span>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-lg font-semibold sm:text-xl">{job.role}</h3>
                          <p className="text-sm font-medium text-primary">{job.company}</p>
                          <p className="mt-1 font-mono text-xs text-muted-foreground">
                            {"// "}{job.period} · {job.location}
                          </p>
                        </div>
                      </div>
                      <ul className="mt-5 space-y-2.5 font-mono text-[13px] leading-relaxed text-foreground/80 sm:pl-[3.75rem]">
                        {job.points.map((pt) => (
                          <li key={pt} className="flex gap-2.5">
                            <span aria-hidden className="text-primary">▹</span>
                            {pt}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 flex flex-wrap gap-2 sm:pl-[3.75rem]">
                        {job.stack.map((t) => (
                          <span key={t} className="chip gap-1.5">
                            <TechIcon name={t} className="h-3.5 w-3.5" />
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Term>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <ProjectsSection />

        {/* ================= SKILLS ================= */}
        <section id="skills" className="section" aria-labelledby="skills-title">
          <div className="container-x">
            <Heading
              eyebrow="Skills"
              title={<span id="skills-title">What I <span className="text-gradient">work with</span></span>}
              intro="A breakdown of my toolkit, grouped by area."
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((s, i) => (
                <div key={s.group} data-reveal style={{ ["--d" as string]: i % 3 }}>
                  <Term file={`~/${s.dir}`} className="h-full">
                    <div className="p-5">
                      <p className="font-mono text-sm">
                        <span className="text-muted-foreground">$</span> <span className="text-primary">ls ./{s.dir}</span>
                      </p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {s.items.map((it) => (
                          <li key={it} className="chip gap-1.5 transition hover:border-primary/40">
                            {techIcons[it] ? <TechIcon name={it} className="h-3.5 w-3.5" /> : <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Term>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= EDUCATION ================= */}
        <section id="education" className="section" aria-labelledby="edu-title">
          <div className="container-x">
            <Heading eyebrow="Education" title={<span id="edu-title">Where I <span className="text-gradient">study</span></span>} />
            <div data-reveal>
              <Term file="education.md" className="w-full">
                <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
                  <div className="flex items-start gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                      <GraduationCap className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold sm:text-2xl">{education.degree}</h3>
                      <p className="text-primary">{education.school}</p>
                      <p className="mt-1 font-mono text-xs text-muted-foreground">{"// "}{education.period} · {education.location}</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-muted-foreground">$ cat coursework.txt</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {education.coursework.map((c) => (
                        <li key={c} className="chip">{c}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Term>
            </div>
          </div>
        </section>

        {/* ================= CERTIFICATIONS ================= */}
        <section id="certifications" className="section" aria-labelledby="cert-title">
          <div className="container-x">
            <Heading
              eyebrow="Certifications"
              title={<span id="cert-title"><span className="text-gradient">{certifications.length}</span> verified certifications</span>}
              intro="Continuous learning in Agentic AI, Generative AI, LLMs and machine learning, from IBM, Google, Vanderbilt University and Simplilearn."
            />
            <div data-reveal>
              <Certifications />
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="relative pb-10 pt-14">
        <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="container-x grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-white/15">
                <Image src={profile.photo} alt="" fill sizes="40px" className="object-cover" />
              </span>
              <span className="font-[family-name:var(--font-heading)] font-semibold">Fahad Farman</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">Full Stack &amp; AI Engineer building SaaS, RAG pipelines and real-time web apps.</p>
            <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Open to work
            </span>
          </div>
          <nav aria-label="Footer">
            <p className="text-sm font-semibold">Navigation</p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {["About", "Experience", "Projects", "Skills", "Contact"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-primary">{l}</a></li>
              ))}
              <li><a href="/services" className="hover:text-primary">Services &amp; hiring</a></li>
              <li><a href="/projects" className="hover:text-primary">Case studies</a></li>
            </ul>
          </nav>
          <div>
            <p className="text-sm font-semibold">Social</p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li><a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-primary"><Github className="h-4 w-4" />GitHub</a></li>
              <li><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-primary"><Linkedin className="h-4 w-4" />LinkedIn</a></li>
              <li><a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-primary"><Mail className="h-4 w-4" />Email</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Resume</p>
            <p className="mt-4 text-sm text-muted-foreground">Latest CV as PDF.</p>
            <a href={profile.cv} download className="btn-ghost mt-4 !px-4 !py-2">
              <Download className="h-4 w-4" /> Download CV
            </a>
          </div>
        </div>
        <div className="container-x mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Fahad Farman. All rights reserved.</p>
          <a href="#top" className="inline-flex items-center gap-1 hover:text-primary">Back to top <ArrowDown className="h-3 w-3 rotate-180" /></a>
        </div>
      </footer>
    </>
  )
}
