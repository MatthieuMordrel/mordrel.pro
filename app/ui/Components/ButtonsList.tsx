'use client'
import React, { useState } from 'react'
import 'animate.css/animate.min.css'

interface ToggleButtonsList {
  items: string[]
  onActiveIndexChange?: (index: number) => void
  className?: string
}

const ButtonsList: React.FC<ToggleButtonsList> = ({ items, onActiveIndexChange, className }) => {
  if (items.length === 0) {
    throw new Error('Items array must not be empty')
  }

  const [activeIndex, setActiveIndex] = useState(0)

  const handleClick = (index: number) => {
    setActiveIndex(index)
    if (onActiveIndexChange) {
      onActiveIndexChange(index)
    }
  }

  return (
    <div className={`${className}`}>
      {items.map((item, index) => (
        <button
          type="button"
          key={item}
          className={`rounded-lg border-2 px-4 py-2 text-sm font-medium ${
            activeIndex === index
              ? 'border-techBlue bg-paneGrey text-techBlue'
              : 'border-borderGrey text-white hover:bg-activeBorderGrey hover:text-techBlue'
          }`}
          onClick={() => handleClick(index)}
        >
          {item}
        </button>
      ))}
    </div>
  )
}

export default ButtonsList
