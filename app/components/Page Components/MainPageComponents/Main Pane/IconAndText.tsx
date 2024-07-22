import React from 'react'

interface IconProps {
  icon: React.ComponentType<{ className?: string; color?: string; strokeWidth?: number; size?: number }>
  comment: string
  color?: string
  strokeWidth?: number
  size?: number
  type: 'lucide' | 'other'
  className?: string
}

export default function IconAndText({ icon: IconComponent, comment, color, strokeWidth, size, type, className }: IconProps) {
  const isLucideIcon = type === 'lucide'

  return (
    <div className={`flex min-h-full flex-1 flex-col items-center ${className}`}>
      <IconComponent
        className="h-16 w-16 sm:h-20 sm:w-20"
        color={isLucideIcon ? color : undefined}
        strokeWidth={isLucideIcon ? strokeWidth : undefined}
        size={isLucideIcon ? size : undefined}
      />
      <h3 className="mt-2 text-center sm:mt-auto">{comment}</h3>
    </div>
  )
}
