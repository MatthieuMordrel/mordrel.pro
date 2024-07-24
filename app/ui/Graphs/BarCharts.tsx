import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { findMaxRevenue, formatData, formatCurrency, lineChartProps, tooltipProps, yAxisProps } from './utils'
import { colors } from '@lib/colors'

interface BarChartComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  data: (number | string)[]
}

export const BarChartComponent: React.FC<BarChartComponentProps> = ({ data }) => {
  const maxYAxis = findMaxRevenue(data)
  const formattedData = formatData(data)
  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={formattedData} margin={{ top: 15, right: 10, left: 20, bottom: 0 }}>
          <XAxis {...lineChartProps} />
          <YAxis type="number" tickFormatter={formatCurrency} domain={[0, maxYAxis]} scale={'linear'} {...yAxisProps} />
          <Tooltip {...tooltipProps} />

          <Legend />
          <Bar dataKey="totalRevenue" name="Revenue" fill={colors.techPurple} />
          <Bar dataKey="ebitda" name="EBITDA" fill={colors.techBlue} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
