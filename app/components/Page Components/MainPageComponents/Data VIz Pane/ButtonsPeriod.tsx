'use client'
import React, { useState } from 'react'
import ButtonsList from '@/app/ui/Components/ButtonsList'
import { LineChartIcon, BarChartIcon, AreaChartIcon } from 'lucide-react'
import CustomIcon from '@/app/ui/Components/LucideIcons'

interface ButtonsPeriodProps extends React.HTMLAttributes<HTMLDivElement> {
  onButtonChange: (type: 'annualReports' | 'quarterlyReports') => void
}

const ButtonsPeriod: React.FC<ButtonsPeriodProps> = ({ onButtonChange, ...props }) => {
  const types = [
    { label: 'annualReports', text: 'Y' },
    { label: 'quarterlyReports', text: 'Q' }
  ]

  return (
    <ButtonsList
      classButton="px-2 py-1 bg-paneGrey"
      items={types.map((type) => type.label)}
      buttonDisplay={types.map((type) => type.text)}
      onActiveIndexChange={(index) =>
        onButtonChange(types[index].label as 'quarterlyReports' | 'annualReports')
      }
      {...props}
    />
  )
}

export default ButtonsPeriod
