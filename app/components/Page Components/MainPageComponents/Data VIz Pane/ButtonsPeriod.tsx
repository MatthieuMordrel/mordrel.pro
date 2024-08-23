'use client'
import { useData } from '@/app/lib/dataContext'
import ButtonsList from '@/app/ui/Components/ButtonsList'
import React from 'react'

const ButtonsPeriod: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  const { setDataFrequency } = useData()

  const types = [
    { label: 'annualReports', text: 'Y' },
    { label: 'quarterlyReports', text: 'Q' }
  ]

  return (
    <ButtonsList
      classButton="px-2 py-1 bg-paneGrey"
      items={types.map((type) => type.label)}
      buttonDisplay={types.map((type) => type.text)}
      onActiveIndexChange={(index) => setDataFrequency(types[index].label as 'quarterlyReports' | 'annualReports')}
      {...props}
    />
  )
}

export default ButtonsPeriod
