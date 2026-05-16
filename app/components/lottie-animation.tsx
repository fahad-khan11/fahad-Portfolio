"use client"

import { useEffect, useState } from "react"
import Lottie from "lottie-react"
import { cn } from "@/lib/utils"

type LottieAnimationProps = {
  src: string
  className?: string
  loop?: boolean
}

export function LottieAnimation({ src, className, loop = true }: LottieAnimationProps) {
  const [data, setData] = useState<object | null>(null)

  useEffect(() => {
    fetch(src)
      .then((r) => r.json())
      .then(setData)
      .catch(() => setData(null))
  }, [src])

  if (!data) return null

  return (
    <Lottie
      animationData={data}
      loop={loop}
      className={cn("pointer-events-none", className)}
      aria-hidden
    />
  )
}
