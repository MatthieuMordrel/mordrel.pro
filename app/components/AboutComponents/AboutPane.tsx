import GradualSpacing from '@/app/ui/Effects/GradualSpacing'
import RotatingText from '@/app/ui/Effects/RotatingText'
import WordRotate from '@/app/ui/Effects/word-rotate'
import styles from '@styles/test.module.css'
import { ArrowDownWideNarrow } from 'lucide-react'

// AboutComponent.jsx or AboutComponent.tsx if you are using TypeScript
const AboutPane: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <p className={` ${className}`}>
      I&apos;m a french<span className="text-techBlue"> independent freelancer</span> in Belgium,
      <br />
      with a passion in many technologies.
    </p>
  )
}

export default AboutPane
