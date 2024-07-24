import React from 'react'
import { MailIconAnimated } from './IconMail'

const ContactText = ({ className = '', ...props }) => {
  return (
    <header className={`relative flex items-center justify-center ${className}`} {...props}>
      <h1 className="text-[clamp(1.4rem,2vw+1rem,2.5rem)] font-extrabold tracking-wide text-white">Let&apos;s build something great !</h1>
      <MailIconAnimated className="-right-[clamp(4.5rem,5vw,4.5rem)] hidden h-[clamp(4.5rem,10vw,6rem)] sm:block" />
    </header>
  )
}

export default ContactText
