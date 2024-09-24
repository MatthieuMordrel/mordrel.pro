'use client'
import { cn } from '@lib/utils'
import { AnimatePresence, HTMLMotionProps, motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface WordRotateProps {
  words: string[]
  duration?: number
  framerProps?: HTMLMotionProps<'div'>
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

    return () => clearInterval(interval)
  }, [words, duration, animate, keep, completed, isInView])

  const currentWords = words[index].split(' ')

  return (
    <AnimatePresence mode="wait">
      <motion.div ref={ref} key={words[index]} className={cn(className, 'flex space-x-2')} {...(animate ? framerProps : {})}>
        {currentWords.map((word, i) => (
          <span key={i}>{word}</span>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
