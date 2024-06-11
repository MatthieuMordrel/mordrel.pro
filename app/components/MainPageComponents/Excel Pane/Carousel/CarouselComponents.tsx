import { FontTextPanes } from '@/app/ui/Fonts/FontTextPanes'
import { Pane } from '@/app/ui/Effects/Pane'
import { Check } from 'lucide-react'
import Image from 'next/image'

interface BestPracticesListProps {
  items: string[]
}

//Export list in Carousel
export const BestPracticesList: React.FC<BestPracticesListProps> = ({ items }) => {
  return (
    <ul className="mt-2 flex flex-1 flex-col">
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
export const CarouselComponent: React.FC<CarouselComponentProps> = ({ title, description, items, imageSrc, imageAlt }) => {
  return (
    <div className="flex h-full gap-x-4">
      <div className="relative flex-1">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-xl object-cover p-1"
        />
      </div>
      <div className="flex h-full max-w-[30%] flex-initial flex-col items-center justify-between gap-y-6">
        <TopDiv title={title} description={description} />
        <Pane includeBorderBeam={false} className="flex h-[50%] w-full flex-col p-6">
          <h2 className="mb-4 text-center text-xl font-bold">Let us help ! </h2>
          <BestPracticesList items={items}></BestPracticesList>
        </Pane>
      </div>
    </div>
  )
}
