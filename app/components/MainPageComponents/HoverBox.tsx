import React from 'react'
import Image from 'next/image'
// import { HiAcademicCap, HiCpuChip, HiFaceSmile } from 'react-icons/hi'

import GradientBorder from './GradientBorder'

const HoverBox = ({ topContent, bottomContent }: { topContent: JSX.Element; bottomContent: JSX.Element }) => {
  return (
    <GradientBorder>
      <div className="hover-pane pane relative h-[150px] w-full overflow-hidden bg-paneGrey p-4 transition-all duration-300 ease-in-out hover:h-[350px]">
        <div className=" h-full transition-all duration-300 ease-in-out">{topContent}</div>
        <div className="absolute inset-0 mb-4 flex flex-col justify-end px-4 py-4 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">{bottomContent}</div>
      </div>
    </GradientBorder>
  )
}

export default HoverBox
