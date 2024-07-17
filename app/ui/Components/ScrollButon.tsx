'use client'
import { ArrowDownWideNarrow } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface ScrollButtonProps {
  customOffset?: number
  id: string
  delay?: number
}

import { useEffect, useState } from 'react'

export const ScrollButton: React.FC<ScrollButtonProps> = ({ id, customOffset = 0, delay = 0 }) => {
  const [isBouncing, setIsBouncing] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBouncing(true)
      setTimeout(() => {
        setIsBouncing(false)
      }, 1000)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Link
      href={'#TestID'}
      onClick={(e) => {
        e.preventDefault()
        const element = document.getElementById(id)
        if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.scrollY
          const offsetPosition = elementPosition - customOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }}
      className={`${isBouncing ? 'animate-bounce1' : ''} font-inter inline-flex flex-row gap-2 hover:text-techBlue`}
    >
      <ArrowDownWideNarrow />{' '}
      <motion.span whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 300, damping: 10 }}>
        Click to continue...
      </motion.span>
    </Link>
  )
}
