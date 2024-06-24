'use client'
import React, { useState } from 'react'
import ButtonsList from '@/app/ui/Components/ButtonsList'
import { LineChartIcon, BarChartIcon, AreaChartIcon } from 'lucide-react'
import CustomIcon from '@/app/ui/Components/LucideIcons'

const ButtonsCharts: React.FC<{ onChartTypeChange: (type: string) => void }> = ({
  onChartTypeChange
}) => {
  const chartTypes = [
    { label: 'Line', icon: <CustomIcon icon={LineChartIcon} size={20} /> },
    { label: 'Area', icon: <CustomIcon icon={AreaChartIcon} size={20} /> },
    { label: 'Bar', icon: <CustomIcon icon={BarChartIcon} size={20} /> }
  ]

  return (
    <ButtonsList
      className="flex gap-x-4"
      classButton=""
      items={chartTypes.map((type) => type.label)}
      buttonDisplay={chartTypes.map((type) => type.icon)}
      onActiveIndexChange={(index) => onChartTypeChange(chartTypes[index].label.toLowerCase())}
    />
  )
}

export default ButtonsCharts
