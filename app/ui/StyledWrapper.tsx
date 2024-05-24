import React from 'react'

type StyledWrapperProps = {
  children: React.ReactNode
}

const StyledWrapper: React.FC<StyledWrapperProps> = ({ children }) => {
  // This function clones each child (assuming they are divs) and adds the desired Tailwind classes
  const styledChildren = React.Children.map(children, (child) => {
    // Check if the child is a React element
    if (React.isValidElement(child)) {
      // Apply styles directly to the divs that wrap your actual components
      return (
        <div className={`${child.props.className || ''} border-white`}>
          {child}
        </div>
      )
    }
    return child
  })

  return <>{styledChildren}</>
}

export default StyledWrapper
