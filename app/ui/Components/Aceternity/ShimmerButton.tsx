import React from 'react'
import { twMerge } from 'tailwind-merge'

interface ShimmerButtonProps {
  label: string
  onClick?: () => void
  className?: string
}

export const ShimmerButton: React.FC<ShimmerButtonProps> = ({ label, onClick, className = '' }) => (
  <button
    className={twMerge(
      `animate-shimmer inline-flex h-11 items-center justify-center rounded-md border border-slate-200 bg-[linear-gradient(110deg,#ffffff,45%,#e5e7eb,55%,#ffffff)] bg-[length:200%_100%] px-2 font-medium text-slate-800 transition-colors focus:outline-none md:px-6`,
      className
    )}
    onClick={onClick}
  >
    {label}
  </button>
)

export default ShimmerButton
