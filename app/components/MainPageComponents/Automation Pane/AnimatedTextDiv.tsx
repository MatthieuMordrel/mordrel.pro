import GradualSpacing from '@/app/ui/Effects/GradualSpacing'
import { FontTextPanes } from '@/app/ui/Fonts/FontTextPanes'
import { HandCoins, Smile, Target } from 'lucide-react'
import CustomIcon from '@/app/ui/Components/LucideIcons'

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

export const AnimateTextDiv: React.FC<AnimateTextdivProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <div
      className={`flex flex-col overflow-hidden sm:flex-row md:flex md:flex-col md:gap-y-12 ${className}`}
      {...props}
    >
      {/* <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
>
      Test Framer motion
      </motion.div> */}
      <TitleAndText
        title="Simplify your life"
        delayMultiple={0.04}
        TextContentString="And the one of your employees by removing manual tasks from your workflow."
        icon={<CustomIcon icon={Smile} className="" />}
        className=""
      />
      <TitleAndText
        title="Scale your business"
        delayMultiple={0.08}
        TextContentString="By creating automated processes which will naturally scale with the growth of your company."
        icon={<CustomIcon icon={HandCoins} />}
        className=""
      />
      <TitleAndText
        title="Focus on what matters"
        delayMultiple={0.1}
        TextContentString="So you can continue bringing value to your customers without worrying about the necessary evil."
        icon={<CustomIcon icon={Target} />}
        className=""
      />
    </div>
  )
}

export const TitleAndText: React.FC<TitleAndTextProps> = ({
  className = '',
  children,
  title,
  TextContentString,
  delayMultiple,
  icon,
  ...props
}) => {
  return (
    <div
      className={`flex flex-col items-center gap-y-2 sm:items-start md:pl-8 ${className}`}
      {...props}
    >
      <div className="flex items-center gap-x-3 md:mb-2">
        {icon}
        <GradualSpacing
          text={title}
          delayMultiple={delayMultiple}
          className="text-xs font-bold sm:text-xs md:text-sm lg:text-base xl:text-lg"
        />
      </div>
      <FontTextPanes className="text-center text-xs sm:text-start sm:text-xs md:text-sm lg:text-base xl:text-lg">
        {TextContentString}
      </FontTextPanes>
    </div>
  )
}
