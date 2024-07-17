'use client'
import React, { useState, useEffect, useRef } from 'react'
import { cn } from '@lib/utils'
import { AnimatePresence, HTMLMotionProps, motion, useInView } from 'framer-motion'

interface WordRotateProps {
  words: string[]
  duration?: number
  framerProps?: HTMLMotionProps<'p'>
  className?: string
  animate?: boolean
  keep?: boolean
}

export default function WordRotate({
  words,
  duration = 2500,
  framerProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: 'easeOut' }
  },
  className,
  keep = false,
  animate = true
}: WordRotateProps) {
  const [index, setIndex] = useState(0)
  const [completed, setCompleted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // useEffect(() => {
  //   console.log(isInView)
  // }, [isInView])

  useEffect(() => {
    if (!animate || (completed && keep) || !isInView) return

    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % words.length
        if (newIndex === 0 && keep) {
          setCompleted(true)
          clearInterval(interval)
          return words.length - 1 // Keep the last word
        }
        return newIndex
      })
    }, duration)

    // Clean up interval on unmount or when animation should stop
    return () => clearInterval(interval)
  }, [words, duration, animate, keep, completed, isInView])

  return (
    <AnimatePresence mode="wait">
      <motion.p ref={ref} key={words[index]} className={cn(className)} {...(animate ? framerProps : {})}>
        {words[index]}
      </motion.p>
    </AnimatePresence>
  )
}
