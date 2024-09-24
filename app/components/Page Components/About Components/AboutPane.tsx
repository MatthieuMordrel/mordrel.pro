import { cn } from '@/lib/utils'

// AboutComponent.jsx or AboutComponent.tsx if you are using TypeScript
const AboutPane: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <p className={cn(className, 'leading-9')}>
      We are delighted to introduce you to our consulting company enabling growing businesses to
      <span className="text-techBlue"> become more competitive faster and more efficiently.</span>
      <br />
    </p>
  )
}

export default AboutPane
