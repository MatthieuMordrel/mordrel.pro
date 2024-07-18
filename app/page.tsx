import MainVideo from '@components/MainPageComponents/MainVideo'
import MainDiv from '@components/MainPageComponents/Main Pane/MainPane'
import ApiIntegrationShowcase from '@components/MainPageComponents/API Pane/_PaneAPI'
import PaneValue from '@components/MainPageComponents/Main Pane/NewPane'
import { PaneDataViz } from '@components/MainPageComponents/Data VIz Pane/_PaneDataViz'
import ExcelProposition from '@components/MainPageComponents/Excel Pane/_PaneExcel'
import { TypewriterEffectSmoothDemo } from '@components/MainPageComponents/Link To Contact form/LinkToContactForm'
import { Pane } from '@/app/ui/Effects/Pane'
import AutomationPane from '@components/MainPageComponents/Automation Pane/AutomationPane'
import Examples from '@components/MainPageComponents/Examples/Examples'
import React from 'react'
import FadeInEffect from './ui/Effects/AdvancedFadeIn'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-y-16 bg-techGrey">
      <div className="flex min-h-[90vh] flex-col">
        <MainVideo src="/PurpleVideo.mp4" />
        <div className="relative w-[90vw] md:w-[75vw] lg:mt-16 3xl:w-[60vw]">
          <MainDiv />
        </div>
        <div className="relative w-[90vw] md:w-[75vw] lg:my-16 3xl:w-[60vw]">
          <PaneValue />
        </div>
      </div>
      <div id="exemples-block" className="w-full scroll-mt-28">
        <Examples />
      </div>
      <section className="flex w-[90vw] flex-col items-center gap-y-8 md:w-[80vw] md:gap-y-28 3xl:w-[60vw]">
        <div id="api-block" className="h-[30rem] w-full scroll-mt-28 md:h-[37.5rem]">
          <FadeInEffect animationStyle="fadeRight" className="h-full">
            <Pane className="h-full">
              <ApiIntegrationShowcase />
            </Pane>
          </FadeInEffect>
        </div>
        <div id="visu-block" className="h-[30rem] w-full scroll-mt-28 md:h-[37.5rem]">
          <FadeInEffect animationStyle="fadeLeft" className="h-full">
            <Pane className="h-full">
              <PaneDataViz />
            </Pane>
          </FadeInEffect>
        </div>
        <div id="excel-block" className="w-full scroll-mt-28">
          <ExcelProposition />
        </div>
        <FadeInEffect animationStyle="zoom">
          <Pane className="h-[30rem] w-full md:h-[37.5rem]">
            <AutomationPane />
          </Pane>
        </FadeInEffect>

        <TypewriterEffectSmoothDemo />
      </section>
    </main>
  )
}
