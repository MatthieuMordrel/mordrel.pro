import { FirstSection } from '@components/Page Components/About Components/Main Sections/FirstSection'
import dynamic from 'next/dynamic'

const SecondSection = dynamic(
  () => import('@components/Page Components/About Components/Main Sections/SecondSection').then((mod) => mod.SecondSection),
  {
    ssr: false
  }
)

export default function About() {
  return (
    <main className="min-h-screen justify-center px-[clamp(0.1rem,7vw,12rem)]">
      <FirstSection />
      <SecondSection />
    </main>
  )
}
