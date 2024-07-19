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
  UserRoundCheck,
  BarChartIcon,
  LineChartIcon,
  PieChartIcon,
  ShareIcon,
  ScrollText,
  CircleGauge,
  Brush,
  RefreshCcw,
  Axe,
  MonitorCheck
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
    // {
    //   icon: FileIcon,
    //   title: 'Sync Sales data',
    //   description: 'Automatically sync new sales data from your CRM to your ERP system in real-time, reducing manual entry errors.'
    // },
    {
      icon: RefreshCcw,
      title: 'Automate your reports',
      description: 'Generate beautiful periodic financial reports by extracting and formatting data from various sources.'
    },
    {
      icon: Axe,
      title: 'Competitive analysis',
      description:
        'Gather product pricing, stock levels, or real estate listings from competitor websites to provide data for analysis or investment decisions.'
    },
    {
      icon: MonitorCheck,
      title: 'Simplify your Excel files',
      description: 'Retrieve the control over your Excel files by optimizing formula and data management.'
    }
  ],
  //Data Visualisation
  [
    {
      icon: BarChartIcon,
      title: 'Sales & Financial Dashboards',
      description: 'Track main KPIs, compare performance across regions, and forecast trends with interactive Power BI dashboards'
    },
    // {
    //   icon: PieChartIcon,
    //   title: 'Financials dahsboards',
    //   description:
    //     'Crate financials dashboards with interactive profit and loss, balance sheet or cash flows statements.'
    // },
    {
      icon: LineChartIcon,
      title: 'Excel visualisations',
      description: 'Create advanced Excel visuals and ensure minimizing the performance impact on your files.'
    },
    {
      icon: Brush,
      title: 'Custom visualisation',
      description: 'Give life to any visualisation through custom javascript-based visuals without being limited by standard tools.'
    }
  ],
  //Custom Development
  [
    {
      icon: UserRoundCheck,
      title: 'User simulation',
      description: 'Create custom scripts to perform testing on your website to ensure correct service across different browsers and devices.'
    },
    {
      icon: ScrollText,
      title: 'API integration',
      description: 'Remove manual work by using programatic language to retrieve data from your software.'
    },
    {
      icon: CircleGauge,
      title: 'Excel and PowerBI performance',
      description: 'Minimize refresh time for your PowerBI and Excel files through improved M code or file structure.'
    }
    // {
    //   icon: ShareIcon,
    //   title: 'AI finetuning',
    //   description:
    //     'Get access to the data of your organisation in a efficient and interactive way through AI finetuning, embeddings an AI assistants.'
    // }
  ]
]

export default function Examples() {
  const [showAutomation, setShowAutomation] = useState(0)

  return (
    <>
      <TextHighlight className="title-responsive mb-8 text-center">Simply, what do we do ?</TextHighlight>
      <FadeInEffect className="mx-auto w-full max-w-3xl p-6 pt-0 sm:p-10 sm:pt-0">
        <ButtonsList classButton="px-4 py-2" items={processTitles} onActiveIndexChange={setShowAutomation} className="flex justify-center gap-x-2" />

        <div className="mb-6 mt-4 flex items-center justify-between">
          <div className="space-y-2">
            <h2 className="block text-2xl font-bold tracking-tight sm:text-3xl">{processTitles[showAutomation]}</h2>
            <p className="text-gray-500 dark:text-gray-400">{processDescriptions[showAutomation]}</p>
          </div>
        </div>
        <Process steps={processSteps[showAutomation]} />
      </FadeInEffect>
    </>
  )
}
