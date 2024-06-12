'use client'
import React from 'react'
import ButtonsToggle from '@ui/Components/ButtonsToggle'

const ButtonsStocks: React.FC<{ onFetchComplete: (data: any[]) => void }> = ({
  onFetchComplete
}) => {
  const fetchData = async (label: string) => {
    console.log(`Button clicked: ${label}`)
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
      console.log(data)
      const modifiedData = data.annualReports
        .map((report: any) => ({
          Date: report.fiscalDateEnding,
          Revenue: report.totalRevenue,
          EBTIDA: report.operatingIncome
        }))
        .reverse()
      onFetchComplete(modifiedData)
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error)
    }
  }

  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex min-w-[50%] justify-between">
        <ButtonsToggle className="relative" labels={['MSFT', 'AAPL', 'NVDA']} onClick={fetchData} />
      </div>
    </div>
  )
}

export default ButtonsStocks
