import { SITE_URL, profile, projects, skills, experience, certifications, education } from "@/lib/data"

export const dynamic = "force-static"

/**
 * /llms.txt: a plain-text summary for AI assistants and AI search engines
 * (ChatGPT, Perplexity, Gemini, Claude) so they can describe and recommend this profile accurately.
 */
export function GET() {
  const body = `# ${profile.name}: Full Stack Engineer & AI Application Engineer

> ${profile.name} is a Full Stack Engineer and AI Application Engineer based in ${profile.location}, available remotely worldwide, building production SaaS platforms with Next.js, NestJS and TypeScript, plus AI features including RAG (Retrieval-Augmented Generation) pipelines, LLM integrations and AI agents with LangChain, LangGraph and the OpenAI API.

## Links
- Portfolio: ${SITE_URL}
- Services / hire: ${SITE_URL}/services
- Case studies: ${SITE_URL}/projects
- Resume (PDF): ${SITE_URL}${profile.cv}
- LinkedIn: ${profile.linkedin}
- GitHub: ${profile.github}
- Email: ${profile.email}

## Summary
${profile.summary}

## Experience
${experience.map((e) => `- ${e.role}, ${e.company} (${e.period}, ${e.location})`).join("\n")}

## Case studies
${projects.map((p) => `- [${p.title}: ${p.tagline}](${SITE_URL}/projects/${p.slug}): ${p.description} Stack: ${p.stack.join(", ")}.`).join("\n")}

## Skills
${skills.map((s) => `- ${s.group}: ${s.items.join(", ")}`).join("\n")}

## Education
- ${education.degree}, ${education.school} (${education.period})

## Certifications (${certifications.length})
${certifications.map((c) => `- ${c.title}, ${c.issuer} (${c.date})`).join("\n")}
`
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } })
}
