'use client'
import { TextHighlight } from '@ui/Fonts/TextHighlight'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { AnimateTextDiv } from './AnimatedTextDiv'
import { GlobeDemo } from './Globe'

const AutomationPane = () => {
  const [showGlobe, setShowGlobe] = useState(false)
  const isMdScreen = useMediaQuery({ minWidth: 768 })

  useEffect(() => {
    setShowGlobe(isMdScreen)
  }, [isMdScreen])

  return (
    <>
      <section className="grid h-full flex-1 grid-cols-1 grid-rows-[auto_1fr] gap-y-2 p-4 md:grid-cols-2 md:grid-rows-[auto_1fr]">
        <header className="col-span-full row-span-1 flex h-auto w-full flex-col justify-center gap-y-2 text-center">
          <TextHighlight className="titleResponsive">Automate your processes</TextHighlight>
          <p className="hidden text-balance text-base tracking-tight sm:block sm:text-lg md:text-xl">
            Ensure your business stays connected during all parts of its processes.
          </p>
        </header>

        <AnimateTextDiv className="col-span-1 row-start-2 w-full self-center pt-4 md:items-start md:py-4" />

        <div className="col-span-1 row-span-1 row-start-3 hidden md:col-start-2 md:row-start-2 md:block">{showGlobe && <GlobeDemo />}</div>
      </section>
    </>
  )
}

export default AutomationPane
