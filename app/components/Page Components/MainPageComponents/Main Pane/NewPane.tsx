'use client'
import { Pane } from '@/app/ui/Effects/Pane'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 1.5
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
      description: 'We are a client-first company. We listen to your needs and tailor our solutions to meet them.'
    },
    {
      title: 'Tools agnostic',
      description: 'We use and recommend tools based on the needs of each case, maximizing value for our customers.'
    },
    {
      title: 'Best Practices focused',
      description: 'Our team follows industry best practices to ensure the highest quality of our products and services.'
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
