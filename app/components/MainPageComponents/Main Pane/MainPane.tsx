// components/MainDiv.js
import React from 'react'
import RotatingText from '@ui/Effects/RotatingText'

const MainPane = ({ className }: { className?: string }) => {
  return (
    <div className="flex min-h-60 flex-col space-y-10 p-10 text-center">
      <div className="flex max-w-[90vw] flex-col space-y-2 md:max-w-[70vw]">
        <AutomateOnce className="-ml-10 self-center text-2xl font-semibold sm:text-4xl lg:text-6xl" />
      </div>
      <p className="space-y-2 font-semibold text-white">
        <span className="block">
          Streamline your workflows, make data-driven decisions, and elevate your business
        </span>
        <span className="block">
          Do not get behind, book today a starting session and we&apos;ll analyse all the potential
          for automating your work.
        </span>
      </p>
    </div>
  )
}

export default MainPane

const AutomateOnce = ({ className = '' }: { className?: string }) => (
  <>
    <RotatingText
      firstWord="AUTOMATE"
      words={['ONCE', 'TODAY']}
      className={`${className} -ml-18 md:-ml-36`}
    />
    <RotatingText
      firstWord="REUSE"
      words={['FOREVER', 'TOMORROW']}
      className={`${className} ml-18 md:ml-36`}
    />
  </>
)
