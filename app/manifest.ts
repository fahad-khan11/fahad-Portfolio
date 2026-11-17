import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Fahad Farman — Full Stack & AI Engineer",
    short_name: "Fahad Farman",
    description: "Portfolio of Fahad Farman, Full Stack & AI Engineer building SaaS, RAG pipelines and LLM-powered apps.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0c",
    theme_color: "#0a0a0c",
    icons: [
      { src: "/icon.png", sizes: "192x192", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  }
}
