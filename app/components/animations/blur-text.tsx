"use client"

import { motion } from "framer-motion"

type BlurTextProps = {
  text: string
  className?: string
  delay?: number
  as?: "h1" | "h2" | "p" | "span"
}

export function BlurText({ text, className = "", delay = 0, as: Tag = "span" }: BlurTextProps) {
  const words = text.split(" ")
  const isGradientText = /bg-clip-text|text-transparent/.test(className)

  return (
    <Tag className={isGradientText ? undefined : className}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className={`inline-block ${isGradientText ? className : ""}`}
          initial={{ filter: "blur(12px)", opacity: 0, y: 12 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{
            duration: 0.45,
            delay: delay + i * 0.08,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </Tag>
  )
}
