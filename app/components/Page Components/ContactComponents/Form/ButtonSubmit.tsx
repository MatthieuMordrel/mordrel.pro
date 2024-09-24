import { cn } from '@/lib/utils'
import { useFormStatus } from 'react-dom'
import styles from './MailForm.module.css'

export default function ButtonSubmit() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      className={cn(
        styles.button,
        'mt-4 w-full rounded-lg px-8 py-4 text-lg font-semibold transition-all duration-300 ease-out',
        'border border-white/20 bg-white/10 backdrop-blur-sm',
        'hover:bg-white/20 hover:shadow-[0_8px_32px_rgba(31,38,135,0.37)]',
        'focus:outline-none focus:ring-2 focus:ring-white/30',
        'text-white'
      )}
    >
      {pending ? 'Sending...' : 'Send Message'}
    </button>
  )
}
