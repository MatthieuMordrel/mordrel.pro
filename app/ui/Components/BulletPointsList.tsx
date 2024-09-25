import { CheckMarkLucid } from '@/data/Icons'
import { cn } from '@/lib/utils'
import { FontTextPanes } from '../Fonts/FontTextPanes'

interface BulletPointsListtProps {
  items: string[]
  className?: string
}

export const BulletPointsList: React.FC<BulletPointsListtProps> = ({ items, className }) => {
  return (
    <FontTextPanes className={cn(className)}>
      <ul className={cn('p-2 ')}>
        {items.map((item, index) => (
          <li key={index} className="textSmall mb-2 flex items-center">
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
