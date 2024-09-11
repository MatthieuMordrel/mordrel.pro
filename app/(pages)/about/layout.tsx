import { cn } from '@/lib/utils'
import { Metadata } from 'next'
import { Bitter } from 'next/font/google'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about the story of the people behind the services which you can find on our website.'
}

// Font Import: When you import a font using next/font/google, it generates a CSS class with the necessary font-face declarations.
// ClassName Property: The returned object includes a className property, which is a string representing the generated CSS class.

const bitter = Bitter({
  weight: '400',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-bitter',
  preload: false
})

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <div className={cn('font-bitter', bitter.variable)}>{children}</div>
}
