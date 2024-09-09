'use client'
import ButtonsList from '@ui/Components/ButtonsList'
import useEmblaCarousel from 'embla-carousel-react'
import React, { useCallback, useEffect, useState } from 'react'

interface ToggleComponentProps {
  items: { title: string; component: React.ReactNode }[]
}

const ToggleComponent: React.FC<ToggleComponentProps> = ({ items }) => {
  if (items.length === 0) {
    throw new Error('Items array must not be empty')
  }

  const [activeIndex, setActiveIndex] = useState(0)
  // Initialize Embla Carousel
  // The emblaApi object contains a lot of methods and properties to control the carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    watchDrag: false // Change this line to disable dragging completely
  })

  // Callback to update activeIndex when carousel slides
  const onSelect = useCallback(() => {
    if (!emblaApi) return
    //emblaApi.selectedScrollSnap() get the index of the currently selected slide.
    //It then updates the activeIndex state with this value using setActiveIndex.
    setActiveIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  //The useEffect hook is used to set up the event listener for the carousel slide changes
  //It also set the activeIndex state on mount and when the select event is triggered
  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    // Clean up event listener on component unmount
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  // Function to programmatically scroll the carousel
  // Passing it to a callback avoid the buttons to be rerender when and if the ToggleComponent is rerendered and recreate the function
  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  return (
    <>
      {/* The buttons below control the state of the carousel */}
      <ButtonsList
        classButton="p-[clamp(0.25rem,1vw,0.75rem)] "
        onActiveIndexChange={(index) => {
          setActiveIndex(index)
          scrollTo(index)
        }}
        items={items.map((item) => item.title)}
        className="flex justify-center gap-x-1 sm:gap-x-2 md:gap-x-4"
      />
      <div className="mt-3 h-full w-full overflow-hidden rounded-lg border-gray-500" ref={emblaRef}>
        <div className="flex">
          {items.map((item, index) => (
            <div key={index} className="min-w-0 flex-[0_0_100%] p-3">
              <div className="relative h-[60vh]">{item.component}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ToggleComponent
