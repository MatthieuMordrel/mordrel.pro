import React from 'react'
import { HiAcademicCap } from 'react-icons/hi2'
import { HiCpuChip } from 'react-icons/hi2'
import { HiFaceSmile } from 'react-icons/hi2'
import GradientBorder from './GradientBorder'
import HoverBox from './HoverBox'

const ValueProposition = () => {
  return (
    <div className="flex justify-center space-x-8 ">
      <div className="basis-1/3">
        <GradientBorder>
          <HoverBox
            topContent={
              <>
                <h1 className="mb-7 font-bold">Cutting Edge Technology</h1>
                <p>
                  {' '}
                  We are committed to using cutting-edge technologies to provide
                  the best possible solutions for our clients
                </p>
              </>
            }
            bottomImage={{ src: '/vercel.svg', alt: 'Description' }}
            bottomText={<p></p>}
            iconComponent={
              <HiCpuChip className="mb-2 h-12 w-12 text-techPurple" />
            }
          />
        </GradientBorder>
      </div>
      <div className=" pane h-[150px] basis-1/3 overflow-hidden bg-paneGrey p-4">
        <h1 className="mb-7 font-bold"> Best Practices focused</h1>
        <p>
          Our team follows industry best practices to ensure the highest quality
          of our products and services.
        </p>
        {/* <div className="flex w-full flex-col items-center p-4">
          <HiAcademicCap className="mb-2 h-12 w-12" />
        </div> */}
      </div>
      <div className="pane h-[150px] basis-1/3 bg-paneGrey p-4 ">
        <h1 className="mb-7 font-bold"> Client-oriented approach </h1>
        <p>
          We are a client-first company. We listen to your needs and tailor our
          solutions to meet them.
        </p>
        {/* <div className="flex w-full flex-col items-center p-4">
          <HiFaceSmile className="mb-2 h-12 w-12" /> 
        </div> */}
      </div>
    </div>
  )
}

export default ValueProposition
