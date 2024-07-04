import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { findMaxRevenue, formatData, formatCurrency } from './utils'
import { colors } from './types'

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
          <XAxis dataKey="Date" tickMargin={10} />
          <YAxis
            type="number"
            tickFormatter={formatCurrency}
            domain={[0, maxYAxis]}
            tickCount={5}
            scale={'linear'}
            tickMargin={5}
          />

          <Tooltip
            formatter={(value: number, name: string) => [
              formatCurrency(value),
              name.charAt(0).toUpperCase() + name.slice(1)
            ]}
            contentStyle={{ backgroundColor: '#f5f5f5', border: '1px solid #ccc' }}
            itemStyle={{ color: colors.techGrey }}
            labelStyle={{ color: colors.techGrey, fontWeight: 'bold' }}
          />
          <Legend align="center" verticalAlign={'bottom'} />
          <Line type="monotone" dataKey="totalRevenue" name="Revenue" stroke={colors.techPurple} />
          <Line type="monotone" dataKey="ebitda" name="EBITDA" stroke={colors.techBlue} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
