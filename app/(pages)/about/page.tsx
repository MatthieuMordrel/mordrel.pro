import React from 'react'
import AboutPane from '@/app/components//AboutComponents/AboutPane'
import { OribitingSoftware } from '@/app/components/AboutComponents/OrbitingSoftware'
import { MatthieuIcon } from '@/app/data/Matthieu'
import FadeInEffect from '@/app/ui/Effects/AdvancedFadeIn'
import WordRotate from '@/app/ui/Effects/word-rotate'
import { CountryVisual } from '@/app/data/France'
import Link from 'next/link'
import { BusinessIcon } from '@/app/data/BusinessIcon'
import { ArrowDownWideNarrow } from 'lucide-react'
import { ScrollButton } from '@/app/ui/Components/ScrollButon'

export default function About() {
  return (
    <main className="min-h-screen justify-center bg-techGrey px-[clamp(0.1rem,7vw,12rem)]">
      <section className="grid h-[calc(100vh-4.5rem)] grid-cols-1 items-center md:grid-cols-2 md:grid-rows-1">
        <div className="row-start-1 max-w-[42rem] text-pretty md:col-start-1">
          <FadeInEffect animationStyle={'fadeUp'} className={`font-bitter text-[clamp(2.75rem,1.143rem+4.286vw,5rem)]`}>
            Hi, my name is Matthieu
            <hr className="my-8 border-t-2 md:w-1/2" />
          </FadeInEffect>
          <FadeInEffect animationStyle="fadeUp" delay={0.75} className="">
            <AboutPane className="textMedium" />
          </FadeInEffect>
        </div>

        <FadeInEffect animationStyle="zoom" delay={1.5} className="">
          <MatthieuIcon height="100%" className="mx-auto max-h-[25rem] md:max-h-full" />
        </FadeInEffect>
        <FadeInEffect animationStyle="fadeLeft" delay={2.25} className="md:col-start-1 md:row-span-1 md:row-start-1 md:self-end md:pb-28">
          <ScrollButton id="FirstDiv" delay={2.25} />
        </FadeInEffect>
      </section>

      <section className="grid grid-rows-[repeat(6,calc(50vh-2rem))] place-items-center gap-8 overflow-hidden font-bitter md:grid-cols-2 md:grid-rows-[repeat(3,100vh)]">
        <CountryVisual className="col-start-1 row-start-2 mb-28 h-full w-full md:row-start-1 md:mb-0" />

        <FadeInEffect id="FirstDiv" delay={2.5} className="textSmall row-start-1 h-full place-content-center md:col-start-2">
          <p className="font-bold">The Introduction</p>
          Currently living in Belgium, I&apos;m originally from France, which I left to pursue studies in Business Engineering. <br />
          After getting my degree, I worked in Finance where I realized I was looking for something where{' '}
          <span className="text-techBlue">freedom</span>, <span className="text-techBlue">creativity</span> and{' '}
          <span className="text-techBlue">independence</span> feel more rewarding.
        </FadeInEffect>
        <FadeInEffect
          animationStyle="fadeLeft"
          delay={3}
          className="col-start-1 row-span-1 row-start-2 self-end justify-self-start md:col-start-2 md:row-start-1 md:pb-32"
        >
          <ScrollButton id="SecondDiv" delay={3} />
        </FadeInEffect>

        <FadeInEffect id="SecondDiv" className="textSmall col-start-1 h-full place-content-center md:row-start-2">
          <p className="font-bold">The Learning process</p>
          Following my departure I started building{' '}
          <span className="group relative sm:underline sm:decoration-dotted">
            the website you are using
            <span className="absolute left-0 top-full mt-1 hidden bg-white text-sm text-gray-500 sm:group-hover:block">
              Mostly through React & Tailwind
            </span>
          </span>
          . <br />I believe that hard work can make us achieve anything, and decided to prove that by helping various businesses achieve their goals.
        </FadeInEffect>
        <OribitingSoftware className="col-start-1 row-start-4 mb-28 h-full w-[full] md:col-start-2 md:row-start-2 md:mb-0" />
        <FadeInEffect
          animationStyle="fadeLeft"
          delay={2}
          className="col-start-1 row-span-1 row-start-4 self-end justify-self-start md:row-start-2 md:pb-32"
        >
          <ScrollButton id="ThirdDiv" delay={2} />
        </FadeInEffect>

        <FadeInEffect className="col-start-1 w-full">
          <BusinessIcon className="w-full" />
        </FadeInEffect>
        <FadeInEffect id="ThirdDiv" className="textSmall row-start-5 h-full place-content-center md:col-start-2 md:row-start-auto">
          <p className="font-bold">Working as Independant</p>I now work as independant for medium sizes companies, providing various services ranging
          from automation, data visualisation and custom development of various software.
          <br />
          <Link href="/contact" className="text-techBlue underline hover:font-semibold">
            Let&apos;s work together !
          </Link>
        </FadeInEffect>
      </section>
    </main>
  )
}
