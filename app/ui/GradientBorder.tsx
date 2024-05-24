// Contact component
import React from 'react'

// Ensure TypeScript recognizes this as a functional component accepting children
export default function GradientBorder({
  children
}: React.PropsWithChildren<{}>) {
  return (
    <div className="card-wrapper flex items-center justify-center ">
      <div className="card-content w-full">{children}</div>
    </div>
  )
}
