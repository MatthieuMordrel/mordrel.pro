import { FirstSection } from '@components/Page Components/MainPageComponents/Main Sections/FirstSection'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'

const SecondSection = dynamic(
  () => import('@components/Page Components/MainPageComponents/Main Sections/SecondSection').then((mod) => mod.SecondSection),
  { ssr: true }
)

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
