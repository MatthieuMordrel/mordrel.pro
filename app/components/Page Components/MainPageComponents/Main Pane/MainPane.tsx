'use client'

import { MainPaneText } from './MainPaneText'
import { MainPaneVisual } from './MainPaneVisual'

export default function MainPane() {
  return (
    <section className="relative mt-6 flex w-full overflow-hidden md:min-h-screen md:items-center lg:mt-0">
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_1fr]">
          <MainPaneText />
          <div className="hidden items-center justify-center rounded-lg p-4 md:flex">
            <MainPaneVisual />
          </div>
        </div>
      </div>
    </section>
  )
}
