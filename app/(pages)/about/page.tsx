import React from 'react'
import { FirstSection } from '@/app/components/AboutComponents/Main Sections/FirstSection'
import { SecondSection } from '@/app/components/AboutComponents/Main Sections/SecondSection'

export default function About() {
  return (
    <main className="min-h-screen justify-center bg-techGrey px-[clamp(0.1rem,7vw,12rem)]">
      <FirstSection />
      <SecondSection />
    </main>
  )
}
