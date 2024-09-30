import MainPane from '../Main Pane/MainPane'
import PaneValue from '../Main Pane/PaneValue'
import MainVideo from '../MainVideo'

export const FirstSection = () => (
  <section className="flex min-h-[90vh] flex-col gap-y-12 items-center">
    <MainVideo isFixed={false} />
    <MainPane />
    <PaneValue className="relative w-[90vw] md:w-[75vw] lg:my-16 3xl:w-[60vw] md:hidden" />
  </section>
)
