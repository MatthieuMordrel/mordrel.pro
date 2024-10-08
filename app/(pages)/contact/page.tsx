// Contact component
import ContactText from '@/app/components/Page Components/ContactComponents/ContactText'
import MailForm from '@/app/components/Page Components/ContactComponents/Form/MailForm'
import FadeInEffect from '@/app/ui/Effects/AdvancedFadeIn'
import { Mail } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact us for your automation, data visualisation and custom needs.'
}

// Contact page
export default function ContactPage() {
  return (
    <FadeInEffect>
      <main className="mx-auto grid min-h-[100vh] max-w-[47.5rem] grid-rows-[auto_1fr] gap-y-10 px-5">
        <ContactText className="pt-8 text-center" />
        <div>
          <MailForm className="mb-3 w-full" />
          <section className="flex items-center justify-center gap-x-2">
            <Mail className="h-6 w-6"> </Mail>
            <p className="textSmall font-normal">
              Or contact me at&nbsp;
              <a href="mailto:matthieu@mordrel.pro" target="_blank" className="underline">
                matthieu@mordrel.pro
              </a>
            </p>
          </section>
        </div>
      </main>
    </FadeInEffect>
  )
}
