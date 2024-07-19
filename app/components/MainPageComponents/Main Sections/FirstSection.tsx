import React from 'react'
import MainVideo from '@components/MainPageComponents/MainVideo'
import MainDiv from '@components/MainPageComponents/Main Pane/MainPane'
import PaneValue from '@components/MainPageComponents/Main Pane/NewPane'

export const FirstSection = () => (
  <section className="flex min-h-[90vh] flex-col">
    <MainVideo src="/PurpleVideo.mp4" />
    <MainDiv className="relative w-[90vw] md:w-[75vw] lg:mt-16 3xl:w-[60vw]" />
    <PaneValue className="relative w-[90vw] md:w-[75vw] lg:my-16 3xl:w-[60vw]" />
  </section>
)
