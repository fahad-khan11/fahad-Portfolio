import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Bot, Layers, Radio, Plug, Check } from "lucide-react"
import { profile, projects, certifications, SITE_URL } from "@/lib/data"
import { Nav } from "../components/nav"
import { Effects } from "../components/effects"
import { TechIcon } from "../components/tech-icon"

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
      <main className="relative overflow-x-clip pb-16 pt-28 sm:pt-36">
        <div aria-hidden className="grid-bg pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem]" />
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[28rem] w-[70%] -translate-x-1/2 rounded-full bg-primary/[0.08] blur-[120px]" />

        <div className="container-x">
          <p className="eyebrow enter" style={{ ["--i" as string]: 0, ["--sd" as string]: "60ms" }}>Services</p>
          <h1 className="enter mt-4 max-w-4xl text-4xl font-extrabold leading-[1.05] sm:text-6xl" style={{ ["--i" as string]: 1, ["--sd" as string]: "60ms" }}>
            Hire an <span className="text-gradient">AI Application Engineer</span> &amp; Full Stack Engineer
          </h1>
          <p className="enter mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground" style={{ ["--i" as string]: 2, ["--sd" as string]: "60ms" }}>
            I&apos;m {profile.name}. I build RAG pipelines, LLM features and AI agents, and the production SaaS platforms they live in,
            using Next.js, NestJS and TypeScript. Available remotely for clients worldwide.
          </p>
          <div className="enter mt-8 flex flex-wrap gap-3" style={{ ["--i" as string]: 3, ["--sd" as string]: "60ms" }}>
            <Link href="/#contact" className="btn-primary">Start a project <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/projects" className="btn-ghost">See case studies</Link>
          </div>
        </div>

        {/* Services */}
        <section className="section" aria-labelledby="svc-title">
          <div className="container-x">
            <h2 id="svc-title" className="section-head text-3xl font-bold sm:text-4xl" data-reveal>What I can build for you</h2>
            <div className="grid gap-5 lg:grid-cols-2">
              {services.map((s, i) => (
                <article key={s.title} className="term flex flex-col" data-reveal style={{ ["--d" as string]: i % 2 }}>
                  <div className="term-bar">
                    <span className="term-dots"><i /><i /><i /></span>
                    <span className="term-tab">{s.title.toLowerCase().replace(/[^a-z]+/g, "-")}.md</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary"><s.icon className="h-5 w-5" /></span>
                      <h3 className="text-xl font-semibold sm:text-2xl">{s.title}</h3>
                    </div>
                    <p className="mt-4 text-muted-foreground">{s.lead}</p>
                    <ul className="mt-5 space-y-2.5">
                      {s.points.map((pt) => (
                        <li key={pt} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {pt}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {s.stack.map((t) => (
                        <span key={t} className="chip gap-1.5"><TechIcon name={t} className="h-3.5 w-3.5" />{t}</span>
                      ))}
                    </div>
                    <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/[0.06] pt-5 text-sm">
                      <span className="font-mono text-xs text-muted-foreground">see it in:</span>
                      {s.proof.map((slug) => (
                        <Link key={slug} href={`/projects/${slug}`} className="inline-flex items-center gap-1 text-primary hover:underline">
                          {bySlug[slug]?.title} <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section !pt-0" aria-labelledby="proc-title">
          <div className="container-x">
            <h2 id="proc-title" className="section-head text-3xl font-bold sm:text-4xl" data-reveal>How we&apos;ll work together</h2>
            <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((st, i) => (
                <li key={st.n} className="card p-6" data-reveal style={{ ["--d" as string]: i }}>
                  <span className="outline-num font-[family-name:var(--font-heading)] text-4xl font-extrabold">{st.n}</span>
                  <h3 className="mt-3 text-lg font-semibold">{st.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{st.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Proof strip */}
        <section className="section !pt-0">
          <div className="container-x">
            <div className="grid gap-5 sm:grid-cols-3" data-reveal>
              {[
                { v: "2+ years", l: "shipping production code" },
                { v: `${projects.length} case studies`, l: "with live products" },
                { v: `${certifications.length} certifications`, l: "in AI, LLMs & development" },
              ].map((x) => (
                <div key={x.v} className="card p-6 text-center">
                  <p className="font-[family-name:var(--font-heading)] text-3xl font-bold text-primary">{x.v}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{x.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section !pt-0" aria-labelledby="faq-title">
          <div className="container-x max-w-4xl">
            <h2 id="faq-title" className="section-head text-3xl font-bold sm:text-4xl" data-reveal>Frequently asked questions</h2>
            <div className="space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="term group" data-reveal>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-medium sm:p-6 [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/10 text-primary transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="px-5 pb-5 leading-relaxed text-muted-foreground sm:px-6 sm:pb-6">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container-x">
          <div className="term" data-reveal>
            <div className="flex flex-col items-start justify-between gap-6 p-6 sm:flex-row sm:items-center sm:p-10">
              <div>
                <p className="font-mono text-sm text-primary">$ ./start-project.sh</p>
                <p className="mt-2 text-2xl font-bold sm:text-3xl">Have a project in mind? Let&apos;s talk.</p>
              </div>
              <Link href="/#contact" className="btn-primary shrink-0">Get in touch <ArrowRight className="h-4 w-4" /></Link>
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
