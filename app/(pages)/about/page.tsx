import React from 'react'
import Head from 'next/head'
import Aboutvideo from '@/app/components/AboutComponents/VideoBanner'
import StyledWrapper from '@ui/Effects/StyledWrapper'
import AboutPane from '@/app/components//AboutComponents/AboutPane'
import ValuesComponent from '@/app/components/AboutComponents/AboutValues'
import { OribitingSoftware } from '@/app/components/AboutComponents/OrbitingSoftware'

export default function About() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-8 bg-techGrey text-white">
      <Head>
        <title>About Me - Matthieu Mordrel</title>
        <meta name="description" content="Learn more about Matthieu Mordrel, a consultant specialized in Excel, PowerBI, and more." />
      </Head>
      <StyledWrapper>
        <div className="h-full w-full">
          <Aboutvideo />
        </div>
        <div className="flex w-full flex-row justify-center gap-8 ">
          <div className="h-full">
            <AboutPane />
          </div>
          <div className="flex min-w-[35em] flex-col items-center justify-center ">
            <div className="flex w-full flex-col justify-center text-center">
              <OribitingSoftware className="" />
              <p className="-mt-4 italic text-white">Some software I like to mingle with in my projects</p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <ValuesComponent />
        </div>
      </StyledWrapper>
    </div>
  )
}
