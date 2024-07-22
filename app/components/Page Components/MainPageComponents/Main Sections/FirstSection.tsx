import React from 'react'
import MainPane from '../Main Pane/MainPane'
import PaneValue from '../Main Pane/NewPane'
import MainVideo from '../MainVideo'

export const FirstSection = () => (
  <section className="flex min-h-[90vh] flex-col">
    <MainVideo src="/PurpleVideo.mp4" />
    <MainPane className="relative w-[90vw] md:w-[75vw] lg:mt-16 3xl:w-[60vw]" />
    <PaneValue className="relative w-[90vw] md:w-[75vw] lg:my-16 3xl:w-[60vw]" />
  </section>
)
