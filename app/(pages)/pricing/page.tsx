import FAQ from '@/app/components/Pricing Components/FAQ'
import Timeline from '@/app/components/Pricing Components/Timeline'
import FadeInEffect from '@/app/ui/Effects/AdvancedFadeIn'
import React from 'react'

const Pricing = () => {
  return (
    <div className="flex min-h-screen flex-col space-y-12 bg-techGrey">
      <FadeInEffect>
        <Timeline />
      </FadeInEffect>
      <FadeInEffect className="w-[50%] self-center">
        <FAQ />
      </FadeInEffect>
    </div>
  )
}

export default Pricing
