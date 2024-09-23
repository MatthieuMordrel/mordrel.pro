'use client'

import { motion } from 'framer-motion'

interface SparkProps {
  style: React.CSSProperties
}

export const Spark: React.FC<SparkProps> = ({ style }) => (
  <motion.div
    className="absolute h-1 w-1 rounded-full bg-white"
    style={style}
    animate={{
      scale: [1, 1.5, 0],
      opacity: [1, 1, 0]
    }}
    transition={{
      duration: 0.5,
      ease: 'easeOut',
      times: [0, 0.2, 1],
      repeat: Infinity,
      repeatDelay: 1
    }}
  />
)
