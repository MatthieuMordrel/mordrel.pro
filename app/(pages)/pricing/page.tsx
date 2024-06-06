import FAQ from '@/app/components/Pricing Components/FAQ'
import ConsultingProcess from '@/app/components/Pricing Components/Process'
import Timeline from '@/app/components/Pricing Components/Timeline'
import React from 'react'

const Pricing = () => {
  return (
    <div className="flex min-h-screen flex-col space-y-12 bg-techGrey p-12">
      {/* <ConsultingProcess /> */}
      <Timeline />
      <FAQ className="w-[50%] self-center" />
    </div>
  )
}

export default Pricing
