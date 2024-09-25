import { SecondSection } from '@/app/components/Page Components/About Components/Main Sections/SecondSection'
import { FirstSection } from '@components/Page Components/About Components/Main Sections/FirstSection'


export default function About() {
  return (
    <main className="min-h-screen justify-center px-[clamp(0.1rem,7vw,12rem)]">
      <FirstSection />
      <SecondSection />
    </main>
  )
}
