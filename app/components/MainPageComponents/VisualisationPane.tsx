import React from 'react'
import styles from './API.module.css'
import { MdScreenSearchDesktop } from 'react-icons/md'
import D3Visualization from './D3Visualization'
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

const VisualisationPane = () => {
  return (
    <div className="flex flex-row flex-wrap justify-between bg-techGrey font-bold ">
      <div className="flex-[0_0_1/2] self-center p-4">
        <D3Visualization data={data} />
      </div>
      <div className="min-w-[35%] max-w-[50%] flex-[1_1_0] p-4 ">
        {/* <MdScreenSearchDesktop className="mb-6 size-8 rounded bg-techGrey fill-techBlue ring-8 ring-techGrey" /> */}
        <h2 className={`mb-2 text-lg md:text-xl lg:text-2xl `}>Get insights from your data</h2>
        <p className="mb-8 text-base text-textGrey md:text-lg">
          <span className="text-techPurple">Don&apos;t let your data sleep.</span>
          Unlock your potential of data visualization to maximize your business insights. We specialize in crafting intuitive visual representations that enhance decision-making and highlight key metrics.
        </p>
        <PowerBISkillsCard />
      </div>
    </div>
  )
}

export default VisualisationPane
