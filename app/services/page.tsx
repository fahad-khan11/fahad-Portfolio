import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Bot, Layers, Radio, Plug, Check } from "lucide-react"
import { profile, projects, certifications, SITE_URL } from "@/lib/data"
import { Nav } from "../components/nav"
import { Effects } from "../components/effects"
import { TechIcon } from "../components/tech-icon"
import { RagPipeline } from "../components/rag-pipeline"

const title = "Hire an AI Application Engineer & Full Stack Engineer"
const description =
  "Hire Fahad Farman, an AI Application Engineer and Full Stack Engineer, for RAG pipelines, LLM integrations, AI agents, and production SaaS built with Next.js, NestJS and TypeScript. Available remotely worldwide."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  keywords: [
    "hire AI engineer",
    "hire AI application engineer",
    "hire full stack engineer",
    "RAG developer",
    "RAG pipeline development",
    "LLM integration",
    "AI agent development",
    "LangChain developer",
    "LangGraph developer",
    "Next.js developer for hire",
    "NestJS developer for hire",
    "SaaS development",
    "remote AI engineer",
    "Fahad Farman",
  ],
  openGraph: { title, description, url: `${SITE_URL}/services`, type: "website" },
  twitter: { card: "summary_large_image", title, description },
}

const services = [
  {
    icon: Bot,
    title: "AI Application Engineering",
    lead: "Retrieval-Augmented Generation (RAG), LLM features and AI agents built into real products.",
    points: [
      "RAG pipelines: document ingestion, embeddings, vector databases and grounded LLM answers",
      "AI agents and multi-step workflows with LangChain, LangGraph and the Model Context Protocol (MCP)",
      "OpenAI API integration, prompt engineering and LLM fine-tuning",
      "AI-assisted features such as summaries inside existing apps",
    ],
    stack: ["LangChain", "LangGraph", "OpenAI API", "Python", "FastAPI"],
    proof: ["sehatyar"],
  },
  {
    icon: Layers,
    title: "Full-Stack SaaS Development",
    lead: "Production web platforms, from the database schema to a polished, responsive UI.",
    points: [
      "Multi-role portals (user, vendor, admin) with JWT authentication and RBAC",
      "Next.js frontends (SSR/SSG) with Tailwind CSS, shadcn/ui or Material UI",
      "NestJS/Node.js APIs with TypeORM, PostgreSQL and MongoDB",
      "Dashboards and analytics with React Query and ApexCharts",
    ],
    stack: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "MongoDB"],
    proof: ["aeronaa", "squaredesk", "corporateasy"],
  },
  {
    icon: Radio,
    title: "Real-Time Systems",
    lead: "Live communication features that need to work reliably at the moment they're used.",
    points: [
      "WebRTC audio/video calling with Socket.IO signaling and ICE exchange",
      "Real-time chat and status updates over WebSockets",
      "Session management, matching and history on the backend",
    ],
    stack: ["WebRTC", "Socket.IO", "NestJS"],
    proof: ["vilsal-connect", "routewise"],
  },
  {
    icon: Plug,
    title: "APIs & Integrations",
    lead: "Connecting your product to payments, travel inventory, messaging and maps.",
    points: [
      "RESTful API design and documentation with Swagger",
      "Stripe payments, SMTP/SendGrid email and Twilio messaging",
      "Third-party data APIs (Akbar Travel API, Google Maps API)",
      "Headless CMS integration with Strapi",
    ],
    stack: ["Stripe", "Twilio", "SendGrid", "Google Maps API", "Strapi"],
    proof: ["aeronaa", "asrar"],
  },
]

const steps = [
  { n: "01", t: "Discover", d: "We talk through your goals, users and constraints, and agree on what success looks like." },
  { n: "02", t: "Plan", d: "I propose the architecture, data model and milestones so you know exactly what you're getting." },
  { n: "03", t: "Build", d: "Working software in short iterations, with regular demos and a shared progress board." },
  { n: "04", t: "Ship & support", d: "Deployment, handover documentation, and support while your product goes live." },
]

const faqs = [
  {
    q: "Are you available for remote work?",
    a: "Yes. I'm open to freelance projects and full-time roles, and I've delivered features in fully remote teams. I'm based in Islamabad, Pakistan (UTC+5) and work with clients worldwide.",
  },
  {
    q: "Can you build RAG and AI-agent features?",
    a: "Yes. I build Retrieval-Augmented Generation pipelines and agentic workflows with LangChain, LangGraph and the OpenAI API, and I've completed 20 certifications covering generative AI, LLM fine-tuning, vector databases and AI agents.",
  },
  {
    q: "What is your main tech stack?",
    a: "Next.js and React on the frontend, NestJS and Node.js on the backend, TypeScript throughout, and PostgreSQL or MongoDB for data. For AI work I use Python, FastAPI, LangChain and LangGraph.",
  },
  {
    q: "Do you take over existing codebases?",
    a: "Yes. I joined a live production codebase and was shipping React components and API integrations within two weeks.",
  },
  {
    q: "How do we get started?",
    a: `Send a short message about your project through the contact form or email ${profile.email}. I usually reply within 24 hours.`,
  },
]

export default function ServicesPage() {
  const bySlug = Object.fromEntries(projects.map((p) => [p.slug, p]))
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      ...services.map((s) => ({
        "@type": "Service",
        name: s.title,
        description: s.lead,
        serviceType: s.title,
        areaServed: "Worldwide",
        provider: { "@type": "Person", name: profile.name, url: SITE_URL, jobTitle: "AI Application Engineer & Full Stack Engineer" },
      })),
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Effects />
      <Nav base="/" />
      <main className="relative overflow-x-clip">
        {/* ================= HERO (centered) ================= */}
        <section className="relative pb-16 pt-32 sm:pb-20 sm:pt-40 lg:pb-24">
          <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 -z-10" />
          <div aria-hidden className="pointer-events-none absolute left-1/2 top-24 -z-10 h-[28rem] w-[min(48rem,90vw)] -translate-x-1/2 rounded-full bg-primary/[0.1] blur-[120px]" />

          <div className="container-x">
            <div className="mx-auto max-w-4xl text-center">
              <span
                className="enter inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary"
                style={{ ["--i" as string]: 0, ["--sd" as string]: "60ms" }}
              >
                <span className="pulse-dot relative h-1.5 w-1.5 rounded-full bg-primary" /> Taking on new projects
              </span>
              <h1
                className="enter mx-auto mt-6 max-w-2xl font-mono text-[11px] uppercase tracking-[0.2em] text-primary sm:text-xs"
                style={{ ["--i" as string]: 1, ["--sd" as string]: "60ms" }}
              >
                Hire an AI Application Engineer &amp; Full Stack Engineer
              </h1>
              <p
                className="enter mt-5 font-[family-name:var(--font-heading)] text-[clamp(2.25rem,6vw,4.5rem)] font-extrabold leading-[1.02] tracking-tight"
                style={{ ["--i" as string]: 2, ["--sd" as string]: "60ms" }}
              >
                AI-powered products,
                <br />
                <span className="text-gradient">engineered end to end.</span>
              </p>
              <p
                className="enter mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
                style={{ ["--i" as string]: 3, ["--sd" as string]: "60ms" }}
              >
                I&apos;m {profile.name}. I build RAG pipelines, LLM features and AI agents, and the production SaaS platforms they
                live in, with Next.js, NestJS and TypeScript. Remote, for clients worldwide.
              </p>
              <div className="enter mt-8 flex flex-wrap justify-center gap-3" style={{ ["--i" as string]: 4, ["--sd" as string]: "60ms" }}>
                <Link href="/#contact" className="btn-primary">Start a project <ArrowRight className="h-4 w-4" /></Link>
                <Link href="/projects" className="btn-ghost">See case studies</Link>
              </div>
              <dl
                className="enter mx-auto mt-12 grid max-w-xl grid-cols-3 divide-x divide-white/[0.08] rounded-2xl border border-white/[0.08] bg-white/[0.02] py-5 backdrop-blur"
                style={{ ["--i" as string]: 5, ["--sd" as string]: "60ms" }}
              >
                {[
                  { v: "2+", l: "years shipping" },
                  { v: String(projects.length), l: "case studies" },
                  { v: String(certifications.length), l: "AI & dev certs" },
                ].map((x) => (
                  <div key={x.l} className="px-2">
                    <dt className="sr-only">{x.l}</dt>
                    <dd className="font-[family-name:var(--font-heading)] text-2xl font-bold sm:text-3xl">{x.v}</dd>
                    <dd className="mt-0.5 text-xs text-muted-foreground sm:text-sm">{x.l}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="enter mx-auto mt-14 max-w-6xl sm:mt-16" style={{ ["--i" as string]: 6, ["--sd" as string]: "60ms" }}>
              <p className="mb-4 text-center font-mono text-xs text-muted-foreground">{"// how a RAG pipeline answers a question"}</p>
              <RagPipeline />
            </div>
          </div>
        </section>

        {/* ================= SERVICES (bento) ================= */}
        <section className="section !pt-8 sm:!pt-12" aria-labelledby="svc-title">
          <div className="container-x">
            <div className="section-head flex flex-wrap items-end justify-between gap-4" data-reveal>
              <div>
                <p className="eyebrow">Services</p>
                <h2 id="svc-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                  What I can <span className="text-gradient">build for you</span>
                </h2>
              </div>
              <p className="max-w-sm text-muted-foreground">Four areas I work in daily, each backed by shipped, production work.</p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {services.map((s, i) => {
                return (
                  <article
                    key={s.title}
                    className={`svc-card flex flex-col p-6 sm:p-8 ${i === 0 ? "svc-featured" : ""}`}
                    data-reveal
                    style={{ ["--d" as string]: i % 2 }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.7)]">
                        <s.icon className="h-6 w-6" />
                      </span>
                      <span className="outline-num font-[family-name:var(--font-heading)] text-3xl font-extrabold">0{i + 1}</span>
                    </div>
                    <h3 className="mt-6 text-xl font-bold sm:text-2xl">{s.title}</h3>
                    <p className="mt-2 text-muted-foreground">{s.lead}</p>
                    <ul className="mt-5 grid gap-y-2.5">
                      {s.points.map((pt) => (
                        <li key={pt} className="flex gap-2.5 text-sm leading-relaxed text-foreground/85">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {pt}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-6">
                      <div className="flex flex-wrap gap-2">
                        {s.stack.map((t) => (
                          <span key={t} className="chip gap-1.5"><TechIcon name={t} className="h-3.5 w-3.5" />{t}</span>
                        ))}
                      </div>
                      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/[0.06] pt-4 text-sm">
                        <span className="font-mono text-xs text-muted-foreground">shipped in</span>
                        {s.proof.map((slug) => (
                          <Link key={slug} href={`/projects/${slug}`} className="inline-flex items-center gap-1 font-medium text-primary hover:underline">
                            {bySlug[slug]?.title} <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* ================= PROCESS ================= */}
        <section className="section" aria-labelledby="proc-title">
          <div className="container-x">
            <div className="section-head max-w-2xl" data-reveal>
              <p className="eyebrow">Process</p>
              <h2 id="proc-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                How we&apos;ll <span className="text-gradient">work together</span>
              </h2>
            </div>
            <ol className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              <span aria-hidden className="absolute left-6 right-6 top-6 hidden h-px bg-gradient-to-r from-primary/60 via-primary/20 to-transparent lg:block" />
              {steps.map((st, i) => (
                <li key={st.n} className="relative" data-reveal style={{ ["--d" as string]: i }}>
                  <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full border border-primary/40 bg-background font-mono text-sm font-bold text-primary">
                    {st.n}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{st.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{st.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section className="section" aria-labelledby="faq-title">
          <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start" data-reveal>
              <p className="eyebrow">FAQ</p>
              <h2 id="faq-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">Questions clients ask</h2>
              <p className="mt-4 text-muted-foreground">Can&apos;t find your answer? Email me and I&apos;ll get back within a day.</p>
              <a href={`mailto:${profile.email}`} className="btn-ghost mt-6">{profile.email}</a>
            </div>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <details key={f.q} className="faq group rounded-2xl border border-white/[0.08] bg-white/[0.02] transition-colors open:border-primary/30" data-reveal style={{ ["--d" as string]: i % 3 }} open={i === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-medium sm:p-6 [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 text-lg text-primary transition group-open:rotate-45 group-open:border-primary/40">+</span>
                  </summary>
                  <p className="-mt-1 px-5 pb-5 leading-relaxed text-muted-foreground sm:px-6 sm:pb-6">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="section !pt-0">
          <div className="container-x">
            <div className="relative overflow-hidden rounded-[2rem] border border-primary/30 bg-[radial-gradient(ellipse_at_top_left,hsl(var(--primary)/0.18),transparent_60%),linear-gradient(180deg,rgb(255_255_255/0.03),transparent)] px-6 py-12 text-center sm:px-12 sm:py-16" data-reveal>
              <div aria-hidden className="grid-bg absolute inset-0 opacity-50" />
              <div className="relative">
                <p className="font-mono text-sm text-primary">$ ./start-project.sh</p>
                <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold leading-tight sm:text-5xl">Have an AI or SaaS idea? Let&apos;s build it.</h2>
                <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Tell me what you&apos;re working on. I usually reply within 24 hours.</p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Link href="/#contact" className="btn-primary">Get in touch <ArrowRight className="h-4 w-4" /></Link>
                  <a href={profile.cv} download className="btn-ghost">Download CV</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/[0.06] py-8">
        <div className="container-x flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <Link href="/" className="hover:text-primary">← Back to portfolio</Link>
        </div>
      </footer>
    </>
  )
}
