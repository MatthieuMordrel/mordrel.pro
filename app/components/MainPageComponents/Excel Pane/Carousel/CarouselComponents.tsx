import { FontTextPanes } from '@/app/ui/Fonts/FontTextPanes'
import { Pane } from '@/app/ui/Effects/Pane'
import { Check } from 'lucide-react'
import Image from 'next/image'
import { BulletPointsList } from '@/app/ui/Components/BulletPointsList'

interface TopDivProps {
  title: string
  description: string
}

interface CarouselComponentProps {
  title: string
  description: string
  items: string[]
  imageSrc: string
  imageAlt: string
}

//Export the TopDiv in the carousel component
export const TopDiv: React.FC<TopDivProps & React.HTMLAttributes<HTMLDivElement>> = ({ title, description, ...props }) => {
  return (
    <div className="w-full" {...props}>
      <h2 className="mb-4 text-xl font-bold">{title}</h2>
      <FontTextPanes className="font-bold">{description}</FontTextPanes>
    </div>
  )
}

//export the full carouselcomponent for each skill
export const CarouselComponent: React.FC<CarouselComponentProps> = ({ title, description, items, imageSrc, imageAlt }) => {
  return (
    <div className="grid h-full w-full grid-rows-[auto_1fr_auto] gap-4 md:grid-cols-[1fr_1fr] md:grid-rows-2 xl:grid-cols-[2fr_1fr]">
      <TopDiv title={title} description={description} className="md:col-start-2 md:px-[clamp(0rem,1vw,1.25rem)]" />
      <div className="relative md:row-span-2 md:row-start-1">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill={true}
          className="rounded-xl object-cover object-[top_center]"
          quality={100}
          priority={true} // Added priority property
        />
      </div>
      <Pane
        includeBorderBeam={false}
        className="row-span-2 flex h-auto w-full flex-col justify-around p-[clamp(0.25rem,1.5vw,1.25rem)] md:row-span-1"
      >
        <h2 className="text-center text-xl font-bold">Let us help ! </h2>
        <BulletPointsList items={items} />
      </Pane>
    </div>
  )
}
