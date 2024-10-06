import { ThemeProvider } from '@/lib/ThemeProvider'
import { DataProvider } from '@lib/dataContext'
import { cn } from '@lib/utils'
import '@styles/animation.css'
import '@styles/globals.css'
import '@styles/scrollbar.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import Footer from './components/Layout Components/Footer'
import Navbar from './components/Layout Components/NavBar'

export const metadata: Metadata = {
  title: {
    default: 'Automation Services',
    template: '%s | Automation Services'
  },
  description: 'Automation, data visualisation and custom services provided for your business.',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#5bbad5' },
      { rel: 'icon', url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ]
  },
  manifest: '/site.webmanifest'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" translate="no" className="dark">
      <body className={cn('min-h-screen min-w-[100vw] overflow-x-hidden bg-background font-geist text-foreground', GeistSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
          <DataProvider>
            <Navbar />
            {children}
            <Footer />
          </DataProvider>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
