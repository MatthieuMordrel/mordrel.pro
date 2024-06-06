import GradualSpacing from '@/app/ui/GradualSpacing'
import { motion } from 'framer-motion'
import { FontTextPanes } from '@/app/ui/FontTextPanes'
import { BatteryCharging, Armchair, HandCoins, Smile, Target } from 'lucide-react'
import CustomIcon from '@/app/ui/LucideIcons'

interface AnimateTextdivProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export const AnimateTextDiv: React.FC<AnimateTextdivProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={`flex w-1/2 max-w-full flex-col justify-center gap-y-16 overflow-hidden ${className}`} {...props}>
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
        icon={<CustomIcon icon={Smile} />}
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
        title="Focus on what truly matters"
        delayMultiple={0.1}
        TextContentString="So you can continue bringing value to your customers without worrying about the necessary evil."
        icon={<CustomIcon icon={Target} />}
        className=""
      />
    </div>
  )
}

interface TitleAndTextProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  title: string
  TextContentString: string
  delayMultiple: number
  icon: React.ReactNode // Change here
}

export const TitleAndText: React.FC<TitleAndTextProps> = ({ className = '', children, title, TextContentString, delayMultiple, icon, ...props }) => {
  return (
    <div className={`flex flex-col items-start pl-8 ${className}`} {...props}>
      <div className="mb-2 flex items-center gap-x-3">
        {icon}
        <GradualSpacing text={title} delayMultiple={delayMultiple} className="text-xs font-bold sm:text-sm md:text-base lg:text-lg xl:text-3xl" />
      </div>
      <FontTextPanes className="">{TextContentString}</FontTextPanes>
    </div>
  )
}
