// Contact component
import React from 'react'
import MailForm from './MailForm'
import ContactText from './ContactText'

// Contact page
export default function ContactPage() {
  return (
    <div className="flex h-[100vh] bg-techGrey">
      <div className="w-1/2">
        <ContactText />
      </div>
      <div className="w-1/2">
        <MailForm />
      </div>
    </div>
  )
}
