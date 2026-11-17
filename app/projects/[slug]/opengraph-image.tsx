import { ImageResponse } from "next/og"
import { projects } from "@/lib/data"

export const alt = "Project case study by Fahad Farman"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

/** Share image for each case study, shown when the link is posted on LinkedIn, X, WhatsApp, etc. */
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = projects.find((x) => x.slug === slug) ?? projects[0]
  const lime = "#c5f25a"
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "radial-gradient(circle at 85% 15%, rgba(197,242,90,0.22), transparent 45%), #0a0a0c",
          color: "#f5f5f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 24, color: lime, letterSpacing: 4, textTransform: "uppercase" }}>
          Case study · {p.category}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 96, fontWeight: 800, lineHeight: 1 }}>{p.title}</div>
          <div style={{ display: "flex", fontSize: 38, marginTop: 20, color: "#d4d4d8" }}>{p.tagline}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 36 }}>
            {p.stack.slice(0, 5).map((t) => (
              <div key={t} style={{ display: "flex", padding: "8px 20px", borderRadius: 999, border: `2px solid ${lime}`, color: lime, fontSize: 22 }}>
                {t}
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#a1a1aa" }}>Fahad Farman · Full Stack &amp; AI Engineer · fahadfarman.me</div>
      </div>
    ),
    size,
  )
}
