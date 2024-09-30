'use client'
import { useTheme } from 'next-themes';

interface MainVideoProps {
  isFixed?: boolean;
}

function MainVideo({ isFixed = false }: MainVideoProps) {
  const { theme } = useTheme();

  // Determine the container classes based on the isFixed prop
  const containerClasses = isFixed
    ? "fixed left-0 top-0 h-full w-full z-[-1]"
    : "absolute left-0 top-0 h-full w-full";

  // Don't render the video if the theme is light
  if (theme === 'light') {
    return null;
  }

  return (
    <div className={containerClasses}>
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        className="h-full w-full object-cover opacity-10"
        aria-label="Background video"
      >
        <source src="output_480p_30fps_crf28_h265_mobile_noaudio.mp4" type="video/mp4" media="(max-width: 767px)" />
        <source src="output_720p_30fps_crf24_h265.mp4" type="video/mp4" media="(min-width: 768px)" />
        <source src="output_720p_30fps_crf23_h264_max_compression.mp4" type="video/mp4" media="(min-width: 768px)" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute bottom-0 left-0 h-28 w-full bg-gradient-to-b from-transparent to-background"></div>
    </div>
  );
}

export default MainVideo;
