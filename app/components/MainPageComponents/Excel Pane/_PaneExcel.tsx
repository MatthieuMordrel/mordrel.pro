import ExcelContent from './Carousel/ExcelContent'
import 'animate.css/animate.min.css'
import { TextHighlight } from '@/app/ui/Fonts/TextHighlight'
import ToggleComponent from './ToggleElement'
import VBAContent from './Carousel/VBAContent'
import ScriptContent from './Carousel/Scripts'
import PowerPivotContent from './Carousel/PowerPivot'
import PowerQueryContent from './Carousel/PowerQuery'

const skills = [
  {
    title: 'Advanced Formulas',
    component: <ExcelContent />
  },
  {
    title: 'VBA',
    component: <VBAContent />
  },
  {
    title: 'Automated Scripts',
    component: <ScriptContent />
  },
  {
    title: 'Power Query',
    component: <PowerQueryContent />
  },
  {
    title: 'Power Pivot',
    component: <PowerPivotContent />
  }
]

const ExcelProposition = () => {
  return (
    <>
      <div className="flex w-[80vw] flex-col items-center gap-y-2 overflow-hidden border-blue-200 pb-20 text-white">
        <TextHighlight className="title-responsive">Maximize the power of Excel</TextHighlight>
        <p>
          We know Excel can stay an important part of any business, ensure you are maximizing its power and minimizing the trouble of your employees
        </p>
        <ToggleComponent items={skills} />
      </div>
    </>
  )
}

export default ExcelProposition
