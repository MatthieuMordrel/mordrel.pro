function MainVideo({ src }: { src: string }) {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        className="absolute left-0 top-0 h-full w-full object-cover opacity-10"
        aria-label="Background video"
      >
        <source src="output_720p_30fps_crf24_h265.mp4" type="video/mp4" />
        <source src="output_720p_30fps_crf23_h264_max_compression.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute bottom-0 left-0 h-28 w-full bg-gradient-to-b from-transparent to-techGrey"></div>
    </>
  )
}

export default MainVideo
