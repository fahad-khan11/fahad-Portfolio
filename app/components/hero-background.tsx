"use client"

import { motion } from "framer-motion"
import { ParticlesBackground } from "./animations/particles-background"
import { LottieAnimation } from "./lottie-animation"

export function HeroBackground() {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <ParticlesBackground />

      <motion.div
        className="absolute -left-40 top-0 h-[32rem] w-[32rem] rounded-full bg-cyan-500/25 blur-[120px]"
        animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-32 top-1/4 h-[36rem] w-[36rem] rounded-full bg-violet-600/20 blur-[130px]"
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-sky-500/15 blur-[100px]"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 30%, black, transparent)",
        }}
        animate={{ backgroundPosition: ["0px 0px", "64px 64px"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      <LottieAnimation
        src="/lottie/hero-dev.json"
        className="absolute -right-4 top-1/4 hidden h-64 w-64 opacity-50 lg:block xl:h-80 xl:w-80 xl:opacity-60"
      />
      <motion.div
        className="absolute left-1/2 top-1/3 h-2 w-2 rounded-full bg-cyan-400/80 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
        animate={{ y: [0, -24, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-1/3 top-1/2 h-1.5 w-1.5 rounded-full bg-violet-400/80 shadow-[0_0_10px_rgba(167,139,250,0.8)]"
        animate={{ y: [0, 20, 0], x: [0, 8, 0], opacity: [0.3, 0.9, 0.3] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      <motion.div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </motion.div>
  )
}
