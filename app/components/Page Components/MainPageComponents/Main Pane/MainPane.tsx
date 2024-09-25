// components/MainDiv.js
import { cn } from '@/lib/utils'
import RotatingText from '@ui/Effects/RotatingText'

export default function MainPane({ className }: { className?: string }) {
  return (
    <section className={cn('flex py-10 min-h-60 flex-col space-y-10 text-center', className)}>
      <header>
        {' '}
        <h1 className="px-10 ml-12 md:ml-0 flex max-w-[90vw] flex-col space-y-2 md:max-w-[70vw]">
          <AutomateOnce className="self-center titleResponsive font-semibold uppercase " />
        </h1>
      </header>
      <p className="space-y-2">
        <span className="block text-pretty m:0">Streamline your workflows, make data-driven decisions, and elevate your business</span>
        <span className="hidden md:block text-pretty">
          Do not get behind, book today a starting session and we&apos;ll analyse all the potential for automating your work.
        </span>
      </p>
    </section>
  )
}

const AutomateOnce = ({ className = '' }: { className?: string }) => (
  <>
    <RotatingText firstWord="Automate" words={['once', 'today']} className={cn(className,'md:-ml-36')} />
    <RotatingText firstWord="Reuse" words={['forever', 'Tomorrow']} className={cn(className, 'md:ml-36')} />
  </>
)
