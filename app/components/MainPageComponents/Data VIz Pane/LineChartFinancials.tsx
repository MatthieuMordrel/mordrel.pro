import { LineChartComponent } from '@/app/ui/Components/LineChart'

export const LineChartFinancials = ({ className, data }: { className?: string; data: any[] }) => (
  <div className={className}>
    <LineChartComponent data={data} />
  </div>
)
