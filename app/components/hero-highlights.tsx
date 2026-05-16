"use client"

import { motion } from "framer-motion"
import { LottieAnimation } from "./lottie-animation"

const highlights = [
  { emoji: "🚀", label: "20+ projects" },
  { emoji: "🤖", label: "AI integration" },
  { emoji: "⚡", label: "FastAPI & NestJS" },
  { emoji: "🛠️", label: "Full stack builds" },
  { emoji: "🔐", label: "Secure APIs" },
]

export function HeroHighlights() {
  return (
    <motion.div
      className="mx-auto mt-8 flex max-w-3xl flex-col items-center gap-6 px-4"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.85, duration: 0.5 }}
    >
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {highlights.map((item, i) => (
          <motion.span
            key={item.label}
            className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1.5 text-xs font-medium text-foreground/90 sm:text-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 + i * 0.06 }}
            whileHover={{ scale: 1.04, borderColor: "rgba(34,211,238,0.4)" }}
          >
            <span className="text-base sm:text-lg" aria-hidden>
              {item.emoji}
            </span>
            {item.label}
          </motion.span>
        ))}
      </div>

      <motion.div
        className="flex items-center justify-center gap-4 sm:gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        <LottieAnimation src="/lottie/code.json" className="h-14 w-14 opacity-70 sm:h-16 sm:w-16" />
        <LottieAnimation src="/lottie/ai-bot.json" className="h-16 w-16 opacity-80 sm:h-20 sm:w-20" />
        <LottieAnimation src="/lottie/rocket.json" className="h-14 w-14 opacity-70 sm:h-16 sm:w-16" />
      </motion.div>
    </motion.div>
  )
}
