import React from 'react'
import styles from './API.module.css'
import { MdScreenSearchDesktop } from 'react-icons/md'
import Graph from './Graph'
import PowerBISkillsCard from './PowerBICard'
import { TextHighlight } from '@/app/ui/TextHighlight'
import { FontTextPanes } from '@/app/ui/FontTextPanes'

const currentYear = new Date().getFullYear()

const data = [
  { date: new Date(currentYear, 0, 1), value: 0 },
  { date: new Date(currentYear, 1, 1), value: 5 },
  { date: new Date(currentYear, 2, 1), value: 15 },
  { date: new Date(currentYear, 3, 1), value: 40 },
  { date: new Date(currentYear, 4, 1), value: 75 },
  { date: new Date(currentYear, 5, 1), value: 150 }
]

const PaneDataViz = () => {
  return (
    <div className="flex w-full flex-wrap justify-between p-6">
      <div className="self-center">
        <Graph data={data} />
      </div>
      <div className="min-w-[35%] max-w-[50%] flex-1">
        <TextHighlight className="mb-2 text-2xl md:text-3xl lg:text-4xl">Get insights from your data</TextHighlight>
        <p className="mb-8 text-base text-textGrey md:text-lg">
          <span className="text-techPurple">Don&apos;t let your data sleep. </span>
          <FontTextPanes>
            Unlock your potential of data visualization to maximize your business insights. We specialize in crafting intuitive visual representations
            that enhance decision-making and highlight key metrics.
          </FontTextPanes>
        </p>
        <PowerBISkillsCard />
      </div>
    </div>
  )
}

export default PaneDataViz
