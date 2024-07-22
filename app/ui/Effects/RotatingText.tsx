'use client'
import React, { useEffect, useState } from 'react'
import WordRotate from '@/app/ui/Effects/word-rotate'

interface RotatingTextProps {
  firstWord: string
  words: string[]
  className?: string
}

const RotatingText: React.FC<RotatingTextProps> = ({ firstWord, words, className = '' }) => {
  const [isToggled, setIsToggled] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsToggled(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <h1 className={`pb-4 ${className}`}>
      <span>{firstWord}</span>
      <span className="relative ml-2 inline-block w-16 md:w-24">
        <WordRotate className="left-0 text-techPurple" words={words} animate={isToggled} />
      </span>
    </h1>
  )
}

export default RotatingText
