'use client'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '../../lib/utils'
import styles from './GradualSpacing.module.css'

interface GradualSpacingProps {
  text: string
  duration?: number
  delayMultiple?: number
  framerProps?: any // Adjust if you have specific types for variants
  className?: string
}

export default function GradualSpacing({
  text,
  duration = 0.5,
  delayMultiple = 0.04,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  },
  className
}: GradualSpacingProps) {
  return (
    <div className="tracking-[-0.0em] dark:text-white">
      <AnimatePresence>
        {text.split('').map((char, i) => (
          <motion.h1
            key={i}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={framerProps}
            transition={{ duration, delay: i * delayMultiple }}
            className={cn(styles['gradient-text'], 'drop-shadow-sm', className)}
            data-char={char === ' ' ? '\u00A0' : char} // Non-breaking space for spaces
          >
            {char === ' ' ? <span>&nbsp;</span> : char}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  )
}
