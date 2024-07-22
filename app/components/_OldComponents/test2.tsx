'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ClickAnimatedComponent() {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  return (
    <motion.div
      onClick={handleClick}
      animate={{ scale: isClicked ? 1.5 : 1 }}
      transition={{ duration: 0.5 }}
      style={{ cursor: 'pointer', display: 'inline-block' }}
    >
      Click me to animate!
    </motion.div>
  )
}
