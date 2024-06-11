import { BorderBeam } from './BorderBeam'

interface PaneProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export const Pane: React.FC<PaneProps & { includeBorderBeam?: boolean }> = ({ className = '', children, includeBorderBeam = true, ...props }) => {
  return (
    <div className={`relative max-h-[75vh] min-w-10 overflow-hidden rounded-xl border border-activeBorderGrey bg-paneGrey ${className}`} {...props}>
      {includeBorderBeam && <BorderBeam />}
      {children}
    </div>
  )
}
