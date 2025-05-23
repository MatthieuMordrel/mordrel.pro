import { HighlightedSentenceContent } from '@/app/ui/Fonts/ContentPaneHighlightedSentence'
import { BulletPointsList } from '@ui/Components/BulletPointsList'
import { TextHighlight } from '@ui/Fonts/TextHighlight'
import Link from 'next/link'
import ButtonsCharts from './ButtonsCharts'
import ButtonsPeriod from './ButtonsPeriod'
import ButtonsStocks from './ButtonsStocks'
import { LineChartFinancials } from './LineChartFinancials'

export const PaneDataViz = () => {
  return (
    <section className="grid h-full grid-cols-1 grid-rows-[auto_auto_1fr_auto] gap-x-4 p-8 md:p-6 lg:grid-cols-2 lg:grid-rows-[auto_1fr_1fr_auto] ">
      <div className="grid grid-rows-[auto_auto_1fr] lg:col-start-2 lg:row-span-full">
        <TextHighlight className="row-start-1 mb-2 ">Get insights from your data</TextHighlight>
        <div className='hidden sm:inline '>
          <HighlightedSentenceContent
            className="pb-1"
            HighlightedSentence="Don't let your data sleep."
            MainContent="Unlock your potential of data visualization to extract hidden business insights. We specialize in crafting intuitive visual representations that enhance decision-making and drive growth."
          />
        </div>
        <BulletPoints className="ml-3 hidden lg:self-end" />
      </div>
      <ButtonsCharts className="z-10 flex gap-x-2 justify-self-end lg:col-start-1 lg:row-start-1 lg:mt-3 lg:self-start" />

      <LineChartFinancials className="h-full min-h-10 w-full lg:col-start-1 lg:row-span-2 lg:row-start-2" />

      <div className="ml-1 text-[0.5rem] italic text-gray-500 lg:col-start-1 lg:row-start-4 lg:self-end">Data provided by Alpha Vantage</div>

      <div className="col-start-1 row-start-5 flex items-center justify-between lg:col-start-1 lg:row-start-5">
        <ButtonsStocks className="flex gap-x-4 pt-2" />
        <ButtonsPeriod className="z-10 hidden gap-x-2 lg:flex" />
      </div>
      <div className="col-start-1 row-start-5 hidden items-center justify-self-end text-gray-400 hover:text-techBlue sm:flex lg:col-start-2 lg:row-start-5">
        <Link href="/powerbivisuals" className="">
          Browse more visuals
        </Link>
        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </section>
  )
}

export const BulletPoints = ({ ...props }) => {
  const customPractices = [
    {
      text: 'Retrieve relevant internal or external data'
    },
    {
      text: 'Select the right tool for your project'
    },
    { text: 'Choose the best visual' },
    { text: 'Add interactivity for advanced insights' },
    { text: 'Ensure responsivity ' }
  ]

  return <BulletPointsList items={customPractices.map((practice) => practice.text)} {...props} />
}
