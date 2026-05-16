"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp, ExternalLink, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Project } from "@/lib/projects"

type ProjectCardProps = {
  project: Project
  index: number
  displayIndex: number
}

export function ProjectCard({ project, index, displayIndex }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false)
  const hasLiveLink = project.link && project.link !== "#"

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative h-full"
    >
      <span className="absolute -left-1 top-4 z-10 font-mono text-4xl font-bold text-cyan-500/15 sm:-left-2 sm:text-5xl">
        {String(displayIndex).padStart(2, "0")}
      </span>
      <Card
        className={`relative flex h-full flex-col overflow-hidden border-white/10 bg-card/60 shadow-xl backdrop-blur-xl transition-shadow duration-300 hover:shadow-cyan-500/10 ${
          project.featured ? "ring-1 ring-cyan-500/40" : ""
        }`}
      >
        {project.featured && (
          <Badge className="absolute right-4 top-4 z-10 border-0 bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-lg">
            <Star className="mr-1 h-3 w-3" />
            Featured
          </Badge>
        )}
        <motion.div
          className="relative aspect-video overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            loading={index < 3 ? "eager" : "lazy"}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"
            initial={{ opacity: 0.6 }}
            whileHover={{ opacity: 0.85 }}
          />
          {hasLiveLink && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30">
                Live site
                <ExternalLink className="h-4 w-4" />
              </span>
            </a>
          )}
        </motion.div>
        <CardHeader className="pb-3">
          {project.location && (
            <p className="text-xs font-medium uppercase tracking-wider text-cyan-500/80">{project.location}</p>
          )}
          <CardTitle className="text-lg leading-snug text-foreground lg:text-xl">{project.title}</CardTitle>
          <motion.div layout className="relative">
            <div className={`overflow-hidden transition-all duration-300 ${expanded ? "max-h-40" : "max-h-14"}`}>
              <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </CardDescription>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setExpanded((v) => !v)}
              className="mt-1 h-7 px-0 text-xs text-cyan-500 hover:bg-transparent hover:text-cyan-400"
            >
              {expanded ? (
                <>
                  Show less <ChevronUp className="ml-1 h-3 w-3" />
                </>
              ) : (
                <>
                  Read more <ChevronDown className="ml-1 h-3 w-3" />
                </>
              )}
            </Button>
          </motion.div>
        </CardHeader>
        <CardContent className="mt-auto pt-0">
          <motion.div className="flex flex-wrap gap-2" layout>
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="border-cyan-500/20 bg-cyan-500/5 text-xs text-foreground/80 transition-colors hover:border-cyan-500/40 hover:bg-cyan-500/10"
              >
                {tech}
              </Badge>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.article>
  )
}
