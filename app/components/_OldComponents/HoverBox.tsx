import GradientBorder from '@ui/Effects/GradientBorder'

const HoverBox = ({ topContent, bottomContent }: { topContent: JSX.Element; bottomContent?: JSX.Element }) => {
  return (
    <GradientBorder>
      <div className="hover-pane pane relative h-[150px] w-full overflow-hidden bg-paneGrey p-4 transition-all duration-300 ease-in-out hover:h-[350px]">
        <div className="">{topContent}</div>
        {bottomContent && (
          <div className="absolute inset-0 flex flex-col justify-start px-4 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
            <div className="h-[50%]"></div>
            {bottomContent}
          </div>
        )}
      </div>
    </GradientBorder>
  )
}

export default HoverBox
