import { FirstSection } from '@components/Page Components/MainPageComponents/Main Sections/FirstSection'
import { SecondSection } from '@components/Page Components/MainPageComponents/Main Sections/SecondSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home | Automation Services'
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-y-16">
      <FirstSection />
      <SecondSection />
    </main>
  )
}
