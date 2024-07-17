import React from 'react'
import { MailIconAnimated } from './IconMail'

const ContactText = ({ className = '', ...props }) => {
  return (
    <div className={`flex flex-col items-center ${className}`} {...props}>
      <div className="relative flex items-center">
        <h1 className="text-[clamp(1.5rem,2vw+1rem,2.5rem)] font-extrabold text-white">Let&apos;s build something great !</h1>
        <MailIconAnimated className="-right-[clamp(4.5rem,5vw,4.5rem)] hidden h-[clamp(4.5rem,10vw,6rem)] sm:block" />
      </div>
    </div>
  )
}

export default ContactText
