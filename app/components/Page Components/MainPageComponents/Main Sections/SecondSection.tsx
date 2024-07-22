import FadeInEffect from '@/app/ui/Effects/AdvancedFadeIn'
import { Pane } from '@/app/ui/Effects/Pane'
import ApiIntegrationShowcase from '../API Pane/_PaneAPI'
import AutomationPane from '../Automation Pane/AutomationPane'
import { PaneDataViz } from '../Data VIz Pane/_PaneDataViz'
import ExcelProposition from '../Excel Pane/_PaneExcel'
import { TypewriterEffectSmoothDemo } from '../Link To Contact form/LinkToContactForm'
import Examples from '../Examples/Examples'

export const SecondSection = () => (
  <section className="flex w-[90vw] flex-col items-center gap-y-16 md:w-[80vw] md:gap-y-28 3xl:w-[60vw]">
    <Examples className="w-full scroll-mt-28" id="exemples-block" />
    <FadeInEffect id="visu-block" animationStyle="fadeLeft" className="h-[30rem] w-full scroll-mt-28 md:h-[37.5rem]">
      <Pane className="h-full">
        <PaneDataViz />
      </Pane>
    </FadeInEffect>
    <FadeInEffect id="api-block" animationStyle="fadeRight" className="h-[30rem] w-full scroll-mt-28 md:h-[37.5rem]">
      <Pane className="h-full">
        <ApiIntegrationShowcase />
      </Pane>
    </FadeInEffect>
    <ExcelProposition id="excel-block" className="w-full scroll-mt-28" />
    <FadeInEffect animationStyle="zoom">
      <Pane className="h-[30rem] w-full md:h-[37.5rem]">
        <AutomationPane />
      </Pane>
    </FadeInEffect>

    <TypewriterEffectSmoothDemo />
  </section>
)
