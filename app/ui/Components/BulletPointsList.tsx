import { CheckMarkLucid } from '@/app/data/Icons'
import { FontTextPanes } from '../Fonts/FontTextPanes'

interface BulletPointsListtProps {
  items: string[]
  className?: string
}

export const BulletPointsList: React.FC<BulletPointsListtProps> = ({ items, className }) => {
  return (
    <ul className={`mt-2 ${className}`}>
      <FontTextPanes>
        {items.map((item, index) => (
          <li key={index} className="mb-2 flex items-center">
            <span>
              <CheckMarkLucid />
            </span>
            <span className="ml-2">{item}</span>
          </li>
        ))}
      </FontTextPanes>
    </ul>
  )
}
