'use client'

import FadeInEffect from '@/app/ui/Effects/AdvancedFadeIn'
import { BusinessIcon } from '@/data/BusinessIcon'
import QuestionMark from '@/public/Icon SVG/Question'
import Link from 'next/link'
import { ContentSection } from '../Other Components/ContentSection'
import OurPromise from '../Promise Section/OurPromise'
import { OribitingSoftware } from '../Visuals/OrbitingSoftware'

export const SecondSection: React.FC = () => {
  return (
    <section className="space-y-10 pb-16 md:space-y-24">
      <ContentSection title="Why Choose Us?" id="FirstDiv" visual={<QuestionMark />} visualLeft>
        <p>
          In today&apos;s rapidly evolving business landscape, the sheer number of tools, methods, and technologies can be overwhelming. While
          incumbents have the luxury of time and resources to explore every option, growing companies like yours need to stay laser-focused on their
          core business.
        </p>
        <p className="text-techBlue">That&apos;s where we come in.</p>
        <p>
          We bridge the gap between your ambitious goals and the complex world of business optimization. Our expertise allows you to concentrate on
          what you do best, confident that you have the right tools and processes to support your growth.
        </p>
      </ContentSection>

      {/* <ContentSection id="our-promise" title="Our Promise to You" visual={<OribitingSoftware />}>
        <ul className="space-y-2">
          <li>
            <span className="font-semibold">Tailored Solutions:</span> We understand that one size doesn&apos;t fit all. Our recommendations are based
            on your unique needs, not our preferences.
          </li>
          <li>
            <span className="font-semibold">Cutting-Edge Expertise:</span> As passionate tech enthusiasts, we&apos;re always ahead of the curve on
            emerging trends and best practices.
          </li>
          <li>
            <span className="font-semibold">Agility and Speed:</span> Our lean team structure means we can deliver results fast, without the
            bureaucratic slowdown.
          </li>
          <li>
            <span className="font-semibold">Affordability:</span> We&apos;ve optimized our processes to offer top-tier consulting at competitive
            rates.
          </li>
        </ul>
      </ContentSection> */}
      <FadeInEffect animationStyle="fadeUp" delay={0.25} className="">
        <OurPromise />
      </FadeInEffect>
      <FadeInEffect animationStyle="fadeUp" delay={0.25} className="">
        <OribitingSoftware />
      </FadeInEffect>

      <ContentSection id="ready-to-accelerate" title="Ready to Accelerate?" visual={<BusinessIcon className="h-full w-full" />} visualLeft>
        <p>
          We&apos;re excited to learn about your business and help you achieve your dreams. Based in Brussels, Belgium, we work with forward-thinking
          companies worldwide.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-block rounded-md border-2 border-techBlue px-6 py-2 text-techBlue transition-all duration-200 hover:bg-techBlue/10 hover:shadow-md"
        >
          Contact us today
        </Link>
        <p className="text-sm italic text-gray-600">Don&apos;t let your competition get ahead. Start your journey to market dominance!</p>
      </ContentSection>
    </section>
  )
}
