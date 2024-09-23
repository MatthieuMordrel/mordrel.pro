'use client'

import { useState } from 'react'
import { PromiseCard } from './PromiseCard'
import { promises } from './promisesData'

export default function OurPromise() {
  const [hoveredPromise, setHoveredPromise] = useState<number | null>(null)

  return (
    <div className="fullheight flex flex-col justify-center bg-gradient-to-br p-8">
      <h2 className="mb-12 text-center text-4xl font-bold">Our Promise to you</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {promises.map((promise, index: number) => (
          <PromiseCard
            key={promise.title}
            promise={promise}
            index={index}
            isHovered={hoveredPromise === index}
            onHoverStart={() => setHoveredPromise(index)}
            onHoverEnd={() => setHoveredPromise(null)}
          />
        ))}
      </div>
    </div>
  )
}
