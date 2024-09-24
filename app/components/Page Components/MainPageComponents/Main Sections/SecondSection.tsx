import FadeInEffect from '@ui/Effects/AdvancedFadeIn'
import { Pane } from '@ui/Effects/Pane'
import ApiIntegrationShowcase from '../API Pane/_PaneAPI'
import AutomationPane from '../Automation Pane/AutomationPane'
import { PaneDataViz } from '../Data VIz Pane/_PaneDataViz'
import { ExamplesParent } from '../Examples/ExampleParent'
import { Examples } from '../Examples/Examples'
import ExcelProposition from '../Excel Pane/_PaneExcel'
import { TypewriterEffectSmoothDemo } from '../Link To Contact form/LinkToContactForm'

export const SecondSection = () => (
  <section className="flex w-[90vw] flex-col items-center gap-y-16 md:w-[80vw] md:gap-y-28 3xl:w-[60vw]">
    <ExamplesParent className="w-full scroll-mt-28" id="exemples-block">
      <Examples />
    </ExamplesParent>
    <FadeInEffect id="visu-block" animationStyle="fadeLeft" className="h-[30rem] w-full scroll-mt-28 md:h-[37.5rem]">
      <Pane className="h-full" includeBorderBeam={false}>
        <PaneDataViz />
      </Pane>
    </FadeInEffect>
    <FadeInEffect id="api-block" animationStyle="fadeRight" className="min-h-[25rem] w-full scroll-mt-28 md:h-[37.5rem]">
      <Pane className="h-full">
        <ApiIntegrationShowcase />
      </Pane>
    </FadeInEffect>
    <ExcelProposition id="excel-block" className="w-full scroll-mt-28" />
    <FadeInEffect animationStyle="zoom">
      <Pane className="flex min-h-[20rem] w-full flex-col md:h-[37.5rem]">
        <AutomationPane />
      </Pane>
    </FadeInEffect>

    <TypewriterEffectSmoothDemo />
  </section>
)
