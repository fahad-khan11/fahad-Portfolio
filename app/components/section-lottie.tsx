"use client"

import { LottieAnimation } from "./lottie-animation"
import { cn } from "@/lib/utils"

type SectionLottieProps = {
  src: string
  className?: string
}

/** Small decorative Lottie beside section content */
export function SectionLottie({ src, className }: SectionLottieProps) {
  return (
    <LottieAnimation
      src={src}
      className={cn("pointer-events-none mx-auto opacity-60", className)}
    />
  )
}
