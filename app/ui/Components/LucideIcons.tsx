import { LucideIcon } from 'lucide-react'

interface CustomIconProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon
  size?: number
  color?: string
  backgroundColor?: string
  borderRadius?: string
  strokeWidth?: number
}

const CustomIcon: React.FC<CustomIconProps> = ({
  icon: Icon,
  size = 30,
  color = 'white',
  backgroundColor = '', //#e0e0e0
  borderRadius = '0px',
  strokeWidth = 1,
  ...props
}) => {
  return (
    <div style={{ backgroundColor, borderRadius }} {...props}>
      <Icon size={size} color={color} strokeWidth={strokeWidth} />
    </div>
  )
}

export default CustomIcon
