import { LucideIcon } from 'lucide-react'

interface CustomIconProps {
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
  color = 'black',
  backgroundColor = '#e0e0e0',
  borderRadius = '7px',
  strokeWidth = 1
}) => {
  return (
    <div className={`inline-flex items-center justify-center border-activeBorderGrey p-2`} style={{ backgroundColor, borderRadius }}>
      <Icon size={size} color={color} strokeWidth={strokeWidth} />
    </div>
  )
}

export default CustomIcon
