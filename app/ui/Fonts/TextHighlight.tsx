interface TextHighlightProps extends React.HTMLAttributes<HTMLElement> {
  className?: string
}

import React from 'react'

export const TextHighlight: React.FC<TextHighlightProps> = ({ className = '', children, ...props }) => {
  return (
    <h2
      className={`textLarge  bg-gradient-to-br from-white from-30% to-white/40 bg-clip-text py-2 font-semibold leading-none tracking-tighter text-transparent ${className}`} //Necessary padding for the text not to be cropped
      {...props}
    >
      {children}
    </h2>
  )
}
