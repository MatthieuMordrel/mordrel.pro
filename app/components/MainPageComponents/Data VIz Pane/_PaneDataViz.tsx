import React from 'react'
import styles from './API.module.css'
import { MdScreenSearchDesktop } from 'react-icons/md'
import Graph from './Graph'
import PowerBISkillsCard from './PowerBICard'

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
    <div className="flex flex-col items-center bg-techGrey p-8 font-bold">
      <h2 className="mb-6 text-center text-2xl font-extrabold text-white md:text-4xl lg:text-5xl">Get insights from your data</h2>
      <div className="flex w-full flex-row flex-wrap justify-between">
        <div className="flex-[0_0_1/2] self-center p-4">
          <Graph data={data} />
        </div>
        <div className="min-w-[35%] max-w-[50%] flex-[1_1_0] p-4">
          <p className="mb-8 text-base text-textGrey md:text-lg">
            <span className="text-techPurple">Don&apos;t let your data sleep. </span>
            Unlock your potential of data visualization to maximize your business insights. We specialize in crafting intuitive visual representations that enhance decision-making and highlight key metrics.
          </p>
          <PowerBISkillsCard />
        </div>
      </div>
    </div>
  )
}

export default PaneDataViz
