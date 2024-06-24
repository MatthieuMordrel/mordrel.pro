'use client'
import React, { useEffect } from 'react'
import ButtonsList from '@/app/ui/Components/ButtonsList'

const ButtonsStocks: React.FC<{ onFetchComplete: (data: any[]) => void }> = ({
  onFetchComplete
}) => {
  const stocks = ['MSFT', 'AAPL', 'NVDA']

  const fetchData = async (label: string) => {
    // console.log(`Button clicked: ${label}`)
    try {
      const response = await fetch('/api/financials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ label })
      })
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      // console.log(data)
      const modifiedData = data.annualReports
        .map((report: any) => ({
          Date: report.fiscalDateEnding,
          Revenue: report.totalRevenue,
          EBITDA: report.operatingIncome
        }))
        .reverse()
      onFetchComplete(modifiedData)
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error)
    }
  }

  useEffect(() => {
    fetchData('MSFT')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex items-center justify-center">
      <ButtonsList
        classButton="px-4 py-2"
        className="relative flex gap-x-4"
        items={stocks}
        onActiveIndexChange={(index) => fetchData(stocks[index])}
      />
    </div>
  )
}

export default ButtonsStocks
