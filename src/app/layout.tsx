import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { images } from '@/config/images'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Adham Abbas | Backend Developer',
  description: 'Portfolio showcasing my work as a Full Stack Developer specializing in Node.js, React, and modern web technologies.',
  icons: {
    icon: [
      {
        url: images.projects.aa,
        sizes: '32x32',
        type: 'image/jpg',
      },
      {
        url: images.projects.aa,
        sizes: '16x16',
        type: 'image/jpg',
      }
    ],
    apple: [
      {
        url: images.projects.aa,
        sizes: '180x180',
        type: 'image/jpg',
      }
    ],
    shortcut: [
      {
        url: images.projects.aa,
        sizes: '192x192',
        type: 'image/jpg',
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
        url: images.projects.aa,
        width: 800,
        height: 600,
        alt: 'Adham Abbas Logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adham Abbas | Backend Developer',
    description: 'Portfolio showcasing my work as a Full Stack Developer specializing in Node.js, React, and modern web technologies.',
    images: [images.projects.aa],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="https://drive.google.com/uc?export=view&id=1dObM7oAiu5eeX-Fs_QPMrb_0-37gZcHh" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Portfolio of Adham Abbas - Full Stack Developer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-portfolio-url.com" />
        <meta property="og:title" content="Adham Abbas | Full Stack Developer" />
        <meta property="og:description" content="Portfolio showcasing my work as a Full Stack Developer" />
        <meta property="og:image" content="https://drive.google.com/uc?export=view&id=1dObM7oAiu5eeX-Fs_QPMrb_0-37gZcHh" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Adham Abbas | Full Stack Developer" />
        <meta name="twitter:description" content="Portfolio showcasing my work as a Full Stack Developer" />
        <meta name="twitter:image" content="https://drive.google.com/uc?export=view&id=1dObM7oAiu5eeX-Fs_QPMrb_0-37gZcHh" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
} 