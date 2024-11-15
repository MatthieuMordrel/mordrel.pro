// Contact component
import ContactText from '@/app/components/Page Components/ContactComponents/ContactText'
import MailForm from '@/app/components/Page Components/ContactComponents/Form/MailForm'
import FadeInEffect from '@/app/ui/Effects/AdvancedFadeIn'
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
        </div>
      </main>
    </FadeInEffect>
  )
}
