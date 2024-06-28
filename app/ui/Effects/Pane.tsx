import { BorderBeam } from './BorderBeam'

interface PaneProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  includeBorderBeam?: boolean
}

export const Pane: React.FC<PaneProps> = ({
  className = '',
  children,
  includeBorderBeam = true,
  ...props
}) => {
  return (
    <div
      className={`relative min-w-10 overflow-hidden rounded-xl border border-activeBorderGrey bg-paneGrey ${className}`}
      {...props}
    >
      {includeBorderBeam && <BorderBeam />}
      {children}
    </div>
  )
}
