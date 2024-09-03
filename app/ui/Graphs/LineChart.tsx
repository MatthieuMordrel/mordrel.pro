import { colors } from '@lib/colors'
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { findMaxRevenue, formatCurrency, formatData, lineChartProps, tooltipProps, yAxisProps } from './utils'

interface LineChartComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  data: (number | string)[]
}

export const LineChartComponent: React.FC<LineChartComponentProps> = ({ data = [] }) => {
  const maxYAxis = findMaxRevenue(data)
  const formattedData = formatData(data)
  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={formattedData} margin={{ top: 15, right: 10, left: 20, bottom: 0 }}>
          <XAxis {...lineChartProps} />
          <YAxis type="number" tickFormatter={formatCurrency} domain={[0, maxYAxis]} scale={'linear'} {...yAxisProps} />

          <Tooltip {...tooltipProps} />
          <Legend />
          <Line type="monotone" dataKey="totalRevenue" name="Revenue" stroke={colors.techPurple} />
          <Line type="monotone" dataKey="ebitda" name="EBITDA" stroke={colors.techBlue} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
