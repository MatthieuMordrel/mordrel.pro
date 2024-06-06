import { TextHighlight } from '@/app/ui/TextHighlight'
import { AnimateTextDiv } from '@/app/components/MainPageComponents/Automation Pane/AnimatedTextDiv'
import { GlobeDemo } from '@/app/components/MainPageComponents/Automation Pane/Globe'

const AutomationPane = () => {
  return (
    <>
      <div className="title-responsive flex h-[20%] w-full flex-col justify-center gap-y-2 text-center">
        <TextHighlight>Automate your processes</TextHighlight>
        <p className="text-balance text-lg tracking-tight text-white  md:text-xl">
          Ensure your business stay connect during all part of its processes.
        </p>
      </div>
      <div className="wrap flex h-[80%] flex-col md:flex-row">
        <AnimateTextDiv className="py-4" />
        <div className="h-full w-full md:w-1/2">
          <GlobeDemo />
        </div>
      </div>
    </>
  )
}

export default AutomationPane
