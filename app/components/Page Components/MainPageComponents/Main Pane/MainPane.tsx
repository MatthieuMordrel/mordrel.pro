// components/MainDiv.js
import { cn } from '@/lib/utils'
import RotatingText from '@ui/Effects/RotatingText'

const MainPane = ({ className }: { className?: string }) => {
  return (
    <section className={cn('flex min-h-60 flex-col space-y-10 p-10 text-center', className)}>
      <header>
        {' '}
        <h1 className="flex max-w-[90vw] flex-col space-y-2 md:max-w-[70vw]">
          <AutomateOnce className="-ml-10 self-center titleResponsive font-semibold uppercase " />
        </h1>
      </header>
      <p className="space-y-2">
        <span className="block">Streamline your workflows, make data-driven decisions, and elevate your business</span>
        <span className="block">
          Do not get behind, book today a starting session and we&apos;ll analyse all the potential for automating your work.
        </span>
      </p>
    </section>
  )
}

export default MainPane

const AutomateOnce = ({ className = '' }: { className?: string }) => (
  <>
    <RotatingText firstWord="Automate" words={['once', 'today']} className={cn(className, '-ml-18 md:-ml-36')} />
    <RotatingText firstWord="Reuse" words={['forever', 'Tomorrow']} className={cn(className, 'ml-18 md:ml-36')} />
  </>
)
