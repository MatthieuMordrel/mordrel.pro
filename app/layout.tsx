import type { Metadata } from 'next'
import { Inter, Roboto_Flex } from 'next/font/google'
import './globals.css'
import Navbar from './components/NavBar'
import Footer from './components/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const main_font = Roboto_Flex({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: {
    template: '%s | Automation Services - Matthieu Mordrel', //the % is replaced with the specific page title
    default: 'Automation Services'
  },
  description: 'Consulting services provided by Matthieu Mordrel'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
