"use client"

import { Briefcase } from "lucide-react"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GradientCard } from "./animations/gradient-card"
import { FadeUp } from "./animations/fade-up"
import { theme } from "@/lib/theme"

type ExperienceCardProps = {
  title: string
  company: string
  period: string
  description: string
  delay?: number
  variant?: "primary" | "secondary"
}

export function ExperienceCard({
  title,
  company,
  period,
  description,
  delay = 0,
  variant = "primary",
}: ExperienceCardProps) {
  return (
    <FadeUp delay={delay} className="mx-auto max-w-5xl">
      <GradientCard glow={variant === "primary" ? "cyan" : "violet"}>
        <CardHeader className="pb-6 lg:pb-8">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center lg:gap-6">
            <div className={variant === "primary" ? theme.iconBox : theme.iconBoxAlt}>
              <Briefcase className="h-8 w-8 text-white lg:h-10 lg:w-10" />
            </div>
            <div className="flex-1">
              <CardTitle className="mb-2 text-2xl text-foreground lg:text-3xl">{title}</CardTitle>
              <CardDescription className="text-lg text-muted-foreground lg:text-xl">
                {company}
                <span className="mt-1 block text-sm font-medium text-cyan-500/90">{period}</span>
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className={theme.contentBox}>
            <ul className="space-y-4 text-muted-foreground lg:space-y-5">
              <li className="flex items-start gap-4">
                <div className={theme.bullet} />
                <span className="text-sm leading-relaxed lg:text-base">{description}</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </GradientCard>
    </FadeUp>
  )
}
