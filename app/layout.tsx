import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Fahad Farman',
  description: 'Portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
