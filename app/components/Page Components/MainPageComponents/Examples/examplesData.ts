import { Axe, BarChartIcon, Brush, CircleGauge, LineChartIcon, LucideIcon, MonitorCheck, RefreshCcw, ScrollText, UserRoundCheck } from 'lucide-react'

// Define types for our data structures
type ProcessStep = {
  icon: LucideIcon
  title: string
  description: string
}

type ExamplesData = {
  processTitles: string[]
  processDescriptions: string[]
  processSteps: ProcessStep[][]
}

// Export the data
export const examplesData: ExamplesData = {
  processTitles: ['Data Visualization','Automation Solutions', 'Custom Development'],

  processDescriptions: [
    'Explore and analyze your data with powerful visualization.',
    'Eliminate manual work; automate for efficiency and accuracy.',
    'Need a specific service that does not fit in any category ?'
  ],

  processSteps: [
    // Data Visualization
    [
      {
        icon: Brush,
        title: 'Custom visualisation',
        description:
        'Give life to any visualisation through custom javascript-based and library-based visuals without being limited by standard tools.'
      },
      {
        icon: LineChartIcon,
        title: 'Excel visualisations',
        description: 'Create advanced Excel visuals and ensure minimizing the performance impact on your files.'
      },
      {
        icon: BarChartIcon,
        title: 'Sales & Financial Dashboards',
        description: 'Track main KPIs, compare performance across regions, and forecast trends with interactive Power BI dashboards'
      }
    ],
      // Automation
      [
        {
          icon: RefreshCcw,
          title: 'Automate your reports',
          description: 'Generate insightful financial reports by extracting, cleaning and formatting data from various sources.'
        },
        {
          icon: MonitorCheck,
          title: 'HR Onboarding',
          description: 'Automate the creation of employee records in HR systems and send welcome emails or documentation to new hires.'
        },
        {
          icon: UserRoundCheck,
          title: 'Customer Service Automation',
          description: 'Automate the handling of customer emails by reading, categorizing, and responding. Update data accodingly in your CRM.'
        }
      ],
    // Custom Development
    [
      {
        icon: ScrollText,
        title: 'API integration',
        description: 'Integrate any APIs, add concurrrency and ensure your data is always up to date.'
      },
      {
        icon: CircleGauge,
        title: 'Excel and PowerBI performance',
        description: 'Minimize refresh time for your PowerBI and Excel files through improved M code, file structure, DirectQuery and more.'
      },
      {
        icon: Axe,
        title: 'Competitive analysis',
        description:
          'Gather product pricing, stock levels, or real estate listings from competitor websites to provide data for analysis or investment decisions.'
      }
    ]
  ]
}
