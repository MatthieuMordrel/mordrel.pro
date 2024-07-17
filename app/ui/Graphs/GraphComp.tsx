import React from 'react'
import { Tooltip } from 'recharts'
import { formatCurrency } from './utils'
import { colors } from '@lib/colors'

interface GraphTooltipProps {
  value: number
  name: string
}

export const GraphTooltip: React.FC<GraphTooltipProps> = ({ value, name }) => (
  <Tooltip
    formatter={() => [formatCurrency(value), name.charAt(0).toUpperCase() + name.slice(1)]}
    contentStyle={{ backgroundColor: '#f5f5f5', border: '1px solid #ccc' }}
    itemStyle={{ color: colors.techGrey }}
    labelStyle={{ color: colors.techGrey, fontWeight: 'bold' }}
  />
)
