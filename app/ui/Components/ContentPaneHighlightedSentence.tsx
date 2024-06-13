import { FontTextPanes } from '../Fonts/FontTextPanes'

interface HighlightedSentenceContentProps {
  HighlightedSentence: string
  MainContent: string
}

export const HighlightedSentenceContent: React.FC<
  HighlightedSentenceContentProps & { className?: string }
> = ({ HighlightedSentence, MainContent, className }) => (
  <>
    <p className={`text-base text-textGrey md:text-xl ${className}`}>
      <span className="font-extrabold text-techPurple">{HighlightedSentence} </span>
      <FontTextPanes>{MainContent}</FontTextPanes>
    </p>
  </>
)
