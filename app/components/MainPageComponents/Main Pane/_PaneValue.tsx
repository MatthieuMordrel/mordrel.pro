import React from 'react'
import { HiCpuChip } from 'react-icons/hi2'
import { PlayrightIcon } from '../../../data/SVG'
import HoverBox from './HoverBox'
import { HiOutlineTag } from 'react-icons/hi2'
import { HiOutlineChat } from 'react-icons/hi'
import Image from 'next/image'

const _PaneValue = () => {
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
          bottomContent={
            <div className="align-center flex justify-center px-2 text-center">
              <div className="flex min-h-full flex-1 flex-col">
                <HiOutlineTag className="mx-auto h-12 w-12" />
                <h3 className="mt-auto">Value Oriented</h3>
              </div>
              <div className="flex min-h-full flex-1 flex-col">
                <HiOutlineChat className="mx-auto h-12 w-12" />
                <h3 className="mt-auto">Clear Communication</h3>
              </div>
              <div className="flex min-h-full flex-1 flex-col">
                <HiCpuChip className="mx-auto h-12 w-12" />
                <h3 className="mt-auto">Tailored Solutions</h3>
              </div>
            </div>
          }
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
            <div className="grid grid-cols-4 gap-4 px-4">
              <Image src="/Icons/Open AI Icon.png" alt="OpenAI" className="h-16 w-16 rounded-full" />
              <PlayrightIcon className="h-16 w-16 rounded-full" />
              <Image src="/Icons/Power Automate Icon.png" alt="Power Automate" className="h-16 w-16 rounded-full" />
              <Image src="/Icons/PowerBI Icon.png" alt="PowerBI" className="h-16 w-auto rounded-full" />
              <Image src="/Icons/React Icon.png" alt="React" className="h-16 w-16 rounded-full" />
              <Image src="/Icons/Excel Icon.png" alt="Excel" className="h-16 w-16 rounded-full" />
              <Image src="/Icons/Next Icon.png" alt="Next.js" className="h-16 w-16 rounded-full" />
              <Image src="/Icons/Python Icon.png" alt="Python" className="h-16 w-16 rounded-full" />
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
        />
      </div>
    </div>
  )
}

export default _PaneValue
