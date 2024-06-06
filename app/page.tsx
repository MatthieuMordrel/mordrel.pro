import MainVideo from './ui/MainVideo'
import MainDiv from './components/MainPageComponents/Main Pane/MainPane'
import StyledWrapper from './ui/StyledWrapper'
import ApiIntegrationShowcase from './components/MainPageComponents/API Pane/_PaneAPI'
import _PaneValue from './components/MainPageComponents/Main Pane/PaneValue'
import PaneDataViz from './components/MainPageComponents/Data VIz Pane/_PaneDataViz'
import ExcelProposition from './components/MainPageComponents/Excel Pane/_PaneExcel'
import { GlobeDemo } from './components/MainPageComponents/Automation Pane/Globe'
import { BorderBeam } from './ui/BorderBeam'
import { TextHighlight } from './ui/TextHighlight'
import GradualSpacing from './ui/GradualSpacing'
import { TypewriterEffectSmoothDemo } from './components/MainPageComponents/Link To Contact form/LinkToContactForm'
import { AnimateTextDiv } from './components/MainPageComponents/Automation Pane/AnimatedTextDiv'
import { ScrollTriggered } from './ui/ScrollTriggered'
import { Pane } from '@ui/Pane'
import AutomationPane from './components/MainPageComponents/Automation Pane/AutomationPane'

export default function Home() {
  return (
    <main className="bg-techGrey flex min-h-screen flex-col items-center">
      <div className="min-h-screen">
        <MainVideo src="/PurpleVideo.mp4" />
        {/* Using relative to make the title appear in front of the absolutely positioned background */}
        <div className="3xl:w-[60vw] relative w-[95vw] md:w-[75vw]">
          <MainDiv />
        </div>
        <div className="3xl:w-[60vw] relative w-[95vw] md:w-[75vw]">
          <_PaneValue />
        </div>
      </div>

      <section className="3xl:w-[60vw] flex w-[95vw] flex-col items-center gap-y-28 md:w-[80vw]">
        {/* <div>
            <ScrollTriggered>
              <div>Test</div>
            </ScrollTriggered>
          </div> */}
        <Pane className="relative flex h-[75vh] w-full flex-col justify-center overflow-hidden ">
          <AutomationPane />
        </Pane>

        <Pane id="api-block" className="w-full scroll-mt-28">
          <ApiIntegrationShowcase />
        </Pane>

        <Pane id="visu-block" className="w-full scroll-mt-28">
          <PaneDataViz />
        </Pane>

        <div className="w-full">
          <ExcelProposition />
        </div>

        <TypewriterEffectSmoothDemo />
      </section>
    </main>
  )
}
