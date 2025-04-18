import { colors } from '@lib/colors'

export const formatCurrency = (value: number | string | null | undefined) => {
  const numValue = Number(value)

  if (isNaN(numValue)) {
    return 'N/A'
  }

  if (numValue >= 1e9) {
    return `$${(numValue / 1e9).toFixed(1)}b`
  } else if (numValue >= 1e6) {
    return `$${(numValue / 1e6).toFixed(1)}m`
  } else if (numValue >= 1e3) {
    return `$${(numValue / 1e3).toFixed(1)}k`
  } else {
    return `$${numValue.toFixed(2)}`
  }
}

export function findMaxRevenue(data: any[]): number {
  //Spread operator is used to spread the revenue from an array to a list of numbers (see Math.max function for more details)
  //The spread is done after that map has transformed the data in an array of revenue
  // console.log('Data in utils:', data)
  const maxRevenue = Math.max(...data.map((item) => item.totalRevenue))
  const magnitude = Math.pow(10, Math.floor(Math.log10(maxRevenue)))
  return Math.ceil(maxRevenue / magnitude) * magnitude
}

export function formatData(data: any[]): any[] {
  return data.map((item) => {
    const date = new Date(item.fiscalDateEnding)
    const quarter = Math.floor(date.getMonth() / 3) + 1
    const year = date.getFullYear().toString().slice(-2)
    return {
      ...item,
      Date: `Q${quarter} ${year}`
    }
  })
}

export const lineChartProps = {
  dataKey: 'Date',
  tickMargin: 10,
  stroke: colors.foreground
}

export const tooltipProps = {
  formatter: (value: number, name: string) => [formatCurrency(value), name.charAt(0).toUpperCase() + name.slice(1)],
  contentStyle: { backgroundColor: '#f5f5f5', border: '1px solid #ccc' },
  itemStyle: { color: colors.background },
  labelStyle: { color: colors.background, fontWeight: 'bold' }
}

export const yAxisProps = {
  tickCount: 5,
  tickMargin: 5,
  stroke: colors.foreground
}
