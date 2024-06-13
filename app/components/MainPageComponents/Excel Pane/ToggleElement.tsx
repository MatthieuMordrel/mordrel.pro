'use client'
import React, { useState, useEffect } from 'react'
import 'animate.css/animate.min.css'
import ButtonsList from '@/app/ui/Components/ButtonsList'

interface ToggleComponentProps {
  items: { title: string; component: React.ReactNode }[]
}

const ToggleComponent: React.FC<ToggleComponentProps> = ({ items }) => {
  if (items.length === 0) {
    throw new Error('Items array must not be empty')
  }

  const [activeIndex, setActiveIndex] = useState(0)

  //Instead of using a useEffect hook to update the animation class, we update only the index and as the props update it automatically rerenders.
  return (
    <>
      <ButtonsList
        onActiveIndexChange={setActiveIndex}
        items={items.map((item) => item.title)}
        className="mt-2 flex gap-x-2"
      />
      <div className="mt-3 h-full w-full rounded-lg border-gray-500">
        <div
          key={activeIndex}
          className="animate__animated animate__fadeInRight animate__faster p-3"
        >
          <div className="relative h-[60vh]">{items[activeIndex].component}</div>
        </div>
      </div>
    </>
  )
}

export default ToggleComponent
