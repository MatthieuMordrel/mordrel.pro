import React from 'react'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

const ContactText = () => {
  return (
    <div className="mx-auto max-w-4xl rounded-lg p-12 ">
      <h2 className="animate-pulse mb-4 text-4xl font-extrabold text-white">Reach Out to Us!</h2>
      <p className="mb-6 text-lg italic text-white">We are eager to connect with you! Whether you want to improve your business, have questions about our services, or just want to chat, we are here to help. Drop us a message through the form on this page.</p>
      <div className="mb-4 flex items-center">
        <PhoneIcon className="animate-bounce mr-2 h-8 w-8 text-techBlue" />
        <span className="text-lg font-semibold text-white">+33 6 52 17 27 13</span>
      </div>
      <div className="mb-4 flex items-center">
        <EnvelopeIcon className="animate-bounce mr-2 h-8 w-8 text-techBlue" />
        <span className="text-lg font-semibold text-white">matthieu@mordrel.pro</span>
      </div>
    </div>
  )
}

export default ContactText
