import Image from "next/image"
import { Github, Linkedin, Mail, MessageCircle, FileText } from "lucide-react"
import { profile } from "@/lib/data"
import { ContactForm } from "./contact-form"

const lines = [
  { icon: Mail, cmd: "mail", value: profile.email, href: `mailto:${profile.email}` },
  { icon: MessageCircle, cmd: "chat", value: "wa.me/923406218617", href: profile.whatsapp },
  { icon: Linkedin, cmd: "open", value: "linkedin.com/in/fahadfarman", href: profile.linkedin },
  { icon: Github, cmd: "open", value: "github.com/fahad-khan11", href: profile.github },
  { icon: FileText, cmd: "curl -O", value: "fahad-farman-cv.pdf", href: profile.cv, download: true },
]

export function ContactSection() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-64 w-[60%] -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]" />
      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center" data-reveal>
          <div className="relative mx-auto h-24 w-24">
            <span aria-hidden className="avatar-ring absolute -inset-1.5 rounded-full" />
            <Image src={profile.photo} alt="Fahad Farman" fill sizes="96px" className="rounded-full border-4 border-background object-cover" />
            <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-background bg-primary" />
          </div>
          <h2 id="contact-title" className="mt-6 text-3xl font-bold sm:text-4xl md:text-5xl">
            Let&apos;s build something <span className="text-gradient">great</span>
          </h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            Got a SaaS idea, an AI feature or a role in mind? I&apos;m always up for interesting projects and conversations.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-2 lg:gap-6">
          {/* Terminal */}
          <div className="term flex flex-col lg:min-h-[36rem]" data-reveal>
            <div className="term-bar">
              <span className="term-dots"><i /><i /><i /></span>
              <span className="term-tab">contact.sh</span>
            </div>
            <div className="flex flex-1 flex-col justify-between gap-1 p-5 font-mono sm:gap-3 lg:gap-4 text-[13px] sm:p-9 sm:text-[15px]">
              <p className="text-muted-foreground"># reach me on any channel</p>
              {lines.map(({ icon: Icon, cmd, value, href, download }, i) => (
                <a
                  key={value}
                  href={href}
                  {...(download ? { download: true } : href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="term-line group -mx-3 flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-white/[0.04]"
                  style={{ ["--l" as string]: i }}
                >
                  <Icon className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary" />
                  <span className="text-primary">$</span>
                  <span className="text-muted-foreground">{cmd}</span>
                  <span className="truncate text-foreground group-hover:text-primary group-hover:underline">{value}</span>
                </a>
              ))}
              <p className="term-line flex items-center gap-2 pt-1" style={{ ["--l" as string]: lines.length }}>
                <span className="text-primary">$</span>
                <span className="caret" />
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="term flex flex-col lg:min-h-[36rem]" data-reveal style={{ ["--d" as string]: 1 }}>
            <div className="term-bar">
              <span className="term-dots"><i /><i /><i /></span>
              <span className="term-tab">message.tsx</span>
              <span className="ml-auto hidden text-xs text-primary sm:inline">● replies in &lt; 24h</span>
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-9">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
