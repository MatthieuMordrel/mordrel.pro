import { CheckMarkLucid } from '@/app/components/MainPageComponents/Excel Pane/Carousel/CarouselComponents'
import { FontTextPanes } from '../Fonts/FontTextPanes'

interface BulletPointsListtProps {
  items: string[]
  className?: string
}

//Export list in Carousel
export const BulletPointsList: React.FC<BulletPointsListtProps> = ({ items, className }) => {
  return (
    <ul className={`mt-2 flex flex-col ${className}`}>
      <FontTextPanes className="flex flex-1 flex-col gap-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-x-2">
            <CheckMarkLucid />
            {item}
          </li>
        ))}
      </FontTextPanes>
    </ul>
  )
}
