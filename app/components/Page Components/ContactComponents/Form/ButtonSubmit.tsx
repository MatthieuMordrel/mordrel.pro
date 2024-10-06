import { motion } from 'framer-motion'
import { useFormStatus } from 'react-dom'

type ButtonSubmitProps = {
  className?: string
}

export default function ButtonSubmit({ className = '' }: ButtonSubmitProps) {
  const { pending } = useFormStatus()

  return (
    <motion.button
      type="submit"
      className={`relative w-full overflow-hidden rounded-lg px-8 py-4 text-lg font-semibold text-background transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-techBlue/50 disabled:cursor-not-allowed disabled:opacity-50 ${className} `}
      style={{
        background: `linear-gradient(135deg, hsl(170, 35%, 74%) 0%, hsl(315, 12%, 57%) 100%)`
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      disabled={pending}
    >
      <motion.span
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: pending ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <svg className="h-6 w-6 animate-spin text-background" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </motion.span>
      <motion.span
        className="inline-block"
        initial={{ opacity: 1 }}
        animate={{ opacity: pending ? 0 : 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {pending ? 'Sending...' : 'Send Message'}
      </motion.span>
    </motion.button>
  )
}
