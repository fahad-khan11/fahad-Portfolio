"use client"

import { useMemo, useState } from "react"
import { ArrowUpRight, BadgeCheck } from "lucide-react"
import { certifications, CERTS_URL, type Cert } from "@/lib/data"

const topics = ["All", "Agentic AI", "Generative AI", "Machine Learning", "Development"] as const
type Topic = (typeof topics)[number]

function IssuerBadge({ issuer }: { issuer: Cert["issuer"] }) {
  if (issuer === "IBM")
    return <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#1f70c1] font-mono text-[13px] font-bold tracking-tight text-white">IBM</span>
  if (issuer === "Google")
    return (
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white">
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
          <path fill="#4285F4" d="M22.6 12.27c0-.79-.07-1.54-.2-2.27H12v4.3h5.95a5.1 5.1 0 0 1-2.2 3.34v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.14Z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.25 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z" />
          <path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15A10.96 10.96 0 0 0 12 1 11 11 0 0 0 2.18 7.06L5.84 9.9C6.71 7.3 9.14 5.38 12 5.38Z" />
        </svg>
      </span>
    )
  if (issuer === "Vanderbilt University")
    return <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-black font-serif text-xl font-bold text-[#cfae70] ring-1 ring-white/10">V</span>
  return <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#1d3557] text-sm font-bold text-[#f4a261]">sl</span>
}

export function Certifications() {
  const [topic, setTopic] = useState<Topic>("All")
  const [expanded, setExpanded] = useState(false)

  const list = useMemo(() => (topic === "All" ? certifications : certifications.filter((c) => c.topic === topic)), [topic])
  const shown = expanded ? list : list.slice(0, 9)
  const count = (t: Topic) => (t === "All" ? certifications.length : certifications.filter((c) => c.topic === t).length)

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div role="tablist" aria-label="Filter certifications" className="no-scrollbar -mx-5 flex w-[calc(100%+2.5rem)] gap-2 overflow-x-auto px-5 sm:mx-0 sm:w-auto sm:flex-wrap sm:overflow-visible sm:px-0">
          {topics.map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={topic === t}
              onClick={() => { setTopic(t); setExpanded(false) }}
              className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-1.5 text-sm transition ${
                topic === t
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-white/10 bg-white/[0.03] text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {t} <span className="ml-1 font-mono text-xs opacity-70">{count(t)}</span>
            </button>
          ))}
        </div>
        <a href={CERTS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary">
          Verify all on LinkedIn <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((c) => (
          <li key={c.id} className="cert-card group">
            <div className="flex items-start gap-4">
              <IssuerBadge issuer={c.issuer} />
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold leading-snug">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {c.issuer} · {c.date}
                </p>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/[0.06] pt-4">
              <span className="truncate font-mono text-[11px] text-muted-foreground">
                <BadgeCheck className="mr-1 inline h-3.5 w-3.5 text-primary" />
                ID {c.id}
              </span>
              <a
                href={CERTS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-1 rounded-full border border-white/10 px-3 py-1 text-xs transition group-hover:border-primary/50 group-hover:text-primary"
                aria-label={`Show credential: ${c.title}`}
              >
                Show credential <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </li>
        ))}
      </ul>

      {list.length > 9 && (
        <div className="mt-8 text-center">
          <button type="button" onClick={() => setExpanded((e) => !e)} className="btn-ghost">
            {expanded ? "Show less" : `Show all ${list.length} certifications`}
          </button>
        </div>
      )}
    </div>
  )
}
