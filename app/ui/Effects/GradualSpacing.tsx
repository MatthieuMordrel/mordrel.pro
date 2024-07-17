'use client'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '../../lib/utils'
import styles from '@styles/GradualSpacing.module.css'

interface GradualSpacingProps extends React.HTMLAttributes<HTMLDivElement> {
  duration?: number
  delayMultiple?: number
  framerProps?: any // Adjust if you have specific types for variants
  className?: string
  defaultstyle?: boolean
  delay?: number
}

export default function GradualSpacing({
  children,
  duration = 0.5,
  delayMultiple = 0.01,
  defaultstyle = true,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  },
  delay = 0,
  className
}: GradualSpacingProps) {
  return (
    <div className="">
      <AnimatePresence>
        {typeof children === 'string'
          ? children?.split('').map((char, i) => (
              <motion.h1
                key={i}
                initial="hidden"
                exit="hidden"
                variants={framerProps}
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration, delay: delay + i * delayMultiple }}
                className={cn(defaultstyle && styles['gradient-text'], 'drop-shadow-sm', 'inline-block align-middle', className)}
                data-char={char === ' ' ? '\u00A0' : char} // Non-breaking space for spaces
              >
                {char === ' ' ? <span>&nbsp;</span> : char}
              </motion.h1>
            ))
          : null}
      </AnimatePresence>
    </div>
  )
}
