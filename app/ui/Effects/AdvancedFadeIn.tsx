'use client'
import React, { ReactNode } from 'react'
import { motion, Variants, Easing } from 'framer-motion'

interface FadeInEffectProps {
  children: ReactNode
  duration?: number
  delay?: number
  easing?: Easing
  animationStyle?: 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'zoom' | 'bounce'
  customAnimation?: {
    initial: Record<string, number>
    animate: Record<string, number>
  }
  className?: string
}

const easings = {
  easeOutBack: [0.175, 0.885, 0.32, 1.275],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1]
}

const defaultAnimationVariants: Record<string, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  },
  fadeRight: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  },
  zoom: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  },
  bounce: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.5,
        duration: 0.8
      }
    }
  }
}

export const FadeInEffect: React.FC<FadeInEffectProps> = ({
  children,
  duration = 0.5,
  delay = 0.1,
  easing = easings.easeOutQuint,
  animationStyle = 'fadeUp',
  customAnimation,
  className
}) => {
  const variants = customAnimation
    ? {
        hidden: customAnimation.initial,
        visible: customAnimation.animate
      }
    : defaultAnimationVariants[animationStyle]

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
      transition={{ duration, delay, ease: easing, staggerChildren: 0.1 }}
      className={`${className}`}
      layout
    >
      {children}
    </motion.div>
  )
}

export default FadeInEffect
