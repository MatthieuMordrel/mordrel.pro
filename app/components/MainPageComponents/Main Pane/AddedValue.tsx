import React from 'react'
import { HiAcademicCap } from 'react-icons/hi2'
import { HiCpuChip } from 'react-icons/hi2'
import { HiFaceSmile } from 'react-icons/hi2'
import GradientBorder from '../GradientBorder'
import HoverBox from '../HoverBox'
import { PlayrightIcon } from '../SVG'

const ValueProposition = () => {
  return (
    <div className="flex justify-center space-x-8 ">
      <div className="basis-1/3">
        <HoverBox
          topContent={
            <>
              <h1 className="mb-7 font-bold">Client-oriented approach</h1>
              <p>We are a client-first company. We listen to your needs and tailor our solutions to meet them.</p>
            </>
          }
          bottomContent={<HiFaceSmile className="mb-2 h-12 w-12 text-white" />}
        />
      </div>
      <div className="basis-1/3">
        <HoverBox
          topContent={
            <>
              <h1 className="mb-7 font-bold">Tools agnostic</h1>
              <p> We use and recommend tools based on the needs of each case, maximizing value for our customers</p>
            </>
          }
          bottomContent={
            <div className="bg-pangeGrey grid grid-cols-4 gap-4 rounded-lg px-4">
              <img src="/Icons/Open AI Icon.png" alt="OpenAI" className="h-16 w-16 rounded-full" />
              <PlayrightIcon className="h-16 w-16 rounded-full" />
              <img src="/Icons/Power Automate Icon.png" alt="Power Automate" className="h-16 w-16 rounded-full" />
              <img src="/Icons/PowerBI Icon.png" alt="PowerBI" className="h-16 w-auto rounded-full" />
              <img src="/Icons/React Icon.png" alt="React" className="h-16 w-16 rounded-full" />
              <img src="/Icons/Excel Icon.png" alt="Excel" className="h-16 w-16 rounded-full" />
              <img src="/Icons/Next Icon.png" alt="Next.js" className="h-16 w-16 rounded-full" />
              <img src="/Icons/Python Icon.png" alt="Python" className="h-16 w-16 rounded-full" />
            </div>
          }
        />
      </div>
      <div className="basis-1/3">
        <HoverBox
          topContent={
            <>
              <h1 className="mb-7 font-bold">Best Practices focused</h1>
              <p>Our team follows industry best practices to ensure the highest quality of our products and services.</p>
            </>
          }
          bottomContent={<HiAcademicCap className="mb-2 h-12 w-12 text-white" />}
        />
      </div>
    </div>
  )
}

export default ValueProposition
