// Contact component
import React from 'react'
import MailForm from '../../components/ContactComponents/MailForm'
import ContactText from '../../components/ContactComponents/ContactText'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

// Contact page
export default function ContactPage() {
  return (
    <div className="flex h-[100vh] flex-col bg-techGrey">
      <div className="py-12">
        <ContactText />
      </div>
      <div className="">
        <MailForm />
      </div>
      <div className="mb-4 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-2 rounded-lg bg-techGrey p-4 shadow-lg">
          <p className="text-lg font-semibold text-white">Or contact me directly at: </p>
          <div className="flex items-center space-x-2">
            <EnvelopeIcon className="h-8 w-8 text-techBlue" />
            <span className="text-lg font-semibold text-techBlue">matthieu@mordrel.pro</span>
          </div>
        </div>
      </div>
    </div>
  )
}
