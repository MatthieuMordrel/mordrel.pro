import { AreaChartComponent } from '@/app/ui/Graphs/AreaChart'
import { BarChartComponent } from '@/app/ui/Graphs/BarCharts'
import { LineChartComponent } from '@/app/ui/Graphs/LineChart'
import { useEffect, useRef } from 'react'
import { ChartType } from '@lib/types'

interface LineChartFinancialsProps {
  className?: string
  data: any[]
  chartType: ChartType
}

export const LineChartFinancials: React.FC<LineChartFinancialsProps> = ({ className, data, chartType }) => {
  // const renderCount = useRef(0)
  // renderCount.current += 1
  // console.log('Chart was rendered at', new Date().toLocaleTimeString())
  // console.log(`Component has rendered ${renderCount.current} times`)
  // useEffect(() => {
  //   console.log(`Component has rendered ${renderCount.current} times`)
  // })
  const renderChart = () => {
    switch (chartType) {
      case 'line':
        return <LineChartComponent data={data} />
      case 'area':
        return <AreaChartComponent data={data} />
      case 'bar':
        return <BarChartComponent data={data} />
      default:
        return null
    }
  }

  return <div className={className}>{renderChart()}</div>
}
