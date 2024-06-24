'use client'

import { useState } from 'react'
import { Process } from '../../ui/Components/ProcessCard'
import {
  FileIcon,
  ClipboardCheckIcon,
  PowerIcon,
  CheckIcon,
  RefreshCwIcon,
  BarChartIcon,
  LineChartIcon,
  PieChartIcon,
  ShareIcon
} from 'lucide-react'

const processTitles = ['General Process']

const processDescriptions = ['Overview of the timeline for a standard service workflow.']

const processSteps = [
  [
    {
      icon: FileIcon,
      title: 'Request submission',
      description:
        'Fill out the contact form with details about your project and the specific task(s).',
      borderColor: 'border-[#9FD7CA]'
    },
    {
      icon: BarChartIcon,
      title: 'Review and Approval',
      description:
        'Your request will be reviewed by our team and we will contact you to gather more details about the project.',
      borderColor: 'border-[#81B9B6]'
    },
    {
      icon: CheckIcon,
      title: 'Agreement',
      description:
        'Once an aggreement is reached about the objective, the timeline and the pricing, we get to work.',
      borderColor: 'border-[#689CA0]'
    },
    {
      icon: RefreshCwIcon,
      title: 'Deployment',
      description:
        "Once the automation, visualisation or service is set up, we'll deploy it to your systems and ensure it's running smoothly.",
      borderColor: 'border-[#527F89]'
    },
    {
      icon: ShareIcon,
      title: 'Ongoing Monitoring and Maintenance',
      description:
        'Depending on the agreed terms, we continue monitoring and maintaining the service, or ownership is fully given to your team for further fine-tuning.',
      borderColor: 'border-[#406371]'
    }
  ]
]

export default function Timeline() {
  const [showAutomation, setShowAutomation] = useState(0)

  return (
    <div className="mx-auto w-full max-w-3xl p-6 sm:p-10">
      <div className="mb-6 mt-4 flex items-center justify-between">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {processTitles[showAutomation]}
          </h2>
          <p className="text-gray-500 dark:text-gray-400">{processDescriptions[showAutomation]}</p>
        </div>
      </div>
      {<Process steps={processSteps[showAutomation]} />}
    </div>
  )
}
