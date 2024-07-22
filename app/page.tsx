import React from 'react'
import { FirstSection } from '@components/MainPageComponents/Main Sections/FirstSection'
import { SecondSection } from './components/MainPageComponents/Main Sections/SecondSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home | Automation Services'
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-y-16 bg-techGrey">
      <FirstSection />
      <SecondSection />
    </main>
  )
}
