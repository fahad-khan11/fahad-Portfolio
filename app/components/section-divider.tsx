"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type SectionDividerProps = {
  className?: string
}

/** Thin ornamental divider — replaces thick gradient bars */
export function SectionDivider({ className }: SectionDividerProps) {
  return (
    <motion.div
      className={cn("mx-auto flex w-full max-w-xs items-center justify-center gap-3 sm:max-w-sm", className)}
      initial={{ opacity: 0, scaleX: 0.6 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      aria-hidden
    >
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-cyan-500/20" />
      <span className="relative flex h-2 w-2 items-center justify-center">
        <span className="absolute h-2 w-2 rounded-full bg-cyan-400/40 blur-sm" />
        <span className="h-1.5 w-1.5 rotate-45 rounded-sm bg-gradient-to-br from-cyan-400 to-violet-500" />
      </span>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-violet-500/50 to-violet-500/20" />
    </motion.div>
  )
}
