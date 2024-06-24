'use client'

import React, { useState } from 'react'
import { TextHighlight } from '@/app/ui/Fonts/TextHighlight'
import ButtonsStocks from './ButtonsStocks'
import { LineChartFinancials } from './LineChartFinancials'
import { HighlightedSentenceContent } from '@/app/ui/Components/ContentPaneHighlightedSentence'
import { BulletPoints } from './Component'
import ButtonsCharts from './ButtonsCharts'

const PaneDataViz = () => {
  const [financialData, setFinancialData] = useState<any[]>([])
  const [chartType, setChartType] = useState<string>('line')

  return (
    <div className="flex h-[60vh] w-full flex-wrap items-stretch justify-between gap-x-8 p-6">
      <div className="flex max-h-[60vh] w-1/2 flex-col justify-center gap-y-4">
        <div className="flex items-center justify-between">
          <ButtonsStocks onFetchComplete={setFinancialData} />
          <ButtonsCharts onChartTypeChange={setChartType} />
        </div>
        <LineChartFinancials
          data={financialData}
          className="h-full min-h-10 w-full"
          chartType={chartType}
        />
      </div>

      <div className="flex-1">
        <TextHighlight className="mb-2 text-2xl md:text-3xl lg:text-4xl">
          Get insights from your data
        </TextHighlight>
        <div className="flex h-[45vh] flex-col justify-between gap-y-6">
          <HighlightedSentenceContent
            HighlightedSentence="Don't let your data sleep."
            MainContent="Unlock your potential of data visualization to maximize your business insights. We
            specialize in crafting intuitive visual representations that enhance decision-making and
            highlight key metrics."
          />
          <BulletPoints />
        </div>
      </div>
    </div>
  )
}

export default PaneDataViz
