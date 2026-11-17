import {
  siNextdotjs, siReact, siTypescript, siJavascript, siNestjs, siNodedotjs, siExpress, siPostgresql,
  siMongodb, siTailwindcss, siMui, siShadcnui, siReactquery, siTypeorm, siStrapi, siFastapi, siFlask,
  siPython, siSocketdotio, siWebrtc, siStripe, siGooglemaps, siTwilio, siLangchain, siOpenai, siGit,
  siGithub, siPostman, siSwagger, siJira, siLinux, siJsonwebtokens, siCplusplus, siC, siSendgrid,
  siHtml5, siCss, siLanggraph, siDocker, siVercel, siRedux,
  type SimpleIcon,
} from "simple-icons"

export const techIcons: Record<string, SimpleIcon> = {
  "Next.js": siNextdotjs,
  React: siReact,
  "React.js": siReact,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  "JavaScript (ES6+)": siJavascript,
  NestJS: siNestjs,
  "Node.js": siNodedotjs,
  "Express.js": siExpress,
  PostgreSQL: siPostgresql,
  MongoDB: siMongodb,
  "Tailwind CSS": siTailwindcss,
  "Material UI": siMui,
  "shadcn/ui": siShadcnui,
  "React Query": siReactquery,
  TypeORM: siTypeorm,
  "Strapi CMS": siStrapi,
  Strapi: siStrapi,
  FastAPI: siFastapi,
  Flask: siFlask,
  Python: siPython,
  "Socket.IO": siSocketdotio,
  WebRTC: siWebrtc,
  Stripe: siStripe,
  "Google Maps API": siGooglemaps,
  Twilio: siTwilio,
  LangChain: siLangchain,
  LangGraph: siLanggraph,
  "OpenAI API": siOpenai,
  OpenAI: siOpenai,
  Git: siGit,
  GitHub: siGithub,
  Postman: siPostman,
  Swagger: siSwagger,
  Jira: siJira,
  Linux: siLinux,
  JWT: siJsonwebtokens,
  "C++": siCplusplus,
  C: siC,
  SendGrid: siSendgrid,
  HTML5: siHtml5,
  CSS3: siCss,
  Docker: siDocker,
  Vercel: siVercel,
  Redux: siRedux,
}

/** Brand colour, lifted to white when too dark to read on the dark theme. */
export function iconColor(hex: string) {
  const n = parseInt(hex, 16)
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return lum < 0.35 ? "#f5f5f5" : `#${hex}`
}
