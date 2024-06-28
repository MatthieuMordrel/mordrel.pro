import React from 'react'
import WordRotate from '@/app/ui/Effects/word-rotate'

const RotatingText = ({
  firstWord,
  words,
  className = ''
}: {
  firstWord: string
  words: string[]
  className?: string
}) => (
  <h1 className={`pb-4 ${className}`}>
    <span>{firstWord}</span>
    <span className="relative ml-2 inline-block w-16 md:w-24">
      <WordRotate className="left-0 text-techPurple" words={words} />
    </span>
  </h1>
)

export default RotatingText
