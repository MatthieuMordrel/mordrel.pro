import FadeInEffect from '@ui/Effects/AdvancedFadeIn'
import React, { ReactNode } from 'react'
import { useMediaQuery } from 'react-responsive'

interface TextWithVisualProps {
  title: string
  children: ReactNode
  visual: ReactNode
  visualOnRight?: boolean
  id?: string
}

export const TextWithVisual: React.FC<TextWithVisualProps> = ({ title, children, visual, visualOnRight = false, id }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  return (
    <>
      <div className={`row-span-2 ${visualOnRight ? 'md:col-start-1' : 'md:col-start-2'}`}>{visual}</div>
      <div id={id} className={`h-full place-content-center ${visualOnRight ? 'md:col-start-2' : 'md:col-start-1'}`}>
        <FadeInEffect delay={isMobile ? 1 : 2.5} className="textSmall space-y-4">
          <h2 className="mb-2 text-2xl font-bold">{title}</h2>
          {children}
        </FadeInEffect>
      </div>
    </>
  )
}
