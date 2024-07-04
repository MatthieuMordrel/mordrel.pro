'use client'
import React, { useEffect } from 'react'
import ButtonsList from '@/app/ui/Components/ButtonsList'

interface ButtonsStocksProps {
  onFetchComplete: (data: {
    annualReports: (number | string)[]
    quarterlyReports: (number | string)[]
  }) => void
  className?: string
}

const ButtonsStocks: React.FC<ButtonsStocksProps> = ({ onFetchComplete, ...props }) => {
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

      const reverseDataArrays = function (data: any) {
        return {
          ...data,
          annualReports: data.annualReports.slice(0, 22).reverse(),
          quarterlyReports: data.quarterlyReports.slice(0, 22).reverse()
        }
      }
      const modifiedData = reverseDataArrays(data)

      onFetchComplete({
        annualReports: modifiedData.annualReports,
        quarterlyReports: modifiedData.quarterlyReports
      })
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error)
    }
  }

  useEffect(() => {
    fetchData('MSFT')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <ButtonsList
        classButton="p-1 sm:p-2"
        className=""
        items={stocks}
        onActiveIndexChange={(index) => fetchData(stocks[index])}
        {...props}
      />
      {/* <div>Data provided by alphavantage</div> */}
    </>
  )
}

export default ButtonsStocks
