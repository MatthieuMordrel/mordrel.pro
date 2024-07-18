import { MatthieuIcon } from '@/app/data/Matthieu'
import { ScrollButton } from '@/app/ui/Components/ScrollButon'
import FadeInEffect from '@/app/ui/Effects/AdvancedFadeIn'
import AboutPane from '../AboutPane'

export const FirstSection = () => (
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
    <FadeInEffect animationStyle="fadeLeft" delay={2.25} className="md:col-start-1 md:row-span-1 md:row-start-1 md:self-end md:pb-4">
      <ScrollButton id="FirstDiv" customOffset={50} delay={2.25} />
    </FadeInEffect>
  </section>
)
