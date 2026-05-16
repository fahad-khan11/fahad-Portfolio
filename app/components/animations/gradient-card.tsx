"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type GradientCardProps = {
  children: React.ReactNode
  className?: string
  glow?: "cyan" | "violet" | "mixed"
}

const glowMap = {
  cyan: "from-cyan-500/50 via-cyan-400/30 to-transparent",
  violet: "from-violet-500/50 via-violet-400/30 to-transparent",
  mixed: "from-cyan-500/40 via-violet-500/40 to-cyan-500/40",
}

export function GradientCard({ children, className, glow = "mixed" }: GradientCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={cn("group relative rounded-2xl p-[1px]", className)}
    >
      <motion.div
        className={cn(
          "absolute -inset-px rounded-2xl bg-gradient-to-r opacity-60 blur-sm transition-opacity duration-500 group-hover:opacity-100",
          glowMap[glow]
        )}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        style={{ backgroundSize: "200% 200%" }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-cyan-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ backgroundSize: "200% 100%" }}
        animate={{ backgroundPosition: ["0% 0%", "100% 0%"] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
      <motion.div className="relative rounded-2xl border border-cyan-500/20 bg-card/80 shadow-xl shadow-cyan-500/5 backdrop-blur-xl">
        {children}
      </motion.div>
    </motion.div>
  )
}
