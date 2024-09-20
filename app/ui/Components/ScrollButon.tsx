'use client'
import { motion } from 'framer-motion'
import { ArrowDownWideNarrow } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface ScrollButtonProps {
  customOffset?: number
  id: string
  delay?: number
  mobileOffset?: number
  text?: string // New prop for custom text
}

export const ScrollButton: React.FC<ScrollButtonProps> = ({
  id,
  customOffset = 0,
  delay = 0,
  mobileOffset = 0,
  text = 'Click to continue...' // Default text
}) => {
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
      href={`#${id}`} // Fixed: Use the provided id
      onClick={(e) => {
        e.preventDefault()
        const element = document.getElementById(id)
        if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.scrollY
          const offsetPosition = elementPosition - (window.innerWidth < 768 ? mobileOffset : customOffset)

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
        {text}
      </motion.span>
    </Link>
  )
}
