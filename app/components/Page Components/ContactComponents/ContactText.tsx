import { cn } from '@/lib/utils'

const ContactText = ({ className = '', ...props }) => {
  return (
    <header className={cn('relative flex flex-col gap-y-2', className)} {...props}>
      <div className="flex items-center">
        {/* <h1 className="textMedium bg-gradient-to-r from-techBlue to-techPurple bg-clip-text font-extrabold text-transparent md:tracking-wide"> */}
        <h1 className="textMedium font-extrabold md:tracking-wide">Get in Touch</h1>
        {/* <MailIconAnimated className="-right-[clamp(4.5rem,5vw,4.5rem)] hidden h-[clamp(4.5rem,10vw,6rem)] sm:block" /> */}
      </div>
      <p className="text-start text-gray-400">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
    </header>
  )
}

export default ContactText
