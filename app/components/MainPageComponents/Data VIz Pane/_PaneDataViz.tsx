'use client'

import React, { useState } from 'react'
import PowerBISkillsCard from './PowerBICard'
import { TextHighlight } from '@/app/ui/Fonts/TextHighlight'
import { FontTextPanes } from '@/app/ui/Fonts/FontTextPanes'
import ButtonsStocks from './ButtonsStocks'
import { LineChartFinancials } from './LineChartFinancials'
import { HighlightedSentenceContent } from '@/app/ui/Components/ContentPaneHighlightedSentence'

const PaneDataViz = () => {
  const [financialData, setFinancialData] = useState<any[]>([])

  return (
    <div className="flex min-h-[30vh] w-full flex-wrap items-stretch justify-between gap-x-8 p-6">
      <div className="flex max-h-[60vh] w-1/2 flex-col justify-center gap-y-4">
        <ButtonsStocks onFetchComplete={setFinancialData} />
        <LineChartFinancials data={financialData} className="h-full min-h-10 w-full" />
      </div>

      <div className="flex-1">
        <TextHighlight className="mb-2 text-2xl md:text-3xl lg:text-4xl">
          Get insights from your data
        </TextHighlight>
        <div className="flex flex-col gap-y-6">
          <HighlightedSentenceContent
            HighlightedSentence="Don't let your data sleep."
            MainContent="Unlock your potential of data visualization to maximize your business insights. We
            specialize in crafting intuitive visual representations that enhance decision-making and
            highlight key metrics."
          />
          <PowerBISkillsCard />
        </div>
      </div>
    </div>
  )
}

export default PaneDataViz
