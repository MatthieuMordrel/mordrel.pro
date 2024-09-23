import FadeInEffect from '@/app/ui/Effects/AdvancedFadeIn'
import React, { ReactNode } from 'react'

interface ContentSectionProps {
  title: string
  children: ReactNode
  visual: ReactNode
  delay?: number
  visualLeft?: boolean
  id?: string
}

export const ContentSection: React.FC<ContentSectionProps> = ({ title, children, visual, delay = 0.25, visualLeft = false, id }) => {
  return (
    <FadeInEffect animationStyle="fadeUp" delay={delay}>
      <div className="fullheight grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16" id={id}>
        <div className={`order-1 flex items-center justify-center ${visualLeft ? 'md:order-2' : 'md:order-1'}`}>
          <div className="space-y-4">
            <h2 className="mb-2 text-2xl font-bold">{title}</h2>
            {children}
          </div>
        </div>
        <div className={`order-2 ${visualLeft ? 'md:order-1' : 'md:order-2'} -z-10 flex items-center justify-center`}>{visual}</div>
      </div>
    </FadeInEffect>
  )
}
