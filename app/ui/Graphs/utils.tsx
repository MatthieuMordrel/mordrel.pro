export const formatCurrency = (value: number) => {
  if (value >= 1e9) {
    return `$${(value / 1e9).toFixed(1)}b`
  } else if (value >= 1e6) {
    return `$${(value / 1e6).toFixed(1)}m`
  } else if (value >= 1e3) {
    return `$${(value / 1e3).toFixed(1)}k`
  } else {
    return `$${value.toFixed(2)}`
  }
}

export function findMaxRevenue(data: any[]): number {
  //Spread operator is used to spread the revenue from an array to a list of numbers (see Math.max function for more details)
  //The spread is done after that map has transformed the data in an array of revenue
  console.log('Data in utils:', data)
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
