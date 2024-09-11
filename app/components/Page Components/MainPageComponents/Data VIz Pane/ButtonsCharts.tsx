'use client'
import { useData } from '@lib/dataContext'
import { ChartType } from '@lib/types'
import ButtonsList from '@ui/Components/ButtonsList'
import CustomIcon from '@ui/Components/LucideIcons'
import { AreaChartIcon, BarChartIcon, LineChartIcon } from 'lucide-react'
import React from 'react'

interface ButtonsChartsProps extends React.HTMLAttributes<HTMLDivElement> {}

const ButtonsCharts: React.FC<ButtonsChartsProps> = ({ ...props }) => {
  const { setChartType } = useData()

  const chartTypes = [
    { label: 'Line', icon: <CustomIcon icon={LineChartIcon} size={15} /> },
    { label: 'Area', icon: <CustomIcon icon={AreaChartIcon} size={15} /> },
    { label: 'Bar', icon: <CustomIcon icon={BarChartIcon} size={15} /> }
  ]

  return (
    <ButtonsList
      classButton="p-2 bg-paneGrey"
      ids={chartTypes.map((type) => type.label)}
      ariaLabel={chartTypes.map((type) => type.label)}
      items={chartTypes.map((type) => type.label)}
      buttonDisplay={chartTypes.map((type) => type.icon)}
      onActiveIndexChange={(index) => setChartType(chartTypes[index].label.toLowerCase() as ChartType)}
      {...props}
    />
  )
}

export default ButtonsCharts
