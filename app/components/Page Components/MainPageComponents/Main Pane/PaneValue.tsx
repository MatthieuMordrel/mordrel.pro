'use client'
import { Pane } from '@ui/Effects/Pane'

// Define the shape of each pane item
interface PaneItem {
  title: string
  description: string
}

const PaneValue: React.FC<{ className?: string }> = ({ className }) => {
  // Pane data array
  const paneData: PaneItem[] = [
    {
      title: 'Client-oriented approach',
      description: 'Each client and request is different. We listen to your needs and tailor our solutions to meet them.'
    },
    {
      title: 'Tools agnostic',
      description: 'We use and recommend tools to maximize efficiency for each case, ensuring value for customers.'
    },
    {
      title: 'Best Practices focused',
      description: 'Industry best practices are followed to aim for the highest quality in our products and services.'
    }
  ]

  return (
    <section className={`grid grid-cols-1 grid-rows-[1fr_1fr_1fr] gap-8 lg:grid-cols-3 lg:grid-rows-1 ${className}`}>
      {paneData.map((pane, index) => (
        <article key={index} className="h-full w-full">
          <Pane includeBorderBeam={false} className="h-full p-4">
            <h2 className="mb-2 font-bold lg:mb-5">{pane.title}</h2>
            <p className="textSmall">{pane.description}</p>
          </Pane>
        </article>
      ))}
    </section>
  )
}

export default PaneValue
