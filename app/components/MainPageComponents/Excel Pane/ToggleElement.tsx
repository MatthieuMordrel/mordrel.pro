'use client'
import React, { useState, useEffect } from 'react'
import 'animate.css/animate.min.css'

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
      <div className="mt-6 flex space-x-2">
        {items.map((item, index) => (
          <button
            type="button"
            key={item.title}
            className={`rounded-lg border-2 px-4 py-2 text-sm font-medium hover:bg-activeBorderGrey hover:text-techBlue ${activeIndex === index ? 'border-techBlue bg-paneGrey text-techBlue' : 'border-borderGrey text-white'}`}
            onClick={() => setActiveIndex(index)}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="mt-3 h-full w-full rounded-lg border-gray-500">
        <div key={activeIndex} className="animate__animated animate__fadeInRight animate__faster p-3">
          <div className="relative h-[60vh]">{items[activeIndex].component}</div>
        </div>
      </div>
    </>
  )
}

export default ToggleComponent
