import { BorderBeam } from './BorderBeam'

interface PaneProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export const Pane: React.FC<PaneProps> = ({ className = '', children, ...props }) => {
  return (
    <div
      className={`relative max-h-[75vh] min-h-[40vh] min-w-10 overflow-hidden rounded-xl border border-activeBorderGrey bg-paneGrey ${className}`}
      {...props}
    >
      <BorderBeam></BorderBeam>
      {children}
    </div>
  )
}
