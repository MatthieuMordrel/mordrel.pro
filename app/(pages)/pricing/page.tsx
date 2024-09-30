import FAQ from '@components/Page Components/Pricing Components/FAQ'
import Timeline from '@components/Page Components/Pricing Components/Timeline'
import FadeInEffect from '@ui/Effects/AdvancedFadeIn'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Process',
  description: 'Our services follow a standard process, which can be broken down in simple steps.'
}

const Pricing = () => {
  return (
    <main className="flex min-h-screen flex-col space-y-12  px-8">
      <FadeInEffect>
        <Timeline />
      </FadeInEffect>
      <FadeInEffect className="mx-auto sm:w-[clamp(15rem,7.105rem+42.105vw,45rem)]">
        <FAQ />
      </FadeInEffect>
    </main>
  )
}

export default Pricing
