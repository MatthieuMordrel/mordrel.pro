import { motion } from 'framer-motion'

interface ScrollTriggeredComponentProps {
  className?: string
  children: React.ReactNode
}

export const ScrollTriggered: React.FC<ScrollTriggeredComponentProps> = ({ className = '', children }) => {
  return (
    <motion.div className={className} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      {children}
    </motion.div>
  )
}
