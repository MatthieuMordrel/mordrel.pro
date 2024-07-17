import React from 'react'
import { ResponsiveContainer, FunnelChart, Funnel, LabelList, Tooltip } from 'recharts'
import { formatCurrency } from './utils'
import { colors } from '@lib/colors'

interface LineChartComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  data: number[]
}

export const FunnelChartComponent: React.FC<LineChartComponentProps> = ({ data }) => {
  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height="100%">
        <FunnelChart>
          <Tooltip
            formatter={(value: number, name: string) => [formatCurrency(value), name]}
            contentStyle={{ backgroundColor: '#f5f5f5', border: '1px solid #ccc' }}
            itemStyle={{ color: colors.techGrey }}
            labelStyle={{ color: colors.techGrey, fontWeight: 'bold' }}
          />
          <Funnel dataKey="value" data={data} isAnimationActive>
            <LabelList position="right" fill={colors.techGrey} stroke="none" dataKey="name" />
            <LabelList
              position="right"
              fill={colors.techGrey}
              stroke="none"
              formatter={(entry: { value: number }) => formatCurrency(entry.value)}
              offset={40}
            />
          </Funnel>
        </FunnelChart>
      </ResponsiveContainer>
    </div>
  )
}
