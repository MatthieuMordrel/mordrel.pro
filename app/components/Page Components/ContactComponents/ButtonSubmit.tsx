import { cn } from '@/app/lib/utils'
import { useFormStatus } from 'react-dom'
import styles from './MailForm.module.css'

export default function ButtonSubmit() {
  const { pending } = useFormStatus()
  console.log('Pending?:', pending)
  return (
    <button
      type="submit"
      className={cn(
        styles.button,
        'mt-4 w-full rounded-lg border border-white/10 px-8 py-4 text-lg font-semibold transition-all duration-300 ease-out hover:shadow-[0_4px_12px_rgba(79,70,229,0.3)] focus:ring-1 focus:ring-indigo-100'
      )}
    >
      {pending ? 'Sending' : 'Send Message'}
    </button>
  )
}
