'use client'

import { motion } from 'framer-motion'
import { SVGProps } from 'react'

interface ProcessCardProps {
  icon: React.ComponentType<SVGProps<SVGSVGElement>>
  title: string
  description: string
  borderColor: string
}

const childVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export const ProcessCard: React.FC<ProcessCardProps> = ({ icon: Icon, title, description, borderColor }) => (
  <motion.article
    variants={childVariant}
    className={`group relative flex items-start rounded-lg border-gray-800 bg-paneGrey p-6 shadow-sm outline-2  ${borderColor}`}
  >
    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full">
      <Icon className="h-6 w-6" />
    </span>
    <div className="ml-4">
      <h4 className="textMedium font-medium">{title}</h4>
      <p className="textSmall mt-2 text-gray-400">{description}</p>
    </div>
  </motion.article>
)

interface Step {
  // Type representing a React component that takes SVG props and returns an SVG element
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
  borderColor?: string
}

const defaultBorderColors = ['outline-[#9FD7CA]', 'outline-[#81B9B6]', 'outline-[#689CA0]', 'outline-[#527F89]', 'outline-[#406371]']

export const Process = ({ steps }: { steps: Step[] }) => (
  <section className="space-y-6">
    {steps.map((step, index) => (
      <ProcessCard
        key={index}
        icon={step.icon}
        title={step.title}
        description={step.description}
        borderColor={step.borderColor || defaultBorderColors[index % defaultBorderColors.length]}
      />
    ))}
  </section>
)
