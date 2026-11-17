import { techIcons, iconColor } from "@/lib/tech"

export function TechIcon({ name, className = "h-4 w-4", mono = false }: { name: string; className?: string; mono?: boolean }) {
  const icon = techIcons[name]
  if (!icon) return null
  return (
    <svg role="img" aria-label={icon.title} viewBox="0 0 24 24" className={className} fill={mono ? "currentColor" : iconColor(icon.hex)}>
      <path d={icon.path} />
    </svg>
  )
}
