import React from 'react'
import Image from 'next/image'
// import { HiAcademicCap, HiCpuChip, HiFaceSmile } from 'react-icons/hi'

// GradientBorder component should be defined or imported if it's used
import GradientBorder from './GradientBorder'

const HoverBox = ({ topContent, bottomImage, bottomText, iconComponent }: { topContent: JSX.Element; bottomImage: { src: string; alt: string }; bottomText: JSX.Element; iconComponent: JSX.Element }) => {
  return (
    <div className="hover-pane pane relative h-[150px] w-full overflow-hidden bg-paneGrey p-4 transition-all duration-300 ease-in-out hover:h-[350px]">
      <div className="content-container h-full transition-all duration-300 ease-in-out">{topContent}</div>
      <div className="absolute inset-0 flex flex-col justify-end px-4 py-4 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
        <Image src={bottomImage.src} alt={bottomImage.alt} className="mt-4" />
        {bottomText}
        {iconComponent && <div className="flex w-full flex-col items-center p-4">{iconComponent}</div>}
      </div>
    </div>
  )
}

export default HoverBox
