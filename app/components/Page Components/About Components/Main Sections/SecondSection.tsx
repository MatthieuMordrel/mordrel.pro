import { BusinessIcon } from '@/app/data/BusinessIcon'
import { CountryVisual } from '@/app/data/France'
import { ScrollButton } from '@/app/ui/Components/ScrollButon'
import FadeInEffect from '@/app/ui/Effects/AdvancedFadeIn'
import Link from 'next/link'
import { OribitingSoftware } from '../OrbitingSoftware'

export const SecondSection = () => (
  <section className="grid grid-rows-[repeat(6,calc(50vh-2rem))] place-items-center gap-4 overflow-hidden md:grid-cols-2 md:grid-rows-[repeat(3,100vh)]">
    <CountryVisual className="col-start-1 row-start-2 mb-28 h-full w-full md:row-start-1 md:mb-0" />

    <FadeInEffect id="FirstDiv" delay={2.5} className="textSmall row-start-1 h-full place-content-center md:col-start-2">
      <p className="font-bold">The Introduction</p>
      Currently living in Belgium, I&apos;m originally from France, which I left to pursue studies in Business Engineering. <br />
      After getting my degree, I worked in Finance where I realized I was looking for something where <span className="text-techBlue">
        freedom
      </span>, <span className="text-techBlue">creativity</span> and <span className="text-techBlue">independence</span> feel more rewarding.
    </FadeInEffect>
    <FadeInEffect
      animationStyle="fadeLeft"
      delay={3}
      className="col-start-1 row-span-1 row-start-2 self-end justify-self-start md:col-start-2 md:row-start-1 md:pb-16"
    >
      <ScrollButton id="SecondDiv" customOffset={15} mobileOffset={100} delay={3} />
    </FadeInEffect>

    <FadeInEffect id="SecondDiv" className="textSmall col-start-1 scroll-mt-40 place-content-center md:row-start-2 md:h-full md:scroll-mt-0">
      <p className="font-bold">The Learning process</p>
      Following my departure I started building{' '}
      <span className="group relative sm:underline sm:decoration-dotted">
        the website you are using
        <span className="absolute left-0 top-full mt-1 hidden bg-white text-sm text-gray-500 sm:group-hover:block">
          Mostly through React & Tailwind
        </span>
      </span>
      . <br />I believe that hard work can make us achieve anything, and want to prove that by helping businesses achieve their goals.
    </FadeInEffect>
    <OribitingSoftware className="col-start-1 row-start-4 mb-36 h-full w-[full] md:col-start-2 md:row-start-2 md:mb-0" />
    <FadeInEffect
      animationStyle="fadeLeft"
      delay={1.5}
      className="col-start-1 row-span-1 row-start-4 mb-6 self-end justify-self-start md:row-start-2 md:pb-4"
    >
      <ScrollButton id="ThirdDiv" customOffset={15} mobileOffset={40} delay={1.5} />
    </FadeInEffect>

    <FadeInEffect className="col-start-1 w-full">
      <BusinessIcon className="w-full" />
    </FadeInEffect>
    <FadeInEffect id="ThirdDiv" className="textSmall row-start-5 h-full place-content-center md:col-start-2 md:row-start-auto">
      <p className="font-bold">Working as Independant</p>I now work as independant for medium sizes companies, providing services ranging from
      automation, data visualisation to custom software developments.
      <br />
      <Link href="/contact" className="text-techBlue underline hover:font-semibold">
        Let&apos;s work together !
      </Link>
    </FadeInEffect>
  </section>
)
