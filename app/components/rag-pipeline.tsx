import { MessageSquare, Binary, Database, Sparkles, CheckCircle2 } from "lucide-react"

const steps = [
  { icon: MessageSquare, label: "User question", detail: "“How do I reschedule my booking?”" },
  { icon: Binary, label: "Embed", detail: "query → vector (1536-d)" },
  { icon: Database, label: "Vector search", detail: "top-k relevant chunks", chunks: ["policy.md §4", "faq.json #12", "terms.pdf p.3"] },
  { icon: Sparkles, label: "LLM + context", detail: "grounded generation" },
  { icon: CheckCircle2, label: "Answer", detail: "with sources cited" },
]

/**
 * Illustrative, pure-CSS animation of a Retrieval-Augmented Generation (RAG) pipeline.
 * Each stage lights up in turn while a pulse travels down the connector.
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

      <div className="relative p-5 sm:p-7">
        {/* connector + travelling pulse */}
        <span aria-hidden className="absolute bottom-12 left-[2.5rem] top-12 w-px bg-white/10 sm:left-[3rem]" />
        <span aria-hidden className="rag-pulse absolute left-[2.5rem] top-12 h-10 w-px bg-gradient-to-b from-transparent via-primary to-transparent sm:left-[3rem]" />

        <ol className="relative space-y-3.5">
          {steps.map((s, i) => (
            <li key={s.label} className="rag-step flex items-start gap-4" style={{ ["--s" as string]: i }}>
              <span className="rag-node grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-background text-muted-foreground">
                <s.icon className="h-[18px] w-[18px]" />
              </span>
              <div className="min-w-0 flex-1 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-2.5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold">{s.label}</p>
                  <span className="font-mono text-[10px] text-muted-foreground">0{i + 1}</span>
                </div>
                <p className="mt-0.5 truncate font-mono text-xs text-muted-foreground">{s.detail}</p>
                {s.chunks && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {s.chunks.map((c) => (
                      <span key={c} className="rounded-md border border-primary/20 bg-primary/[0.06] px-2 py-0.5 font-mono text-[10px] text-primary/90">
                        {c}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-5 flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
          <span className="text-primary">$</span> LangChain · LangGraph · OpenAI · vector DB
          <span className="caret !h-3 !w-1.5" />
        </p>
      </div>
    </div>
  )
}
