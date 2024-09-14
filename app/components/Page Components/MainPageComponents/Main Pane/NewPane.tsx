'use client'
import { Pane } from '@ui/Effects/Pane'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, translateY: 20 },
  visible: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
}

const PaneValue = ({ className }: { className?: string }) => {
  const paneData = [
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
    <motion.section
      onUpdate={(latest) => console.log('Animation update:', latest)}
      className={`grid grid-cols-1 grid-rows-[1fr_1fr_1fr] gap-8 lg:grid-cols-3 lg:grid-rows-1 ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {paneData.map((pane, index) => (
        <motion.article
          key={index}
          className="h-full w-full"
          variants={itemVariants}
          // onUpdate={(latest) => console.log('Animation update:', latest)}
        >
          <Pane includeBorderBeam={false} className="h-full p-4">
            <h2 className="mb-2 font-bold lg:mb-5">{pane.title}</h2>
            <p className="textSmall">{pane.description}</p>
          </Pane>
        </motion.article>
      ))}
    </motion.section>
  )
}

export default PaneValue
