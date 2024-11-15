import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Lightbulb } from 'lucide-react'
import Link from 'next/link'

const ContactText = ({ className = '', ...props }) => {
  return (
    <header className={cn('relative flex flex-col gap-y-2', className)} {...props}>
      <div className="flex items-center justify-between gap-x-2">
        {/* <h1 className="textMedium bg-gradient-to-r from-techBlue to-techPurple bg-clip-text font-extrabold text-transparent md:tracking-wide"> */}
        <h1 className="textMedium font-extrabold md:tracking-wide">Get in Touch</h1>
      </div>
      <div className="flex items-center justify-between gap-y-2">
        <p className="text-start text-gray-400">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
        <Link href="https://calendly.com/matthieumordrel/introduction" target="_blank">
          <Button type="button" size="sm" variant="outline" className="bg-gray-200 text-gray-900 hover:bg-gray-300">
            <div className="flex items-center gap-x-2">
              <Lightbulb className="h-4 w-4" /> Or book a call !
            </div>
          </Button>
        </Link>
      </div>
    </header>
  )
}

export default ContactText
