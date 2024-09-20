import React from 'react'
import { twMerge } from 'tailwind-merge'

interface ShimmerButtonProps {
  label: string
  onClick?: () => void
  className?: string
}

export const ShimmerButton: React.FC<ShimmerButtonProps> = ({ label, onClick, className = '' }) => (
  <button
    type="button"
    className={twMerge(
      `inline-flex h-11 min-w-[100px] transform animate-shimmer items-center justify-center rounded-md border border-slate-200 bg-[linear-gradient(110deg,#ffffff,45%,#e5e7eb,55%,#ffffff)] bg-[length:200%_100%] px-2 font-medium text-slate-800 transition-all duration-200 hover:border-slate-300 hover:bg-[linear-gradient(110deg,#f0f0f0,45%,#c0c0c0,55%,#f0f0f0)] hover:shadow-lg focus:outline-none md:px-6`,
      className
    )}
    onClick={onClick}
  >
    <span className="transform transition-transform duration-200 hover:scale-[1.05]">{label}</span>
  </button>
)

export default ShimmerButton
