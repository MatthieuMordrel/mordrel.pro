// Contact component
import React from 'react'
import MailForm from '../../components/ContactComponents/MailForm'
import ContactText from '../../components/ContactComponents/ContactText'
import { Mail } from 'lucide-react'
import FadeInEffect from '@/app/ui/Effects/AdvancedFadeIn'

// Contact page
export default function ContactPage() {
  return (
    <div className="grid min-h-[100vh] grid-rows-[auto_auto_auto_auto_auto] gap-y-4 bg-techGrey">
      <FadeInEffect>
        <ContactText className="py-8 text-center" />
      </FadeInEffect>
      <FadeInEffect animationStyle="zoom">
        <MailForm className="w-full max-w-[50rem] px-2" />
        <div className="flex items-center justify-center gap-x-2">
          <Mail className="h-6 w-6"> </Mail>
          <p className="text-[clamp(0.75rem,2vw,1rem)] font-normal">
            Or contact me at&nbsp;
            <a href="mailto:matthieu@mordrel.pro" target="_blank" className="underline">
              matthieu@mordrel.pro
            </a>
          </p>
        </div>
      </FadeInEffect>
    </div>
  )
}
