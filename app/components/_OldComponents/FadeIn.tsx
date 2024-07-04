'use client'
import { motion, useInView } from 'framer-motion'
import { ReactElement, ReactNode, useRef } from 'react'

interface AnimatedComponentProps {
  children: ReactNode
}

export const AnimatedComponent = ({ children }: { children: ReactNode }): ReactElement => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    {children}
  </motion.div>
)

export function MyComponent({ children }: AnimatedComponentProps) {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 2 }} // Increased duration
    >
      {children}
    </motion.div>
  )
}
