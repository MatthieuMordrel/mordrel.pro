// components/VideoPlayer.jsx

import React from 'react'

function MainVideo({ src }: { src: string }) {
  return <video src={src} autoPlay loop muted playsInline disablePictureInPicture className="absolute left-0 top-0 h-full w-full object-cover opacity-45" />
}

export default MainVideo
