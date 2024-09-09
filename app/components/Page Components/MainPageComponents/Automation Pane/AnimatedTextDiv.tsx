import CustomIcon from '@ui/Components/LucideIcons'
import GradualSpacing from '@ui/Effects/GradualSpacing'
import { FontTextPanes } from '@ui/Fonts/FontTextPanes'
import { HandCoins, Smile, Target } from 'lucide-react'

interface AnimateTextdivProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}
interface TitleAndTextProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  title: string
  TextContentString: string
  delayMultiple: number
  icon: React.ReactNode // Change here
}

export const AnimateTextDiv: React.FC<AnimateTextdivProps> = ({ className = '', children, ...props }) => {
  return (
    <section className={`flex flex-col gap-x-2 overflow-hidden sm:flex-row md:flex md:flex-col md:gap-y-12 ${className}`} {...props}>
      <TitleAndText
        title="Simplify your life"
        delayMultiple={0.04}
        TextContentString="And the one of your employees by removing manual tasks from your workflow."
        icon={<CustomIcon icon={Smile} className="" />}
        className=""
      />
      <TitleAndText
        title="Scale your business"
        delayMultiple={0.04}
        TextContentString="By creating automated processes which will naturally scale with the growth of your company."
        icon={<CustomIcon icon={HandCoins} />}
        className=""
      />
      <TitleAndText
        title="Focus on what matters"
        delayMultiple={0.04}
        TextContentString="So you can continue bringing value to your customers without worrying about the necessary evil."
        icon={<CustomIcon icon={Target} />}
        className=""
      />
    </section>
  )
}

export const TitleAndText: React.FC<TitleAndTextProps> = ({ className = '', children, title, TextContentString, delayMultiple, icon, ...props }) => {
  return (
    <article className={`flex flex-col items-center gap-y-2 sm:items-start md:pl-8 ${className}`} {...props}>
      <header className="flex items-center gap-x-3 md:mb-2">
        {icon}
        <GradualSpacing delayMultiple={delayMultiple} className="text-xs font-bold sm:text-xs md:text-sm lg:text-base xl:text-lg">
          {title}
        </GradualSpacing>
      </header>
      <FontTextPanes className="text-center text-xs sm:text-start sm:text-xs md:text-sm lg:text-base xl:text-lg">{TextContentString}</FontTextPanes>
    </article>
  )
}
