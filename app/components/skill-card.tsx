"use client"

import type { LucideIcon } from "lucide-react"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GradientCard } from "./animations/gradient-card"
import { FadeUp } from "./animations/fade-up"

type SkillCardProps = {
  title: string
  icon: LucideIcon
  skills: string[]
  glow?: "cyan" | "violet" | "mixed"
  delay?: number
  badgeClass?: string
}

export function SkillCard({
  title,
  icon: Icon,
  skills,
  glow = "mixed",
  delay = 0,
  badgeClass = "border-cyan-500/25 bg-cyan-500/10 text-foreground/90 hover:bg-cyan-500/20",
}: SkillCardProps) {
  return (
    <FadeUp delay={delay}>
      <GradientCard glow={glow} className="h-full">
        <CardHeader className="pb-6 text-center">
          <div className="mx-auto mb-4 w-fit rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 p-4 shadow-lg shadow-cyan-500/25 transition-transform duration-300 group-hover:scale-110">
            <Icon className="h-8 w-8 text-white lg:h-10 lg:w-10" />
          </div>
          <CardTitle className="text-xl text-foreground lg:text-2xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="outline" className={`text-xs transition-colors ${badgeClass}`}>
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </GradientCard>
    </FadeUp>
  )
}
