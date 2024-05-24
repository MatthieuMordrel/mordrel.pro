import Head from 'next/head'

export default function Aboutvideo() {
  return (
    <div className="flex flex-col ">
      {/* Video Ribbon */}
      <div className="">
        <video autoPlay loop muted disablePictureInPicture className="h-80 w-full object-cover">
          <source src="/About.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}
