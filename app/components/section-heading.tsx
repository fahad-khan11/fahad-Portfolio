"use client"

import { motion } from "framer-motion"
import { SectionDivider } from "./section-divider"

type SectionHeadingProps = {
  label: string
  title: string
  description?: string
  emoji?: string
}

export function SectionHeading({ label, title, description, emoji }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-14 text-center lg:mb-20"
    >
      <p className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-500 sm:text-sm">
        {emoji && (
          <span className="text-base normal-case tracking-normal sm:text-lg" aria-hidden>
            {emoji}
          </span>
        )}
        {label}
      </p>
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
        <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      <SectionDivider className="mt-5" />
      {description ? (
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </motion.div>
  )
}
