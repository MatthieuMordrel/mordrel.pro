'use client'

import { useMediaQuery } from 'react-responsive'
import { BusinessIcon } from '@data/BusinessIcon'
import { CountryVisual } from '@data/France'
import { ScrollButton } from '@/app/ui/Components/ScrollButon'
import FadeInEffect from '@ui/Effects/AdvancedFadeIn'
import Link from 'next/link'
import { OribitingSoftware } from '../OrbitingSoftware'
import { CountryVisualMobile } from '@data/FranceMobile'

export const SecondSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  // console.log('is mobile?', isMobile)
  return (
    <section className="grid grid-rows-[repeat(6,calc(50vh-2rem))] place-items-center gap-4 overflow-hidden leading-7 md:grid-cols-2 md:grid-rows-[repeat(3,100vh)]">
      {isMobile ? (
        <CountryVisualMobile className="col-start-1 row-start-2 mb-28 h-full w-full pb-8 md:row-start-1 md:mb-0" />
      ) : (
        <CountryVisual className="col-start-1 row-start-2 mb-28 h-full w-full pb-8 md:row-start-1 md:mb-0" />
      )}
      <div id="FirstDiv" className="row-start-1 h-full place-content-center md:col-start-2">
        <FadeInEffect delay={isMobile ? 1 : 2.5} className="textSmall">
          <p className="font-bold">The Introduction</p>
          Currently living in Brussels, Belgium, I&apos;m originally from Marseille, France, which I left to pursue studies in Business Engineering.{' '}
          <br />
          After getting my degree, I worked in Finance where I realized I was looking for something where{' '}
          <span className="text-techBlue">freedom</span>, <span className="text-techBlue">creativity</span> and{' '}
          <span className="text-techBlue">independence</span> feel more rewarding.
        </FadeInEffect>
      </div>
      <FadeInEffect
        animationStyle="fadeLeft"
        delay={3}
        className="col-start-1 row-span-1 row-start-2 self-end justify-self-start pb-20 md:col-start-2 md:row-start-1"
      >
        <ScrollButton id="SecondDiv" customOffset={15} mobileOffset={70} delay={isMobile ? 1.5 : 3} />
      </FadeInEffect>

      <div id="SecondDiv" className="col-start-1 place-content-center md:row-start-2 md:h-full">
        <FadeInEffect className="textSmall">
          <p className="font-bold">The Learning process</p>
          Following my departure I started building{' '}
          <span className="group relative">
            the website you are using
            {/* <span className="absolute left-0 top-full mt-1 hidden bg-white text-sm text-gray-500 sm:group-hover:block">
            Mostly through React & Tailwind
          </span> */}
          </span>
          . <br />I believe that hard work can make us achieve anything, and want to prove that by helping businesses achieve their goals.
        </FadeInEffect>
      </div>
      <OribitingSoftware className="col-start-1 row-start-4 mb-36 h-full w-[full] md:col-start-2 md:row-start-2 md:mb-0" />
      <FadeInEffect
        animationStyle="fadeLeft"
        delay={1.5}
        className="col-start-1 row-span-1 row-start-4 mb-6 self-end justify-self-start md:row-start-2 md:pb-4"
      >
        <ScrollButton id="ThirdDiv" customOffset={15} mobileOffset={-20} delay={1.5} />
      </FadeInEffect>

      <FadeInEffect className="col-start-1 w-full">
        <BusinessIcon className="w-full" />
      </FadeInEffect>
      <div id="ThirdDiv" className="row-start-5 h-full place-content-center md:col-start-2 md:row-start-auto">
        <FadeInEffect className="textSmall">
          <p className="font-bold">Working as Independant</p>I now work as independant for medium sizes companies, providing services ranging from
          automation, data visualisation to custom software developments.
          <br />
          <Link href="/contact" className="text-techBlue underline hover:font-semibold">
            Let&apos;s work together !
          </Link>
        </FadeInEffect>
      </div>
    </section>
  )
}
