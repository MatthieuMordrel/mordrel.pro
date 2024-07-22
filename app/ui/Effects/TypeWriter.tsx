'use client'

import { cn } from '@lib/utils'
import { motion } from 'framer-motion'

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName
}: {
  words: {
    text: string
    className?: string
  }[]
  className?: string
  cursorClassName?: string
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split('') //Returns an array of objects with each word's character split into an array
    }
  })
  const renderWords = () => {
    //This function returns a div for each word with each charachter wrapped in a span element with appropriate class names
    return (
      <div>
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <span key={`char-${index}`} className={cn(``, word.className)}>
                  {char}
                </span>
              ))}
              &nbsp;
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className={cn('my-6 flex space-x-1', className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{
          width: '0%' //The initial width of the div is set to 0%. This means the div starts off as not visible.
        }}
        whileInView={{
          width: 'fit-content' //When the div comes into view, its width changes to fit the content inside it. This makes the div expand to show its content.
        }}
        transition={{
          duration: 2,
          ease: 'linear', //The animation will progress at a constant speed.
          delay: 1
        }}
      >
        <div
          className="lg:text:3xl text-xs font-bold sm:text-base md:text-xl xl:text-5xl"
          style={{
            whiteSpace: 'nowrap'
          }}
        >
          {renderWords()} {/*Contains the words rendered by the renderWords() function*/}
        </div>{' '}
      </motion.div>
      <motion.span
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          duration: 0.8,

          repeat: Infinity,
          repeatType: 'reverse'
        }}
        className={cn('block h-4 w-[4px] rounded-sm bg-techPurple sm:h-6 xl:h-12', cursorClassName)}
      ></motion.span>
    </div>
  )
}
