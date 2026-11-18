import { MessageSquare, Binary, Database, Sparkles, CheckCircle2 } from "lucide-react"

const steps = [
  { icon: MessageSquare, label: "User question", detail: "“How do I reschedule my booking?”" },
  { icon: Binary, label: "Embed", detail: "query → vector" },
  { icon: Database, label: "Vector search", detail: "top-k relevant chunks" },
  { icon: Sparkles, label: "LLM + context", detail: "grounded generation" },
  { icon: CheckCircle2, label: "Answer", detail: "with sources cited" },
]

/**
 * Illustrative, pure-CSS animation of a Retrieval-Augmented Generation (RAG) pipeline.
 * Horizontal flow on desktop, vertical on mobile; each stage lights up in turn.
 */
export function RagPipeline() {
  return (
    <div className="rag term relative overflow-hidden" aria-label="Illustration: how a RAG pipeline answers a question">
      <div className="term-bar">
        <span className="term-dots"><i /><i /><i /></span>
        <span className="term-tab">rag-pipeline.ts</span>
        <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[11px] text-primary">
          <span className="pulse-dot relative h-1.5 w-1.5 rounded-full bg-primary" /> running
        </span>
      </div>

      <div className="relative px-5 py-7 sm:px-8 lg:py-10">
        {/* connector: horizontal on lg, vertical below */}
        <span aria-hidden className="absolute left-[10%] right-[10%] top-[3.875rem] hidden h-px bg-white/10 lg:block" />
        <span aria-hidden className="rag-pulse-x absolute top-[3.875rem] hidden h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent lg:block" />
        <span aria-hidden className="absolute bottom-10 left-[2.5rem] top-10 w-px bg-white/10 sm:left-[3.25rem] lg:hidden" />
        <span aria-hidden className="rag-pulse-y absolute left-[2.5rem] h-12 w-px bg-gradient-to-b from-transparent via-primary to-transparent sm:left-[3.25rem] lg:hidden" />

        <ol className="relative grid gap-4 lg:grid-cols-5">
          {steps.map((s, i) => (
            <li key={s.label} className="rag-step flex items-center gap-4 lg:flex-col lg:text-center" style={{ ["--s" as string]: i }}>
              <span className="rag-node relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-background text-muted-foreground lg:h-11 lg:w-11">
                <s.icon className="h-[18px] w-[18px]" />
              </span>
              <div className="min-w-0 flex-1 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 lg:w-full lg:flex-none">
                <p className="text-sm font-semibold">
                  <span className="mr-1.5 font-mono text-[10px] text-muted-foreground">0{i + 1}</span>
                  {s.label}
                </p>
                <p className="mt-1 font-mono text-[11px] leading-snug text-muted-foreground">{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-7 flex items-center justify-center gap-2 font-mono text-[11px] text-muted-foreground">
          <span className="text-primary">$</span> LangChain · LangGraph · OpenAI · vector DB
          <span className="caret !h-3 !w-1.5" />
        </p>
      </div>
    </div>
  )
}
