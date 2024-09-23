'use client'

import { motion } from 'framer-motion'
import { Promise } from './promisesData'
import { Spark } from './Spark'

interface PromiseCardProps {
  promise: Promise
  index: number
  isHovered: boolean
  onHoverStart: () => void
  onHoverEnd: () => void
}

export const PromiseCard: React.FC<PromiseCardProps> = ({ promise, index, isHovered, onHoverStart, onHoverEnd }) => {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-lg bg-gradient-to-br ${promise.color} p-6 text-white shadow-lg`}
      whileHover={{ scale: 1.05, rotate: [0, -1, 1, -1, 0], transition: { duration: 0.3 } }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
    >
      <div className="mb-4 flex items-center justify-between">
        <promise.icon className="h-8 w-8" />
        <span className="text-2xl font-bold">{index + 1}</span>
      </div>
      <h3 className="mb-2 text-xl font-semibold">{promise.title}</h3>
      <p className="text-sm opacity-90">{promise.description}</p>
      {isHovered && (
        <>
          <Spark style={{ top: '10%', left: '10%' }} />
          <Spark style={{ top: '20%', right: '20%' }} />
          <Spark style={{ bottom: '15%', left: '30%' }} />
          <Spark style={{ bottom: '10%', right: '15%' }} />
        </>
      )}
    </motion.div>
  )
}
