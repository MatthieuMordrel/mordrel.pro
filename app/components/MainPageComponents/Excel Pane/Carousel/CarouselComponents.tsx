import { FontTextPanes } from '@/app/ui/Fonts/FontTextPanes'
import { Pane } from '@/app/ui/Effects/Pane'
import { Check } from 'lucide-react'
import Image from 'next/image'
import { BulletPointsList } from '@/app/ui/Components/BulletPointsList'

//Export icons for list
export const CheckMarkLucid = () => (
  <>
    <Check strokeWidth={1} size={19} />
  </>
)

interface TopDivProps {
  title: string
  description: string
}

//Export the TopDiv in the carousel component
export const TopDiv: React.FC<TopDivProps> = ({ title, description }) => {
  return (
    <div className="h-1/4 w-full px-6">
      <h2 className="mb-4 text-xl font-bold">{title}</h2>
      <FontTextPanes className="font-bold">{description}</FontTextPanes>
    </div>
  )
}

interface CarouselComponentProps {
  title: string
  description: string
  items: string[]
  imageSrc: string
  imageAlt: string
}

//export the full carouselcomponent for each skill
export const CarouselComponent: React.FC<CarouselComponentProps> = ({
  title,
  description,
  items,
  imageSrc,
  imageAlt
}) => {
  return (
    <div className="flex h-full gap-x-4">
      <div className="relative flex-1">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill={true}
          sizes="100vw"
          className="rounded-xl object-cover p-1"
          quality={100}
        />
      </div>
      <div className="flex h-full max-w-[30%] flex-initial flex-col items-center justify-between gap-y-6">
        <TopDiv title={title} description={description} />
        <Pane includeBorderBeam={false} className="flex h-[50%] w-full flex-col p-6">
          <h2 className="mb-4 text-center text-xl font-bold">Let us help ! </h2>
          <BulletPointsList items={items} />
        </Pane>
      </div>
    </div>
  )
}
