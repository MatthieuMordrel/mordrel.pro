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
import { FirstSection } from '@components/MainPageComponents/Main Sections/FirstSection'
import { SecondSection } from './components/MainPageComponents/Main Sections/SecondSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-y-16 bg-techGrey">
      <FirstSection />
      <SecondSection />
    </main>
  )
}
