import { FirstSection } from '@components/Page Components/About Components/Main Sections/FirstSection'
import { SecondSection } from '@components/Page Components/About Components/Main Sections/SecondSection'

export default function About() {
  return (
    <main className="min-h-screen justify-center px-[clamp(0.1rem,7vw,12rem)]">
      <FirstSection />
      <SecondSection />
    </main>
  )
}
