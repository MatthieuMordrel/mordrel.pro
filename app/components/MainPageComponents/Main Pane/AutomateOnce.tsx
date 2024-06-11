import React from 'react'
import WordRotate from '@/app/ui/Effects/word-rotate'

const RotatingTitle = ({ firstWord, words, className = '' }: { firstWord: string; words: string[]; className?: string }) => (
  <h1 className={`flex  justify-center  pb-4 text-6xl font-semibold ${className}`}>
    <div className="flex">
      <span>{firstWord}</span>
      <div className="relative ml-2 inline-block w-24">
        <WordRotate className=" left-0 text-techPurple" words={words} />
      </div>
    </div>
  </h1>
)

const AutomateOnce = ({ className = '' }: { className?: string }) => (
  <>
    <div className="flex max-w-[70vw] flex-col space-y-2 ">
      <RotatingTitle firstWord="AUTOMATE" words={['ONCE', 'TODAY']} className={`${className} -ml-36 self-center`} />
      <RotatingTitle firstWord="REUSE" words={['FOREVER', 'TOMORROW']} className={`${className} ml-36 self-center`} />
    </div>
  </>
)

export default AutomateOnce
