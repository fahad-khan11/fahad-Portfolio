"use client"

import { useEffect } from 'react'
import { AnimatePresence } from "framer-motion"

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <AnimatePresence mode="wait">
      {children}
    </AnimatePresence>
  )
}
