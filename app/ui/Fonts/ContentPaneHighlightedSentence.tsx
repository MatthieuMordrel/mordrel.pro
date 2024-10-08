import { cn } from '@/lib/utils'
import { FontTextPanes } from './FontTextPanes'

interface HighlightedSentenceContentProps {
  HighlightedSentence: string
  MainContent: string
}

export const HighlightedSentenceContent: React.FC<HighlightedSentenceContentProps & { className?: string }> = ({
  HighlightedSentence,
  MainContent,
  className
}) => (
  <>
    <p className={cn('textSmall text-start', className)}>
      <span className="block font-extrabold text-techPurple">{HighlightedSentence} </span>
      <FontTextPanes className="">{MainContent}</FontTextPanes>
    </p>
  </>
)
