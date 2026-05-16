"use client"

import { FadeUp } from "./animations/fade-up"
import { SectionDivider } from "./section-divider"

type SubSectionHeadingProps = {
  emoji: string
  title: string
}

export function SubSectionHeading({ emoji, title }: SubSectionHeadingProps) {
  return (
    <FadeUp className="mb-10 text-center lg:mb-12">
      <h3 className="flex items-center justify-center gap-2 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
        <span className="text-2xl sm:text-3xl" aria-hidden>
          {emoji}
        </span>
        {title}
      </h3>
      <SectionDivider className="mt-4" />
    </FadeUp>
  )
}
