'use client'
import React from 'react'
import { Button } from './Button'

interface ButtonsToggleProps {
  className?: string
  labels: string[]
  onClick: (label: string) => void
}

const ButtonsToggle: React.FC<ButtonsToggleProps> = ({ className, labels, onClick }) => {
  return (
    <>
      {labels.map((label, index) => (
        <Button
          key={index}
          onClick={() => onClick(label)}
          className={`${className}`}
          variant="outline"
        >
          {label}
        </Button>
      ))}
    </>
  )
}

export default ButtonsToggle
