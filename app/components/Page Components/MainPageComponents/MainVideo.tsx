import BackgroundVideo from './BackgroundVideo'

//use useTheme hook to check if the theme is light and not show the video, but be careful with hydration

interface MainVideoProps {
  isFixed?: boolean
}

function MainVideo({ isFixed = false }: MainVideoProps) {
  // Determine the container classes based on the isFixed prop
  const containerClasses = isFixed ? 'fixed left-0 top-0 h-full w-full z-[-1]' : 'absolute left-0 top-0 h-full w-full'

  return (
    <div className={containerClasses}>
      <BackgroundVideo className="h-full w-full object-cover opacity-10" />
      <div className="absolute bottom-0 left-0 h-28 w-full bg-gradient-to-b from-transparent to-background"></div>
    </div>
  )
}

export default MainVideo
