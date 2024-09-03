import { MatthieuIcon } from '@/data/Matthieu'
import { ScrollButton } from '@ui/Components/ScrollButon'
import FadeInEffect from '@ui/Effects/AdvancedFadeIn'
import AboutPane from '../AboutPane'

export const FirstSection = () => (
  <section className="grid h-[calc(100vh-10rem)] grid-cols-1 items-start md:h-[calc(100vh-4.5rem)] md:grid-cols-2 md:grid-rows-1 md:items-center">
    <div className="row-start-1 max-w-[42rem] text-pretty md:col-start-1">
      <FadeInEffect animationStyle={'fadeUp'} className={`pt-4 text-[clamp(2.75rem,1.143rem+4.286vw,5rem)] md:pt-0`}>
        <h1>Hi, my name is Matthieu</h1>
        <hr className="my-2 border-t-2 md:my-8 md:w-1/2" />
      </FadeInEffect>
      <FadeInEffect animationStyle="fadeUp" delay={0.75} className="">
        <AboutPane className="textMedium" />
      </FadeInEffect>
    </div>

    <FadeInEffect animationStyle="zoom" delay={1.5} className="">
      <MatthieuIcon className="mx-auto max-h-[17rem] sm:max-h-[25rem] md:max-h-full" />
    </FadeInEffect>
    <FadeInEffect animationStyle="fadeLeft" delay={2.25} className="pb-6 md:col-start-1 md:row-span-1 md:row-start-1 md:self-end md:pb-4">
      <ScrollButton id="FirstDiv" customOffset={15} mobileOffset={-10} delay={2.25} />
    </FadeInEffect>
  </section>
)
