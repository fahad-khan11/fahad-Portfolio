"use client"

import { cn } from "@/lib/utils"

type ShinyTextProps = {
  text: string
  className?: string
  as?: "h1" | "h2" | "p" | "span"
}

export function ShinyText({ text, className = "", as: Tag = "span" }: ShinyTextProps) {
  return (
    <Tag
      className={cn(
        "animate-gradient-border bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-transparent",
        className
      )}
    >
      {text}
    </Tag>
  )
}
