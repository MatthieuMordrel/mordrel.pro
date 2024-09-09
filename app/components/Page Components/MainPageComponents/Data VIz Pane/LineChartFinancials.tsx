'use client'
import { useData } from '@lib/dataContext'
import { AreaChartComponent } from '@ui/Graphs/AreaChart'
import { BarChartComponent } from '@ui/Graphs/BarCharts'
import { LineChartComponent } from '@ui/Graphs/LineChart'

interface LineChartFinancialsProps {
  className?: string
}

export const LineChartFinancials: React.FC<LineChartFinancialsProps> = ({ className }) => {
  const { financialData, chartType, dataFrequency } = useData()

  const renderChart = () => {
    switch (chartType) {
      case 'line':
        return <LineChartComponent data={financialData[dataFrequency]} />
      case 'area':
        return <AreaChartComponent data={financialData[dataFrequency]} />
      case 'bar':
        return <BarChartComponent data={financialData[dataFrequency]} />
      default:
        return null
    }
  }

  return <div className={className}>{renderChart()}</div>
}
