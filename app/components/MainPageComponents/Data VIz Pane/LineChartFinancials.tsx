import { AreaChartComponent } from '@/app/ui/Graphs/AreaChart'
import { BarChartComponent } from '@/app/ui/Graphs/BarCharts'
import { LineChartComponent } from '@/app/ui/Graphs/LineChart'

interface LineChartFinancialsProps {
  className?: string
  data: any[]
  chartType: string
}

export const LineChartFinancials: React.FC<LineChartFinancialsProps> = ({
  className,
  data,
  chartType
}) => {
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
