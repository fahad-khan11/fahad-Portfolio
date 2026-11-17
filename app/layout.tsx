import type { Metadata, Viewport } from "next"
import { Sora, DM_Sans, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { SITE_URL, profile, experience, skills, education, projects } from "@/lib/data"

const fontHeading = Sora({ subsets: ["latin"], variable: "--font-heading", display: "swap", weight: ["500", "600", "700", "800"] })
const fontBody = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" })
const fontMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap", weight: ["400", "500"] })

const title = "Fahad Farman — Full Stack & AI Engineer | Next.js, NestJS, RAG & LLMs"
const description =
  "Fahad Farman is a Full Stack Engineer and AI Application Engineer in Islamabad, Pakistan with 2+ years shipping production SaaS. Next.js, NestJS, TypeScript and PostgreSQL, plus RAG pipelines, LLM integrations and agentic AI with LangChain, LangGraph and OpenAI."

export const viewport: Viewport = {
  themeColor: "#0a0a0c",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: "%s | Fahad Farman" },
  description,
  applicationName: "Fahad Farman Portfolio",
  keywords: [
    "Fahad Farman",
    "Fahad Farman portfolio",
    "Full Stack Engineer",
    "Full Stack Engineer Pakistan",
    "Full Stack Engineer Islamabad",
    "AI Engineer",
    "AI Application Engineer",
    "Generative AI Engineer",
    "LLM Engineer",
    "RAG",
    "Retrieval-Augmented Generation",
    "RAG Pipelines",
    "Agentic AI",
    "AI Agents",
    "LangChain Developer",
    "LangGraph",
    "Model Context Protocol",
    "MCP",
    "Vector Databases",
    "Semantic Search",
    "LLM Fine-Tuning",
    "OpenAI API",
    "Prompt Engineering",
    "Next.js Engineer",
    "NestJS Engineer",
    "TypeScript Engineer",
    "SaaS Engineer",
    "WebRTC Engineer",
    "Remote Full Stack Engineer",
    "Hire AI Engineer",
  ],
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  publisher: profile.name,
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Fahad Farman",
    title,
    description,
    firstName: "Fahad",
    lastName: "Farman",
  },
  twitter: { card: "summary_large_image", title, description },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  verification: { google: "BxG9kk482ZkckC22J6DbalOJldeonNAVa8ITGXmJ8vg" },
  formatDetection: { telephone: false },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: profile.name,
      givenName: "Fahad",
      familyName: "Farman",
      url: SITE_URL,
      image: `${SITE_URL}${profile.photo}`,
      jobTitle: ["Full Stack Engineer", "AI Application Engineer"],
      description: profile.summary,
      email: `mailto:${profile.email}`,
      address: { "@type": "PostalAddress", addressLocality: "Islamabad", addressRegion: "Islamabad Capital Territory", addressCountry: "PK" },
      worksFor: { "@type": "Organization", name: experience[0].company, url: "https://firnas.tech/" },
      alumniOf: { "@type": "CollegeOrUniversity", name: education.school, url: "https://www.comsats.edu.pk" },
      sameAs: [profile.linkedin, profile.github],
      knowsAbout: [...new Set([...skills.flatMap((s) => s.items), "Retrieval-Augmented Generation", "Large Language Models", "Generative AI", "Agentic AI", "AI Engineering"])],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Fahad Farman",
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profile`,
      url: SITE_URL,
      name: title,
      mainEntity: { "@id": `${SITE_URL}/#person` },
      isPartOf: { "@id": `${SITE_URL}/#website` },
    },
    {
      "@type": "ItemList",
      name: "Projects by Fahad Farman",
      itemListElement: projects.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "CreativeWork",
          name: `${p.title} — ${p.tagline}`,
          description: p.description,
          ...(p.link ? { url: p.link } : {}),
          creator: { "@id": `${SITE_URL}/#person` },
        },
      })),
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fontHeading.variable} ${fontBody.variable} ${fontMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Enables scroll-reveal styles only when JS runs, so content is never hidden for crawlers/no-JS */}
        {/* Splash plays on every full page load (incl. refresh); once it finishes we mark it done
            so client-side navigation back to the home page doesn't replay it */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(d){d.classList.add('js');setTimeout(function(){d.classList.add('no-splash')},2600)})(document.documentElement)",
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="font-[family-name:var(--font-body)] antialiased">{children}</body>
    </html>
  )
}
