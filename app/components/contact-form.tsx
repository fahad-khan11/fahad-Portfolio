"use client"

import { useRef, useState } from "react"
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import { profile } from "@/lib/data"

/*
 * EmailJS IDs are public by design (they ship in the browser bundle). The env vars win when set,
 * otherwise we fall back to the same account the live site already uses, so the form works
 * locally and on any host without extra setup.
 */
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "AcZ1Eqz-m8J1Pxg9A"
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_3ym1egb"
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_6eivc5e"

type Errors = Partial<Record<"name" | "email" | "message", string>>
type Status = { ok: boolean; msg: string } | null

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const field =
  "w-full rounded-xl border bg-white/[0.03] px-4 py-3.5 text-[15px] text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:bg-white/[0.05]"
const fieldState = (bad?: string) => (bad ? "border-red-500/60 focus:border-red-500" : "border-white/10 focus:border-primary/60")

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<Status>(null)
  const [errors, setErrors] = useState<Errors>({})

  function validate(name: string, email: string, message: string): Errors {
    const e: Errors = {}
    if (name.length < 2) e.name = "Please enter your name."
    if (!EMAIL_RE.test(email)) e.email = "Please enter a valid email address."
    if (message.length < 10) e.message = "Message should be at least 10 characters."
    return e
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get("name") || "").trim()
    const email = String(data.get("email") || "").trim()
    const message = String(data.get("message") || "").trim()
    // Honeypot: bots fill hidden fields, people don't
    if (String(data.get("company") || "")) return

    const found = validate(name, email, message)
    setErrors(found)
    if (Object.keys(found).length) {
      setStatus(null)
      return
    }

    setLoading(true)
    setStatus(null)
    try {
      // Loaded only on submit, so it never weighs on page load
      const emailjs = (await import("@emailjs/browser")).default
      const res = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { from_name: name, user_name: name, user_email: email, from_email: email, reply_to: email, message },
        { publicKey: PUBLIC_KEY },
      )
      if (res.status !== 200) throw new Error(res.text)
      setStatus({ ok: true, msg: `Thanks ${name.split(" ")[0]}! Your message was sent. I'll reply within 24 hours.` })
      formRef.current?.reset()
    } catch (err) {
      const text = (err as { text?: string })?.text || (err as Error)?.message || ""
      console.error("EmailJS error:", err)
      setStatus({
        ok: false,
        msg: `Couldn't send right now${text ? ` (${text})` : ""}. Please email me at ${profile.email} instead.`,
      })
    } finally {
      setLoading(false)
    }
  }

  const clear = (k: keyof Errors) => errors[k] && setErrors((e) => ({ ...e, [k]: undefined }))

  return (
    <form ref={formRef} onSubmit={onSubmit} className="flex flex-1 flex-col gap-5" noValidate>
      <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">Name</span>
          <input
            name="name"
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={!!errors.name}
            onInput={() => clear("name")}
            className={`${field} ${fieldState(errors.name)}`}
          />
          {errors.name && <span className="mt-1.5 block text-xs text-red-300">{errors.name}</span>}
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">Email</span>
          <input
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@company.com"
            aria-invalid={!!errors.email}
            onInput={() => clear("email")}
            className={`${field} ${fieldState(errors.email)}`}
          />
          {errors.email && <span className="mt-1.5 block text-xs text-red-300">{errors.email}</span>}
        </label>
      </div>
      <label className="flex flex-1 flex-col">
        <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">Message</span>
        <textarea
          name="message"
          rows={7}
          placeholder="Tell me about your project, role, or idea…"
          aria-invalid={!!errors.message}
          onInput={() => clear("message")}
          className={`${field} ${fieldState(errors.message)} min-h-[10rem] flex-1 resize-none`}
        />
        {errors.message && <span className="mt-1.5 block text-xs text-red-300">{errors.message}</span>}
      </label>
      <button type="submit" disabled={loading} className="btn-primary w-full !py-3.5 disabled:opacity-60">
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        {loading ? "Sending…" : "Send message"}
      </button>
      {status && (
        <p
          role="status"
          aria-live="polite"
          className={`flex items-start gap-2 rounded-xl border px-4 py-3 text-sm ${
            status.ok ? "border-primary/30 bg-primary/10 text-primary" : "border-red-500/30 bg-red-500/10 text-red-300"
          }`}
        >
          {status.ok ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" /> : <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />}
          {status.msg}
        </p>
      )}
    </form>
  )
}
