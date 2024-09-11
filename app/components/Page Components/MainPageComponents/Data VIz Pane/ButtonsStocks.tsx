'use client'
import { useData } from '@lib/dataContext'
import ButtonsList from '@ui/Components/ButtonsList'
import React, { useEffect } from 'react'

interface ButtonsStocksProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

const ButtonsStocks: React.FC<ButtonsStocksProps> = ({ ...props }) => {
  const { setFinancialData } = useData()
  const stocks = ['MSFT', 'AAPL', 'NVDA']

  const fetchData = async (label: string) => {
    try {
      const response = await fetch('/api/financials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ label }),
        next: { revalidate: 3600 * 24 }
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

      setFinancialData({
        annualReports: modifiedData.annualReports,
        quarterlyReports: modifiedData.quarterlyReports
      })
      // console.log(modifiedData)
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error)
    }
  }
  //fetch data on loading
  useEffect(() => {
    fetchData('MSFT')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <ButtonsList
        classButton="p-1 sm:p-2"
        className=""
        ids={stocks}
        ariaLabel={stocks}
        items={stocks}
        onActiveIndexChange={(index) => fetchData(stocks[index])}
        {...props}
      />
    </>
  )
}

export default ButtonsStocks
