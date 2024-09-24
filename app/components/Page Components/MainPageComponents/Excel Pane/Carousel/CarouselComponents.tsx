import { BulletPointsList } from '@ui/Components/BulletPointsList'
import { Pane } from '@ui/Effects/Pane'
import { FontTextPanes } from '@ui/Fonts/FontTextPanes'
import Image from 'next/image'

// Merged props interface
interface CarouselComponentProps {
  title: string
  description: string
  items: string[]
  imageSrc: string
  imageAlt: string
}

// Merged and simplified CarouselComponent
export const CarouselComponent: React.FC<CarouselComponentProps> = ({ title, description, items, imageSrc, imageAlt }) => {
  return (
    <div className="grid w-full grid-rows-[auto_1fr_auto] gap-4 md:grid-cols-[1fr_1fr] md:grid-rows-[1fr_auto] xl:grid-cols-[2fr_1fr]">
      {/* Top Div */}
      <div className="w-full md:col-start-2 md:px-[clamp(0rem,1vw,1.25rem)]">
        <h2 className="mb-4 text-xl font-bold">{title}</h2>
        <FontTextPanes>{description}</FontTextPanes>
      </div>

      {/* Image */}
      <div className="relative min-h-[200px] min-w-[200px] md:row-span-2 md:row-start-1">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill={true}
          className="rounded-xl object-cover object-[top_center]"
          quality={100}
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>

      {/* Bottom Div */}
      <Pane
        includeBorderBeam={false}
        className="row-span-2 flex w-full flex-col justify-around overflow-auto p-[clamp(0.25rem,1.5vw,1.25rem)] md:row-span-1"
      >
        <h2 className="text-center text-xl font-bold">Let us help!</h2>
        <BulletPointsList items={items} className="" />
      </Pane>
    </div>
  )
}
