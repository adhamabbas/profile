import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { images } from '@/config/images'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Adham Abbas | Backend Developer',
  description: 'Portfolio showcasing my work as a Full Stack Developer specializing in Node.js, React, and modern web technologies.',
  icons: {
    icon: [
      {
        url: '/profile/A.A.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/profile/A.A.png',
        sizes: '16x16',
        type: 'image/png',
      }
    ],
    apple: [
      {
        url: '/profile/A.A.png',
        sizes: '180x180',
        type: 'image/png',
      }
    ],
    shortcut: [
      {
        url: '/profile/A.A.png',
        sizes: '192x192',
        type: 'image/png',
      }
    ],
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Adham Abbas',
  },
  openGraph: {
    title: 'Adham Abbas | Backend Developer',
    description: 'Portfolio showcasing my work as a Full Stack Developer specializing in Node.js, React, and modern web technologies.',
    images: [
      {
        url: '/profile/A.A.png',
        width: 1200,
        height: 630,
        alt: 'Adham Abbas Portfolio',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adham Abbas | Backend Developer',
    description: 'Portfolio showcasing my work as a Full Stack Developer specializing in Node.js, React, and modern web technologies.',
    images: ['/profile/A.A.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 