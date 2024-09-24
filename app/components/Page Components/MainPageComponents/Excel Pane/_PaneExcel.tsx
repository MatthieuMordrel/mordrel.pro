import { cn } from '@/lib/utils'
import FadeInEffect from '@ui/Effects/AdvancedFadeIn'
import { TextHighlight } from '@ui/Fonts/TextHighlight'
import { HTMLAttributes } from 'react'
import ExcelContent from './Carousel Components/ExcelContent'
import PowerPivotContent from './Carousel Components/PowerPivot'
import PowerQueryContent from './Carousel Components/PowerQuery'
import ScriptContent from './Carousel Components/Scripts'
import VBAContent from './Carousel Components/VBAContent'
import ToggleComponent from './ToggleElement'

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

interface ExcelPropositionProps extends HTMLAttributes<HTMLElement> {}

const ExcelProposition = ({ className, ...props }: ExcelPropositionProps) => {
  return (
    <section className={cn('grid w-full grid-cols-1 justify-items-center gap-y-2 overflow-hidden border-blue-200 text-white', className)} {...props}>
      <TextHighlight className="titleResponsive w-full text-center">Maximize the power of Excel</TextHighlight>
      <FadeInEffect animationStyle="zoom" className="w-full">
        <p className="textSmall mb-2 whitespace-normal text-pretty text-center">
          We know Excel can stay an important part of any business. Get expert advices to ensure maximum productivity.
        </p>
        <ToggleComponent items={skills} />
      </FadeInEffect>
    </section>
  )
}

export default ExcelProposition
