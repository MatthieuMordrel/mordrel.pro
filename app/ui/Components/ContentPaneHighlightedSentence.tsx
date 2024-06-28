import { FontTextPanes } from '../Fonts/FontTextPanes'

interface HighlightedSentenceContentProps {
  HighlightedSentence: string
  MainContent: string
}

export const HighlightedSentenceContent: React.FC<
  HighlightedSentenceContentProps & { className?: string }
> = ({ HighlightedSentence, MainContent, className }) => (
  <>
    <p className={`text-textGrey ${className} text-[clamp(0.75rem,1vw+0.5rem,1.125rem)]`}>
      <span className="font-bold text-techPurple">{HighlightedSentence} </span>
      <FontTextPanes>{MainContent}</FontTextPanes>
    </p>
  </>
)
