import { AreaChart, Area, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { findMaxRevenue, formatData, formatCurrency, lineChartProps, tooltipProps, yAxisProps } from './utils'
import { colors } from '@lib/colors'

interface AreaChartComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  data: (number | string)[]
}

export const AreaChartComponent: React.FC<AreaChartComponentProps> = ({ data = [] }) => {
  const maxYAxis = findMaxRevenue(data)
  const formattedData = formatData(data)
  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={formattedData} margin={{ top: 15, right: 10, left: 20, bottom: 0 }}>
          <XAxis {...lineChartProps} />
          <YAxis type="number" tickFormatter={formatCurrency} domain={[0, maxYAxis]} scale={'linear'} {...yAxisProps} />
          <Tooltip {...tooltipProps} />

          <Legend />
          <Area type="monotone" dataKey="totalRevenue" name="Revenue" fill={colors.techPurple} stroke={colors.techPurple} fillOpacity={0.6} />
          <Area type="monotone" dataKey="ebitda" name="EBITDA" fill={colors.techBlue} stroke={colors.techBlue} fillOpacity={0.6} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
