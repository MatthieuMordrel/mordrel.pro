'use client'
import React, { ReactElement, useState } from 'react'
import 'animate.css/animate.min.css'
import { Icon } from 'next/dist/lib/metadata/types/metadata-types'

interface ToggleButtonsList {
  items: string[]
  onActiveIndexChange?: (index: number) => void
  className?: string
  buttonDisplay?: any
  classButton?: string
}

const ButtonsList: React.FC<ToggleButtonsList> = ({
  items,
  onActiveIndexChange,
  className,
  buttonDisplay,
  classButton
}) => {
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
    <div className={`relative ${className}`}>
      {items.map((item, index) => (
        <button
          type="button"
          key={item}
          className={`rounded-lg border-2 px-4 py-2 text-sm font-medium ${classButton} ${
            activeIndex === index
              ? 'border-techBlue bg-paneGrey text-techBlue'
              : 'border-borderGrey text-white hover:bg-activeBorderGrey hover:text-techBlue'
          }`}
          onClick={() => handleClick(index)}
        >
          {buttonDisplay ? buttonDisplay[index] : item}
        </button>
      ))}
    </div>
  )
}

export default ButtonsList
