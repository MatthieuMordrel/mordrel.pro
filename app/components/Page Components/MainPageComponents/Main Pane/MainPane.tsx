'use client'

import { MainPaneText } from "./MainPaneText"
import { MainPaneVisual } from "./MainPaneVisual"

export default function MainPane() {
  return (
    <section className="relative w-full md:min-h-screen flex md:items-center overflow-hidden mt-6 lg:mt-0">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] items-center">
          <MainPaneText />
          <div className="hidden md:flex items-center justify-center p-4 rounded-lg">
            <MainPaneVisual />
          </div>
        </div>
      </div>
    </section>
  )
}