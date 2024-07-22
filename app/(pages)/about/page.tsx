import React from 'react'

import { Metadata } from 'next'
import { FirstSection } from '@/app/components/Page Components/About Components/Main Sections/FirstSection'
import { SecondSection } from '@/app/components/Page Components/About Components/Main Sections/SecondSection'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about the story of the people behind the services which you can find on our website.'
}

export default function About() {
  return (
    <main className="min-h-screen justify-center px-[clamp(0.1rem,7vw,12rem)]">
      <FirstSection />
      <SecondSection />
    </main>
  )
}
