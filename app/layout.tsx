import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { basePath, baseUrl } from './site'
import { profile } from './data/profile'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: profile.name,
    template: `%s | ${profile.name}`,
  },
  description: profile.headline,
  openGraph: {
    title: profile.name,
    description: profile.headline,
    url: baseUrl,
    siteName: profile.name,
    locale: 'en_US',
    type: 'website',
    images: [{ url: `${baseUrl}${basePath}/og.svg` }],
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
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'min-h-screen',
        'bg-gradient-to-b from-cyan-50 via-sky-50/90 to-cyan-100/40 text-slate-900',
        'dark:from-slate-950 dark:via-slate-900 dark:to-cyan-950/30 dark:text-cyan-50',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
