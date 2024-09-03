'use client'
import 'animate.css/animate.min.css'
import { motion } from 'framer-motion'
import React, { useState } from 'react'

interface ToggleButtonsList {
  items: string[]
  onActiveIndexChange?: (index: number) => void
  className?: string
  buttonDisplay?: any[]
  classButton?: string
}

const childVariant = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 }
}

const ButtonsList: React.FC<ToggleButtonsList> = ({ items, onActiveIndexChange, className, buttonDisplay, classButton }) => {
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
        <motion.button
          variants={childVariant}
          type="button"
          key={item}
          className={`textSmall rounded-lg border-2 ${classButton} ${
            activeIndex === index ? 'border-techBlue text-techBlue' : 'border-borderGrey hover:bg-activeBorderGrey hover:text-techBlue'
          }`}
          onClick={() => handleClick(index)}
        >
          {buttonDisplay ? buttonDisplay[index] : item}
        </motion.button>
      ))}
    </div>
  )
}

export default ButtonsList
