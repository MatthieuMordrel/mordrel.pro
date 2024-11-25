import { MainPaneText } from './MainPaneText'
import { MainPaneVisual } from './MainPaneVisual'

export default function MainPane() {
  return (
    <div className="container relative z-10 mt-6 flex grid w-full items-center gap-6 overflow-hidden px-4 md:min-h-screen md:items-center md:px-6 lg:mt-0 lg:grid-cols-[1fr_1fr]">
      <MainPaneText />
      <div className="hidden items-center justify-center rounded-lg p-4 md:flex">
        <MainPaneVisual />
      </div>
    </div>
  )
}
