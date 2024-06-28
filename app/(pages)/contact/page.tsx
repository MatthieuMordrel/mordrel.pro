// Contact component
import React from 'react'
import MailForm from '../../components/ContactComponents/MailForm'
import ContactText from '../../components/ContactComponents/ContactText'
import { MailIconAnimated } from '@/app/components/ContactComponents/IconMail'
import { Mail } from 'lucide-react'

// Contact page
export default function ContactPage() {
  return (
    <div className="grid min-h-[100vh] grid-rows-[auto_auto_auto_auto_auto] gap-y-4 bg-techGrey p-2">
      <ContactText className="mt-8 text-center" />
      <MailForm className="w-full max-w-[50rem] px-2" />
      <div className="flex items-center justify-center gap-x-2">
        <Mail className="h-6 w-6"> </Mail>
        <p className="text-[clamp(0.75rem,2vw,1rem)] font-semibold text-white">
          Or contact me at&nbsp;
          <a href="mailto:matthieu@mordrel.pro" target="_blank" className="underline">
            matthieu@mordrel.pro
          </a>
        </p>
      </div>
      <MailIconAnimated className="mx-auto h-[clamp(9rem,10vw,18rem)]" />
    </div>
  )
}
