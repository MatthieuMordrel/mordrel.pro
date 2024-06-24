import { useState } from 'react'
import DataVizBestPractices from './DataVizProcess'
import { BulletPointsList } from '@/app/ui/Components/BulletPointsList'

export const BulletPoints = () => {
  const customPractices = [
    {
      text: 'Retrieve relevant internal or external data'
    },
    {
      text: 'Select the right tool for your project'
    },
    { text: 'Choose the best visual' },
    { text: 'Add interactivity for advanced insights' }
  ]

  return <BulletPointsList items={customPractices.map((practice) => practice.text)} className="" />
}
