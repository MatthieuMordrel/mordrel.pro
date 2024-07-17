// Contact component
import React from 'react'

// Ensure TypeScript recognizes this as a functional component accepting children
export default function GradientBorder({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="card-wrapper relative flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-activeBorderGrey to-paneGrey">
      <div className="m-[1px] w-full">{children}</div>
    </div>
  )
}
