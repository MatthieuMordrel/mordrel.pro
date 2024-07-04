'use client'

import ButtonsList from '@/app/ui/Components/ButtonsList'
import { useState } from 'react'
import { Process } from '@/app/ui/Components/ProcessCard'
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
import { TextHighlight } from '@/app/ui/Fonts/TextHighlight'
import FadeInEffect from '@/app/ui/Effects/AdvancedFadeIn'

const processTitles = ['Automation Solutions', 'Data Visualization', 'Custom Development']

const processDescriptions = [
  'Eliminate manual work; automate for efficiency and accuracy.',
  'Explore and analyze your data with powerful visualization.',
  'Need a specific service that does not fit in any category ?'
]

const processSteps = [
  //Automation
  [
    {
      icon: FileIcon,
      title: 'Sync Sales data',
      description:
        'Automatically sync new sales data from your CRM to your ERP system in real-time, reducing manual entry errors.'
    },
    {
      icon: ClipboardCheckIcon,
      title: 'Automate your reports',
      description:
        'Generate beautiful monthly financial reports automatically by extracting and formatting data from various spreadsheets.'
    },
    {
      icon: PowerIcon,
      title: 'Competitive analysis',
      description:
        'Gather product pricing, stock levels, or real estate listings from various websites to provide data for competitive analysis or investment decisions.'
    },
    {
      icon: ShareIcon,
      title: 'Simplify your Excel files',
      description:
        'Improve performance of your Excel reports by optimizing formula and data management.'
    }
  ],
  //Data Visualisation
  [
    {
      icon: BarChartIcon,
      title: 'Sales Dashboards',
      description:
        'Track daily sales metrics, compare performance across regions, and forecast trends with interactive Power BI dashboards'
    },
    {
      icon: PieChartIcon,
      title: 'Financials dahsboards',
      description:
        'Crate financials dashboards with interactive profit and loss, balance sheet or cash flows statements.'
    },
    {
      icon: LineChartIcon,
      title: 'Excel visualisations',
      description:
        'Ensure using proper visualisation and improve the performance of your files when using visuals.'
    },
    {
      icon: ShareIcon,
      title: 'Custom visualisation',
      description:
        'Give life to any visualisation through custom javascript-based visuals without being limited by standard tools.'
    }
  ],
  //Custom Development
  [
    {
      icon: BarChartIcon,
      title: 'User simulation',
      description:
        'Create scripts to perform testing on your website to ensure correct service correctly across different browsers and devices.'
    },
    {
      icon: LineChartIcon,
      title: 'API integration',
      description:
        'Remove manual work by using programatic language to retrieve data from your software.'
    },
    {
      icon: PieChartIcon,
      title: 'Excel and PowerBI performance',
      description:
        'Minimize refresh time for your PowerBI and Excel files through improved M code or file structure.'
    },
    {
      icon: ShareIcon,
      title: 'AI finetuning',
      description:
        'Get access to the data of your organisation in a efficient and interactive way through AI finetuning, embeddings an AI assistants.'
    }
  ]
]

export default function Examples() {
  const [showAutomation, setShowAutomation] = useState(0)

  return (
    <div>
      <TextHighlight className="title-responsive mb-8 text-center">
        Simply, what do we do ?
      </TextHighlight>
      <FadeInEffect>
        <div className="mx-auto w-full max-w-3xl p-6 pt-0 sm:p-10 sm:pt-0">
          <ButtonsList
            classButton="px-4 py-2"
            items={processTitles}
            onActiveIndexChange={setShowAutomation}
            className="flex justify-center gap-x-2"
          />

          <div className="mb-6 mt-4 flex items-center justify-between">
            <div className="space-y-2">
              <h2 className="block text-2xl font-bold tracking-tight sm:text-3xl">
                {processTitles[showAutomation]}
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                {processDescriptions[showAutomation]}
              </p>
            </div>
          </div>
          {<Process steps={processSteps[showAutomation]} />}
        </div>
      </FadeInEffect>
    </div>
  )
}
