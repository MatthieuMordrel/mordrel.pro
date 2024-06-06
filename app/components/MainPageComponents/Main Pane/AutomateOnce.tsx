import React from 'react'
import WordRotate from '@ui/word-rotate'

const RotatingTitle = ({ firstWord, words, className = '' }: { firstWord: string; words: string[]; className?: string }) => (
  <h1 className={`flex w-full justify-center pb-4 text-6xl font-semibold ${className}`}>
    <div className="flex w-[30%]">
      <span>{firstWord}</span>
      <div className="relative ml-2 inline-block w-24">
        <WordRotate className="absolute left-0 text-techPurple" words={words} />
      </div>
    </div>
  </h1>
)

const AutomateOnce = ({ className = '' }: { className?: string }) => (
  <>
    <div className="space-y-2">
      <RotatingTitle firstWord="AUTOMATE" words={['ONCE', 'TODAY']} className={`${className}`} />
      <RotatingTitle firstWord="REUSE" words={['FOREVER', 'TOMORROW']} className={`${className}`} />
    </div>
  </>
)

export default AutomateOnce
