// components/MainDiv.js
import FadeInEffect from '@ui/Effects/AdvancedFadeIn'
import RotatingText from '@ui/Effects/RotatingText'

const MainPane = ({ className }: { className?: string }) => {
  return (
    <section className={`flex min-h-60 flex-col space-y-10 p-10 text-center ${className}`}>
      <header>
        {' '}
        <h1 className="flex max-w-[90vw] flex-col space-y-2 md:max-w-[70vw]">
          <AutomateOnce className="-ml-10 self-center text-2xl font-semibold uppercase sm:text-4xl lg:text-6xl" />
        </h1>
      </header>
      <FadeInEffect animationStyle="zoom" delay={1}>
        <p className="space-y-2">
          <span className="block">Streamline your workflows, make data-driven decisions, and elevate your business</span>
          <span className="block">
            Do not get behind, book today a starting session and we&apos;ll analyse all the potential for automating your work.
          </span>
        </p>
      </FadeInEffect>
    </section>
  )
}

export default MainPane

const AutomateOnce = ({ className = '' }: { className?: string }) => (
  <>
    <FadeInEffect animationStyle="fadeLeft" delay={0}>
      <RotatingText firstWord="Automate" words={['once', 'today']} className={`${className} -ml-18 md:-ml-36`} />
    </FadeInEffect>
    <FadeInEffect animationStyle="fadeRight" delay={0.4}>
      <RotatingText firstWord="Reuse" words={['forever', 'Tomorrow']} className={`${className} ml-18 md:ml-36`} />
    </FadeInEffect>
  </>
)
