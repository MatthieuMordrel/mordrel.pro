'use client'

import FadeInEffect from '@ui/Effects/AdvancedFadeIn'
import AboutPane from '../AboutPane'
import TechBusinessGrowthSculpture from '../Visuals/TechBusinessGrowthSculpture'

export const FirstSection = () => {
  return (
    <section className="fullheight grid grid-cols-1 grid-rows-2 items-start md:grid-cols-2 md:grid-rows-1 md:items-center">
      <div className="row-start-1 max-w-[42rem] text-pretty md:col-start-1">
        <FadeInEffect animationStyle={'fadeUp'} className={`pt-4 text-[clamp(2.75rem,1.143rem+4.286vw,5rem)] md:pt-0`}>
          <h1>Welcome </h1>
          <hr className="my-2 border-t-2 md:my-8 md:w-1/2" />
        </FadeInEffect>
        <FadeInEffect animationStyle="fadeUp" delay={0.75} className="">
          <AboutPane className="textMedium" />
        </FadeInEffect>
      </div>
      <FadeInEffect animationStyle="zoom" delay={1.5} className="h-full">
        <TechBusinessGrowthSculpture initialZoom={10} maxNodes={50} initialNodeScale={0.2} nodeScaleVariation={0.2} />
      </FadeInEffect>
    </section>
  )
}
