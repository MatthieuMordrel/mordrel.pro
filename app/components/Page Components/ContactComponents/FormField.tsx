'use client'

import { cn } from '@/app/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import React, { useState } from 'react'

const fieldStyles = cva(
  [
    'neon-slate',
    'flex w-full rounded-md border bg-paneGrey px-3 text-sm ring-offset-background transition',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
  ],
  {
    variants: {
      touched: { true: 'invalid:border-[hsl(0,70%,80%,0.5)] invalid:neon-[hsl(0,70%,80%,0.5)]' },
      hasValue: { true: 'border-[hsl(140,70%,80%,0.5)] neon-[hsl(140,70%,80%,0.5)]' }
    }
  }
)

interface FormFieldProps extends VariantProps<typeof fieldStyles> {
  id: string
  label: string
  name: string
  type?: 'text' | 'textarea' | string
  required?: boolean
  placeholder?: string
  className?: string
}

const FormField: React.FC<FormFieldProps> = ({ id, label, name, type = 'text', required = false, placeholder = '', className = '' }) => {
  const [value, setValue] = useState('')
  const [touched, setTouched] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setValue(e.target.value)
  const handleBlur = () => setTouched(true)

  const InputComponent = type === 'textarea' ? 'textarea' : 'input'

  return (
    <div className="mb-4 w-full">
      <label htmlFor={id} className="text-md mb-2 block font-semibold text-gray-300">
        {label}
      </label>
      <InputComponent
        id={id}
        name={name}
        type={type !== 'textarea' ? type : undefined}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        required={required}
        className={cn(fieldStyles({ touched, hasValue: value.length > 0, className }), type === 'textarea' ? 'pb-20 pt-2' : 'py-2')}
        placeholder={placeholder}
      />
    </div>
  )
}

export default FormField
