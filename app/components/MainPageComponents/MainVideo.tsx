function MainVideo({ src }: { src: string }) {
  return (
    <div className="h-full w-full">
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        className="absolute left-0 top-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute bottom-0 left-0 h-28 w-full bg-gradient-to-b from-transparent to-techGrey"></div>
    </div>
  )
}

export default MainVideo
