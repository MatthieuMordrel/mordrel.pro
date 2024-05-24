import MainVideo from './ui/MainVideo'
import MainDiv from './components/MainPageComponents/Main Pane/MainDiv'
import StyledWrapper from './ui/StyledWrapper'
import ApiIntegrationShowcase from './components/MainPageComponents/API Pane/_PaneAPI'
import _PaneValue from './components/MainPageComponents/Main Pane/_PaneValue'
import PaneDataViz from './components/MainPageComponents/Data VIz Pane/_PaneDataViz'
import ExcelProposition from './components/MainPageComponents/Excel Pane/_PaneExcel'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-techGrey pb-6">
      <div className="mt-8">
        <MainVideo src="/PurpleVideo.mp4" />
      </div>
      <div className="z-10 flex flex-col items-center">
        <div className="min-h-screen">
          <div className="w-[95vw] md:w-[75vw] 3xl:w-[60vw]">
            <MainDiv />
          </div>
          <div className="w-[95vw] md:w-[75vw] 3xl:w-[60vw]">
            <_PaneValue />
          </div>
        </div>

        <div className="flex w-[95vw] flex-col items-center gap-y-28 md:w-[80vw] 3xl:w-[60vw]">
          <div id="visu-block" className="w-full scroll-mt-28">
            <PaneDataViz />
          </div>

          <div className="">
            <div id="api-block" className="w-full scroll-mt-28">
              <ApiIntegrationShowcase />
            </div>
          </div>

          <div className="w-full">
            <ExcelProposition />
          </div>
        </div>
      </div>
    </main>
  )
}
