// Contact component
import FadeInEffect from '@/app/ui/Effects/AdvancedFadeIn'
import { Mail } from 'lucide-react'
import { Metadata } from 'next'
import ContactText from '../../components/Page Components/ContactComponents/ContactText'
import MailForm from '../../components/Page Components/ContactComponents/MailForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact us for your automation, data visualisation and custom needs.'
}

// Contact page
export default function ContactPage() {
  return (
    <main className="grid min-h-[100vh] grid-rows-[auto_auto_auto_auto_auto] gap-y-4 bg-techGrey px-5">
      <FadeInEffect>
        <ContactText className="pt-8 text-center" />
      </FadeInEffect>
      <FadeInEffect animationStyle="zoom">
        <MailForm className="mb-3 w-full max-w-[50rem]" />
        <section className="flex items-center justify-center gap-x-2">
          <Mail className="h-6 w-6"> </Mail>
          <p className="text-[clamp(0.75rem,2vw,1rem)] font-normal">
            Or contact me at&nbsp;
            <a href="mailto:matthieu@mordrel.pro" target="_blank" className="underline">
              matthieu@mordrel.pro
            </a>
          </p>
        </section>
      </FadeInEffect>
    </main>
  )
}
