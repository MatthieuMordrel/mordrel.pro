import { SVGProps } from 'react'
import { Pane } from '../Effects/Pane'

interface ProcessCardProps {
  icon: React.ComponentType<SVGProps<SVGSVGElement>>
  title: string
  description: string
  borderColor: string
}

export const ProcessCard: React.FC<ProcessCardProps> = ({
  icon: Icon,
  title,
  description,
  borderColor
}) => (
  <div className="group relative rounded-lg bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-paneGrey">
    <div className="flex items-start">
      <div className="flex-shrink-0 items-center self-stretch">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full ${borderColor} text-white`}
        >
          <Icon className="h-6 w-6" />
        </div>
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="mt-2 text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </div>
    <div
      className={`absolute inset-0 rounded-lg border-2 ${borderColor} opacity-0 group-hover:opacity-100`}
    />
  </div>
)

interface Step {
  icon: React.ElementType
  title: string
  description: string
}

const borderColors = [
  'border-[#9FD7CA]',
  'border-[#77C1C7]',
  'border-[#5CA8C4]',
  'border-[#598DBB]'
]

export const Process = ({ steps }: { steps: Step[] }) => (
  <div className="space-y-6">
    {steps.map((step, index) => (
      <ProcessCard
        key={index}
        icon={step.icon as React.ComponentType<React.SVGProps<SVGSVGElement>>}
        title={step.title}
        description={step.description}
        borderColor={borderColors[index % borderColors.length]}
      />
    ))}
  </div>
)
