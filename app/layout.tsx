import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import { Bitter, Inter, Roboto_Flex } from 'next/font/google'
import Footer from './components/Layout Components/Footer'
import Navbar from './components/Layout Components/NavBar'
import { DataProvider } from './lib/dataContext'
import { cn } from './lib/utils'
import './styles/animation.css'
import './styles/globals.css'
import './styles/scrollbar.css'
import './styles/variables.css'

// Font Import: When you import a font using next/font/google, it generates a CSS class with the necessary font-face declarations.
// ClassName Property: The returned object includes a className property, which is a string representing the generated CSS class.

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const roboto = Roboto_Flex({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto'
})

const bitter = Bitter({
  weight: '400',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-bitter'
})

// export const fetchCache = 'default-cache'

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
      <body className={cn('font-geist min-h-screen bg-techGrey text-primaryText', inter.variable, GeistSans.variable)}>
        <DataProvider>
          <Navbar />
          {children}
          <Footer />
        </DataProvider>
      </body>
    </html>
  )
}
