'use client'
import React, { useState } from 'react'
import ButtonsList from '@/app/ui/Components/ButtonsList'
import { LineChartIcon, BarChartIcon, AreaChartIcon } from 'lucide-react'
import CustomIcon from '@/app/ui/Components/LucideIcons'
import { ChartType } from '@lib/types'

interface ButtonsChartsProps extends React.HTMLAttributes<HTMLDivElement> {
  onChartTypeChange: (type: ChartType) => void
}

const ButtonsCharts: React.FC<ButtonsChartsProps> = ({ onChartTypeChange, ...props }) => {
  const chartTypes = [
    { label: 'Line', icon: <CustomIcon icon={LineChartIcon} size={15} /> },
    { label: 'Area', icon: <CustomIcon icon={AreaChartIcon} size={15} /> },
    { label: 'Bar', icon: <CustomIcon icon={BarChartIcon} size={15} /> }
  ]

  return (
    <ButtonsList
      classButton="p-2 bg-paneGrey"
      items={chartTypes.map((type) => type.label)}
      buttonDisplay={chartTypes.map((type) => type.icon)}
      onActiveIndexChange={(index) => onChartTypeChange(chartTypes[index].label.toLowerCase() as ChartType)}
      {...props}
    />
  )
}

export default ButtonsCharts
