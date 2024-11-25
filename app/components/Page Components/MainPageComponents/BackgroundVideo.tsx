'use client'

interface BackgroundVideoProps {
  className: string
}

function BackgroundVideo({ className }: BackgroundVideoProps) {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      disablePictureInPicture
      poster="https://atwtabp83g2jwfsy.public.blob.vercel-storage.com/poster_720p-Hzh7q6JxMGjMPPxfy7G6M6g3rRvPvI.webp"
      className={className}
      aria-label="Background video"
    >
      <source
        src="https://atwtabp83g2jwfsy.public.blob.vercel-storage.com/output_480p_30fps_crf28_h265_mobile_noaudio-onGs21YfcjMDLE8b87Cl3gbRqoQWCR.mp4"
        type="video/mp4"
        media="(max-width: 767px)"
      />
      <source
        src="https://atwtabp83g2jwfsy.public.blob.vercel-storage.com/output_720p_30fps_crf23_h264_max_compression-ejYRM9VbGOwrs4t1mSmBkf3ruh5zRJ.mp4"
        type="video/mp4"
        media="(min-width: 768px)"
      />
      <source
        src="https://atwtabp83g2jwfsy.public.blob.vercel-storage.com/output_720p_30fps_crf24_h265-3xyIlfiE7eGa7FYh52A7qPmkOgP0OB.mp4"
        type="video/mp4"
        media="(min-width: 768px)"
      />
      Your browser does not support the video tag.
    </video>
  )
}

export default BackgroundVideo
