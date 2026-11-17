import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const alt = "Fahad Farman — Full Stack & AI Engineer building SaaS, RAG pipelines and LLM apps"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OgImage() {
  const photo = await readFile(join(process.cwd(), "public/fahad-farman-portrait.jpg"))
  const src = `data:image/jpeg;base64,${photo.toString("base64")}`
  const lime = "#c5f25a"

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "70px 80px",
          background: "radial-gradient(circle at 15% 10%, rgba(197,242,90,0.25), transparent 45%), #0a0a0c",
          color: "#f5f5f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 680 }}>
          <div style={{ display: "flex", fontSize: 24, color: lime, letterSpacing: 4, textTransform: "uppercase" }}>
            Full Stack &amp; AI Engineer
          </div>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 800, marginTop: 18, lineHeight: 1 }}>Fahad Farman</div>
          <div style={{ display: "flex", fontSize: 34, marginTop: 28, color: "#d4d4d8", lineHeight: 1.3 }}>
            Building AI-powered apps & SaaS products that deliver results.
          </div>
          <div style={{ display: "flex", gap: 14, marginTop: 40 }}>
            {["Next.js", "NestJS", "RAG", "LLMs"].map((t) => (
              <div
                key={t}
                style={{ display: "flex", padding: "10px 22px", borderRadius: 999, border: `2px solid ${lime}`, color: lime, fontSize: 22 }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", width: 360, height: 360, borderRadius: 999, border: `8px solid ${lime}`, overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} width={360} height={360} style={{ objectFit: "cover" }} alt="" />
        </div>
      </div>
    ),
    size,
  )
}
