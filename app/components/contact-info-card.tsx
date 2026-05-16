"use client"

import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GradientCard } from "./animations/gradient-card"
import { FadeUp } from "./animations/fade-up"
import { theme } from "@/lib/theme"

type ContactInfoCardProps = {
  title: string
  icon: React.ReactNode
  children: React.ReactNode
  href?: string
  glow?: "cyan" | "violet" | "mixed"
  delay?: number
  className?: string
}

export function ContactInfoCard({
  title,
  icon,
  children,
  href,
  glow = "cyan",
  delay = 0,
  className = "",
}: ContactInfoCardProps) {
  const inner = (
    <GradientCard glow={glow} className={`aspect-square h-full w-full ${className}`}>
      <CardHeader className="pb-4 text-center">
        <div className={`${theme.iconBox} mx-auto mb-4 w-fit [&_svg]:h-8 [&_svg]:w-8`}>{icon}</div>
        <CardTitle className="text-xl text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center text-muted-foreground">{children}</CardContent>
    </GradientCard>
  )

  return (
    <FadeUp delay={delay} className="h-full w-full">
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full w-full">
          {inner}
        </a>
      ) : (
        inner
      )}
    </FadeUp>
  )
}
