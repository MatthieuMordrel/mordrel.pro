'use client'
import { ChartType } from '@lib/types'
import React, { createContext, ReactNode, useContext, useState } from 'react'

// Define the shape of your context state
interface FinancialData {
  annualReports: (number | string)[]
  quarterlyReports: (number | string)[]
}

interface DataContextType {
  financialData: FinancialData
  setFinancialData: React.Dispatch<React.SetStateAction<FinancialData>>
  chartType: ChartType
  setChartType: React.Dispatch<React.SetStateAction<ChartType>>
  dataFrequency: 'annualReports' | 'quarterlyReports'
  setDataFrequency: React.Dispatch<React.SetStateAction<'annualReports' | 'quarterlyReports'>>
}

// Create a default context value
const defaultContextValue: DataContextType = {
  financialData: { annualReports: [], quarterlyReports: [] },
  setFinancialData: () => {},
  chartType: 'line',
  setChartType: () => {},
  dataFrequency: 'annualReports',
  setDataFrequency: () => {}
}

// Create the context with the default value
const DataContext = createContext<DataContextType>(defaultContextValue)

// Create a provider component
interface DataProviderProps {
  children: ReactNode
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [financialData, setFinancialData] = useState<FinancialData>(defaultContextValue.financialData)
  const [chartType, setChartType] = useState<ChartType>(defaultContextValue.chartType)
  const [dataFrequency, setDataFrequency] = useState<'annualReports' | 'quarterlyReports'>(defaultContextValue.dataFrequency)

  const value = {
    financialData,
    setFinancialData,
    chartType,
    setChartType,
    dataFrequency,
    setDataFrequency
  }

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

// Create a custom hook to use the context
export const useData = () => {
  const context = useContext(DataContext)
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider')
  }
  return context
}
