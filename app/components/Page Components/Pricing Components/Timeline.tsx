'use client'

import { Process } from '../../../ui/Components/ProcessCard'
import { FileIcon, CheckIcon, RefreshCwIcon, NotebookPen, ShareIcon } from 'lucide-react'

const processTitles = 'General Process'

const processDescriptions = 'Overview of the timeline for a standard service workflow.'

const processSteps = [
  {
    icon: FileIcon,
    title: 'Request submission',
    description: 'Fill out the contact form with details about your project and the specific task(s).'
  },
  {
    icon: NotebookPen,
    title: 'Review and Approval',
    description: 'Your request will be reviewed and you will be contacted to gather more details about the project.'
  },
  {
    icon: CheckIcon,
    title: 'Agreement',
    description: 'Once an aggreement is reached about the objective, the timeline and the pricing, the project begins.'
  },
  {
    icon: RefreshCwIcon,
    title: 'Deployment',
    description: 'The automation, visualisation or service is developed, set up and deployed to your systems where smooth functioning is ensured.'
  },
  {
    icon: ShareIcon,
    title: 'Ongoing Monitoring and Maintenance',
    description: 'Depending on the agreed terms, we continue monitoring and maintaining the service, or ownership is given to your team.'
  }
]

export default function Timeline() {
  return (
    <section className="mx-auto w-full max-w-3xl py-6 sm:p-10">
      <header className="mb-6 mt-4 space-y-2">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{processTitles}</h1>
        <p className="text-gray-500 dark:text-gray-400">{processDescriptions}</p>
      </header>
      {<Process steps={processSteps} />}
    </section>
  )
}
