'use client'

import ButtonsList from '@ui/Components/ButtonsList'
import { Process } from '@ui/Components/ProcessCard'
import { useState } from 'react'
import { examplesData } from './examplesData'

export function Examples() {
  const [showAutomation, setShowAutomation] = useState(0)
  return (
    <>
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
    </>
  )
}
