import { CheckMarkLucid } from '@/data/Icons'
import { cn } from '@/lib/utils'
import { FontTextPanes } from '../Fonts/FontTextPanes'

interface BulletPointsListtProps {
  items: string[]
  className?: string
}

export const BulletPointsList: React.FC<BulletPointsListtProps> = ({ items, className }) => {
  return (
    <FontTextPanes>
      <ul className={cn('mt-2', className)}>
        {items.map((item, index) => (
          <li key={index} className="mb-2 flex items-center text-[clamp(0.75rem,1.5vw,1rem)]">
            <span>
              <CheckMarkLucid />
            </span>
            <span className="ml-2">{item}</span>
          </li>
        ))}
      </ul>
    </FontTextPanes>
  )
}
