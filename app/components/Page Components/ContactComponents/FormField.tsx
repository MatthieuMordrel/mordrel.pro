import React from 'react'

interface FormFieldProps {
  id: string
  label: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  required?: boolean
  placeholder?: string
  className?: string
}

const FormField: React.FC<FormFieldProps> = ({ id, label, type = 'text', value, onChange, required = false, placeholder = '', className = '' }) => (
  <div className="mb-4 w-full">
    <label htmlFor={id} className="text-md mb-2 block font-semibold text-gray-300">
      {label}
    </label>
    {type === 'textarea' ? (
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        className={`${className} border-input ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex w-full rounded-md border bg-paneGrey px-3 pb-20 pt-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
        placeholder={placeholder}
      ></textarea>
    ) : (
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        className={`${className} placeholder:"border-input ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex w-full rounded-md border bg-paneGrey px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
        placeholder={placeholder}
      />
    )}
  </div>
)

export default FormField
