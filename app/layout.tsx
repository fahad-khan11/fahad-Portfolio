import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Fahad Farman - Full Stack Developer | Software Engineer',
  description: 'Fahad Farman is a Full Stack Developer and Software Engineering student at COMSATS University. Specialized in Next.js, React, Node.js, NestJS, PostgreSQL, and MongoDB. Building modern web applications with cutting-edge technologies.',
  keywords: [
    'Fahad Farman',
    'fahad farman',
    'Fahad',
    'Full Stack Developer',
    'Software Engineer',
    'Web Developer',
    'Next.js Developer',
    'React Developer',
    'Node.js Developer',
    'NestJS Developer',
    'COMSATS University',
    'Portfolio',
    'Fahad Farman Portfolio',
    'JavaScript Developer',
    'TypeScript Developer',
    'Frontend Developer',
    'Backend Developer',
  ],
  authors: [{ name: 'Fahad Farman' }],
  creator: 'Fahad Farman',
  publisher: 'Fahad Farman',
  metadataBase: new URL('https://fahad-portfolio-psi-seven.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fahad-portfolio-psi-seven.vercel.app',
    title: 'Fahad Farman - Full Stack Developer | Software Engineer',
    description: 'Full Stack Developer specialized in Next.js, React, Node.js, NestJS, PostgreSQL, and MongoDB. Building modern web applications.',
    siteName: 'Fahad Farman Portfolio',
    images: [
      {
        url: '/images/fahad11.png',
        width: 1200,
        height: 630,
        alt: 'Fahad Farman - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fahad Farman - Full Stack Developer',
    description: 'Full Stack Developer specialized in Next.js, React, Node.js, and modern web technologies.',
    images: ['/images/fahad11.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'BxG9kk482ZkckC22J6DbalOJldeonNAVa8ITGXmJ8vg', // Google Search Console verification
  },
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
