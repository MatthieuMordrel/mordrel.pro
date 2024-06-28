import React from 'react'

const ContactText = ({ ...props }) => {
  return (
    <div className="text-white" {...props}>
      <h1 className="mb-4 text-[clamp(1.5rem,2vw+1rem,2.5rem)] font-extrabold text-white">
        Let&apos;s build something great together !
      </h1>
      <p className="text-md text-white">
        Fill the form below or send a mail directly and we&apos;ll get back to you as soon as
        possible
      </p>
    </div>
  )
}

export default ContactText
