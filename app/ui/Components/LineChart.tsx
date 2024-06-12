import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { colors } from '@lib/colors' // Adjust the path as necessary

interface LineChartComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  data: any[]
}

const formatCurrency = (value: number) => {
  if (value >= 1e9) {
    return `${(value / 1e9).toFixed(1)}b`
  } else if (value >= 1e6) {
    return `${(value / 1e6).toFixed(1)}m`
  } else if (value >= 1e3) {
    return `${(value / 1e3).toFixed(1)}k`
  } else {
    return value.toString()
  }
  // Start of Selection
}

export const LineChartComponent: React.FC<LineChartComponentProps> = ({ data = [] }) => {
  console.log(colors)

  const findMaxRevenue = (data: any[]) => {
    const maxRevenue = Math.max(...data.map((item) => item.Revenue))
    const magnitude = Math.pow(10, Math.floor(Math.log10(maxRevenue)))
    return Math.ceil(maxRevenue / magnitude) * magnitude
  }
  const maxYAxis = findMaxRevenue(data)

  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 0, right: 30, left: 20, bottom: 0 }}>
          <XAxis dataKey="Date" />
          <YAxis type="number" tickFormatter={formatCurrency} domain={[0, maxYAxis]} />
          <Tooltip
            formatter={(value: number, name: string) => [
              formatCurrency(value),
              name.charAt(0).toUpperCase() + name.slice(1)
            ]}
            contentStyle={{ backgroundColor: '#f5f5f5', border: '1px solid #ccc' }}
            itemStyle={{ color: colors.techGrey }}
            labelStyle={{ color: colors.techGrey, fontWeight: 'bold' }}
          />
          <Legend />
          <Line type="monotone" dataKey="Revenue" stroke={colors.techPurple} />
          <Line type="monotone" dataKey="EBTIDA" stroke={colors.techBlue} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
