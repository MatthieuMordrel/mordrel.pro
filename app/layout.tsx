import Footer from '@components/Layout Components/Footer'
import { DataProvider } from '@lib/dataContext'
import { cn } from '@lib/utils'
import '@styles/animation.css'
import '@styles/globals.css'
import '@styles/scrollbar.css'
import '@styles/variables.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import Navbar from './components/Layout Components/NavBar'

export const metadata: Metadata = {
  title: {
    default: 'Automation Services',
    template: '%s | Automation Services'
  },
  description: 'Automation, data visualisation and custom services provided for your business.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" translate="no">
      <body className={cn('min-h-screen min-w-[100vw] overflow-x-hidden bg-techGrey font-geist text-primaryText', GeistSans.variable)}>
        <DataProvider>
          <Navbar />
          {children}
          <Footer />
        </DataProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
