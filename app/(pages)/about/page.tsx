import { FirstSection } from '@components/Page Components/About Components/Main Sections/FirstSection'
import { SecondSection } from '@components/Page Components/About Components/Main Sections/SecondSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about the story of the people behind the services which you can find on our website.'
}

export default function About() {
  return (
    <main className="min-h-screen justify-center px-[clamp(0.1rem,7vw,12rem)] font-bitter">
      <FirstSection />
      <SecondSection />
    </main>
  )
}
