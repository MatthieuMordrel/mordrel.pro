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
    <p className={cn('textSmall text-textGrey', className)}>
      <span className="font-bold text-techPurple">{HighlightedSentence} </span>
      <FontTextPanes>{MainContent}</FontTextPanes>
    </p>
  </>
)
