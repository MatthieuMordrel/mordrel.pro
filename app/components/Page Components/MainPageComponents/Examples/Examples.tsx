'use client'

import ButtonsList from '@ui/Components/ButtonsList'
import { Process } from '@ui/Components/ProcessCard'
import FadeInEffect from '@ui/Effects/AdvancedFadeIn'
import { TextHighlight } from '@ui/Fonts/TextHighlight'
import { HTMLAttributes, useState } from 'react'
import { examplesData } from './examplesData'

export default function Examples({ className, ...props }: HTMLAttributes<HTMLElement>) {
  const [showAutomation, setShowAutomation] = useState(0)

  return (
    <section className={className} {...props}>
      <TextHighlight className="titleResponsive mb-8 text-center">Simply, what do we do ?</TextHighlight>
      <FadeInEffect className="mx-auto w-full max-w-3xl p-6 pt-0 sm:p-10 sm:pt-0">
        <ButtonsList
          classButton="px-2 md:px-4 py-2 md:py-3 "
          items={examplesData.processTitles}
          onActiveIndexChange={setShowAutomation}
          className="flex justify-center gap-x-2"
        />

        <div className="mb-6 mt-4 space-y-2">
          <h3 className="textLarge block font-bold tracking-tight">{examplesData.processTitles[showAutomation]}</h3>
          <p className="text-gray-400">{examplesData.processDescriptions[showAutomation]}</p>
        </div>
        <Process steps={examplesData.processSteps[showAutomation]} />
      </FadeInEffect>
    </section>
  )
}
