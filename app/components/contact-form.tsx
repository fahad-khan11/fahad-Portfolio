"use client"

import { useState, useRef } from "react"
import emailjs from '@emailjs/browser'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
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
    <Card className="bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-2xl shadow-black/10 dark:shadow-black/20">
      <CardHeader className="pb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-br from-gray-800 to-black dark:from-gray-200 dark:to-white rounded-xl shadow-lg">
            <MessageSquare className="h-6 w-6 text-white dark:text-black" />
          </div>
          <CardTitle className="text-2xl text-gray-800 dark:text-gray-200">Send Message</CardTitle>
        </div>
        <CardDescription className="text-gray-600 dark:text-gray-400">
          Fill out the form below and I'll get back to you as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">
                Name
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  className="pl-10 bg-white/50 dark:bg-white/5 border-white/40 dark:border-white/10 focus:border-indigo-500/50 backdrop-blur-sm transition-all duration-300 text-gray-900 dark:text-gray-200 placeholder:text-gray-500 dark:placeholder:text-gray-400"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
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
                  className="pl-10 bg-white/50 dark:bg-white/5 border-white/40 dark:border-white/10 focus:border-indigo-500/50 backdrop-blur-sm transition-all duration-300 text-gray-900 dark:text-gray-200 placeholder:text-gray-500 dark:placeholder:text-gray-400"
                />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell me about your project or just say hello!"
              rows={5}
              required
              className="bg-white/50 dark:bg-white/5 border-white/40 dark:border-white/10 focus:border-indigo-500/50 backdrop-blur-sm resize-none transition-all duration-300 text-gray-900 dark:text-gray-200 placeholder:text-gray-500 dark:placeholder:text-gray-400"
            />
          </div>
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white py-4 text-lg font-bold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
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