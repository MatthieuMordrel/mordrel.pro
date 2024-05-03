import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Aboutvideo from '../../components/AboutComponents/VideoBanner'
import StyledWrapper from '../../components/MainPageComponents/StyledWrapper'
import AboutPane from '../../components/AboutComponents/AboutPane'
import ValuesComponent from '../../components/AboutComponents/AboutValues'

export default function About() {
  return (
    <div className="flex min-h-screen flex-col items-center  gap-8 bg-techGrey text-white">
      <Head>
        <title>About Me - Matthieu Mordrel</title>
        <meta
          name="description"
          content="Learn more about Matthieu Mordrel, a consultant specialized in Excel, PowerBI, and more."
        />
      </Head>
      <StyledWrapper>
        <div className="h-full w-full">
          <Aboutvideo />
        </div>
        <div className="h-full w-full">
          <AboutPane />
        </div>
        <div className="w-full">
          <ValuesComponent />
        </div>
      </StyledWrapper>
    </div>
  )
}
