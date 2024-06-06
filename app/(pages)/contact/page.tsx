// Contact component
import React from 'react'
import MailForm from '../../components/ContactComponents/MailForm'
import ContactText from '../../components/ContactComponents/ContactText'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { MailIconAnimated } from '@/app/components/ContactComponents/IconMail'

// Contact page
export default function ContactPage() {
  return (
    <div className="flex min-h-[100vh] flex-col space-y-2 bg-techGrey">
      <div className="mx-auto mt-12">
        <ContactText />
      </div>
      <div className="flex w-full justify-between">
        <div className="w-[60%] ">
          <MailForm className="w-full" />
        </div>
        <div className="w-[40%]">
          <MailIconAnimated className="max-h-[33rem]" />
        </div>
      </div>
      <div className="mb-4 flex items-center justify-center">
        <div className="mt-10 flex flex-row items-center space-x-2 rounded-lg p-4">
          <EnvelopeIcon className="h-6 w-6"> </EnvelopeIcon>
          <p className="text-lg font-semibold text-white">
            Or contact me directly at&nbsp;
            <a href="mailto:matthieu@mordrel.pro" target="_blank" className="text-lg font-semibold underline">
              matthieu@mordrel.pro
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
