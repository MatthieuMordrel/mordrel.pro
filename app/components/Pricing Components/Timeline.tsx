'use client'

import { Process } from '../../ui/Components/ProcessCard'
import { FileIcon, CheckIcon, RefreshCwIcon, NotebookPen, ShareIcon } from 'lucide-react'

const processTitles = 'General Process'

const processDescriptions = 'Overview of the timeline for a standard service workflow.'

const processSteps = [
  {
    icon: FileIcon,
    title: 'Request submission',
    description: 'Fill out the contact form with details about your project and the specific task(s).',
    borderColor: 'border-[#9FD7CA]'
  },
  {
    icon: NotebookPen,
    title: 'Review and Approval',
    description: 'Your request will be reviewed by our team and we will contact you to gather more details about the project.',
    borderColor: 'border-[#81B9B6]'
  },
  {
    icon: CheckIcon,
    title: 'Agreement',
    description: 'Once an aggreement is reached about the objective, the timeline and the pricing, we get to work.',
    borderColor: 'border-[#689CA0]'
  },
  {
    icon: RefreshCwIcon,
    title: 'Deployment',
    description: 'The automation, visualisation or service is developed, set up and deployed to your systems where we ensure smooth functioning.',
    borderColor: 'border-[#527F89]'
  },
  {
    icon: ShareIcon,
    title: 'Ongoing Monitoring and Maintenance',
    description: 'Depending on the agreed terms, we continue monitoring and maintaining the service, or ownership is given to your team.',
    borderColor: 'border-[#406371]'
  }
]

export default function Timeline() {
  return (
    <section className="mx-auto w-full max-w-3xl p-6 sm:p-10">
      <header className="mb-6 mt-4 space-y-2">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{processTitles}</h1>
        <p className="text-gray-500 dark:text-gray-400">{processDescriptions}</p>
      </header>
      {<Process steps={processSteps} />}
    </section>
  )
}
