import Image from "next/image"
import { type Project } from "@/lib/data"

export const host = (url?: string) => (url ? url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "") : "")

/** Dashboard-style mock used when a project has no screenshot. */
export function MockDashboard({ p }: { p: Project }) {
  const bars = [38, 62, 45, 80, 56, 92, 70, 84]
  return (
    <div className="absolute inset-0 flex bg-[#0d0f0b]">
      <aside className="hidden w-[22%] flex-col gap-2 border-r border-white/[0.06] p-3 sm:flex">
        <div className="mb-2 flex items-center gap-2">
          <span className="h-5 w-5 rounded-md bg-primary" />
          <span className="h-2 w-12 rounded bg-white/20" />
        </div>
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} className={`h-2 rounded ${i === 1 ? "w-4/5 bg-primary/70" : "w-3/5 bg-white/10"}`} />
        ))}
      </aside>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-[family-name:var(--font-heading)] text-sm font-bold text-white sm:text-base">{p.title}</p>
            <p className="text-[10px] text-white/40 sm:text-xs">{p.tagline}</p>
          </div>
          <span className="h-6 w-6 rounded-full bg-primary/80" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {p.users.slice(0, 3).map((u) => (
            <div key={u} className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-2">
              <p className="text-[9px] text-white/40 sm:text-[10px]">Module</p>
              <p className="truncate font-[family-name:var(--font-heading)] text-[11px] font-bold text-white sm:text-sm">{u}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-1 items-end gap-1.5 rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
          {bars.map((b, i) => (
            <span key={i} className="flex-1 rounded-t bg-gradient-to-t from-primary/30 to-primary" style={{ height: `${b}%` }} />
          ))}
        </div>
      </div>
    </div>
  )
}

export function BrowserFrame({ p, sizes }: { p: Project; sizes: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111214] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)]">
      <div className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="mx-auto truncate rounded-md bg-white/[0.05] px-3 py-0.5 font-mono text-[11px] text-white/50">
          {host(p.link) || p.title.toLowerCase()}
        </span>
        <span className="w-10" />
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">
        {p.image ? (
          <Image src={p.image} alt={`${p.title} — ${p.tagline} screenshot`} fill sizes={sizes} className="zoom-img object-cover object-left-top" />
        ) : (
          <MockDashboard p={p} />
        )}
      </div>
    </div>
  )
}

