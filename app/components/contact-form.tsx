"use client"

import { useState, useRef } from "react"
import emailjs from '@emailjs/browser'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { MessageSquare, Send, User, Mail } from "lucide-react"

const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      emailjs.init(EMAILJS_PUBLIC_KEY)
      const formData = new FormData(e.currentTarget)
      
      if (!formData.get('name') || !formData.get('email') || !formData.get('message')) {
        throw new Error("Please fill in all required fields")
      }

      // FIX: Use the correct parameter names that match your EmailJS template
      const templateParams = {
        from_name: formData.get('name'),     
        user_name: formData.get('name'),   
        user_email: formData.get('email'),    
        message: formData.get('message'),
        reply_to: formData.get('email'), 
       from_email: formData.get('email')     
      }

      console.log('Sending params:', templateParams) // Debug log

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      )

      if (response.status === 200) {
        setStatus({ success: true, message: "Message sent successfully!" })
        formRef.current?.reset()
      }
    } catch (error: any) {
      console.error('Email error:', error)
      setStatus({
        success: false,
        message: error.message || "Failed to send message. Please try again."
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="border-cyan-500/20 bg-card/70 shadow-xl shadow-cyan-500/10 backdrop-blur-xl">
      <CardHeader className="pb-6">
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            className="rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 p-3 shadow-lg shadow-cyan-500/25"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <MessageSquare className="h-6 w-6 text-white" />
          </motion.div>
          <CardTitle className="text-2xl text-foreground">Send Message</CardTitle>
        </div>
        <CardDescription className="text-muted-foreground">
          Fill out the form below and I'll get back to you as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground/80">
                Name
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  className="border-cyan-500/20 bg-background/50 pl-10 backdrop-blur-sm transition-all focus:border-cyan-500/50"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground/80">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  className="border-cyan-500/20 bg-background/50 pl-10 backdrop-blur-sm transition-all focus:border-cyan-500/50"
                />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground/80">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell me about your project or just say hello!"
              rows={5}
              required
              className="resize-none border-cyan-500/20 bg-background/50 backdrop-blur-sm transition-all focus:border-cyan-500/50"
            />
          </div>
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-cyan-500 py-4 text-lg font-bold text-slate-950 shadow-lg shadow-cyan-500/30 transition-all hover:bg-cyan-400 hover:scale-[1.02] active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:transform-none"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white dark:border-black mr-2"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
        {status && (
          <div
            className={`mt-4 p-4 rounded-lg ${
              status.success
                ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800"
                : "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800"
            }`}
          >
            {status.message}
          </div>
        )}
      </CardContent>
    </Card>
  )
}