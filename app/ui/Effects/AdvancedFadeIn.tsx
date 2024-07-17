'use client'
import React, { ReactNode } from 'react'
import { motion, Variants, Easing, MotionProps } from 'framer-motion'

interface FadeInEffectProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  duration?: number
  delay?: number
  easing?: Easing
  animationStyle?: 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'zoom' | 'bounce' | 'fade'
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
    hidden: { opacity: 0, transform: 'translateY(20px)' },
    visible: { opacity: 1, transform: 'translateY(0)' }
  },
  fadeDown: {
    hidden: { opacity: 0, transform: 'translateY(-20px)' },
    visible: { opacity: 1, transform: 'translateY(0)' }
  },
  fadeLeft: {
    hidden: { opacity: 0, transform: 'translateX(-20px)' },
    visible: { opacity: 1, transform: 'translateX(0)' }
  },
  fadeRight: {
    hidden: { opacity: 0, transform: 'translateX(20px)' },
    visible: { opacity: 1, transform: 'translateX(0)' }
  },
  zoom: {
    hidden: { opacity: 0, transform: 'scale(0.9)' },
    visible: { opacity: 1, transform: 'scale(1)' }
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
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
  duration = 0.8,
  delay = 0.1,
  easing = easings.easeOutQuint,
  animationStyle = 'fadeUp',
  customAnimation,
  className = '',
  ...props
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
      className={`fadeInDiv ${className}`}
      layout
      {...(props as MotionProps)}
    >
      {children}
    </motion.div>
  )
}

export default FadeInEffect
