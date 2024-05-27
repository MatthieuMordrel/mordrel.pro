'use client'
import React, { useState, useEffect } from 'react'
import ExcelContent from './ExcelContent'
import 'animate.css/animate.min.css'

const skills = [
  {
    name: 'Advanced Formulas',
    content: 'Complex Excel formulas for data analysis and calculations'
  },
  {
    name: 'VBA',
    content: <ExcelContent />
  },
  {
    name: 'Automated Scripts',
    content: 'Scripts that automate repetitive tasks and complex workflows'
  },
  { name: 'Power Pivot', content: 'Data modeling and powerful data analysis' },
  { name: 'Power Query', content: 'Data connection and preprocessing in Excel' }
]

const ExcelProposition = () => {
  const [activeSkill, setActiveSkill] = useState(skills[0])
  const [animationClass, setAnimationClass] = useState('')

  useEffect(() => {
    setAnimationClass('animate__fadeInRight')
    const timer = setTimeout(() => setAnimationClass(''), 1000) // Reset animation class after 1 second
    return () => clearTimeout(timer)
  }, [activeSkill])

  return (
    <div className="flex flex-col items-center py-20 text-white">
      <h1 className="mb-16 text-lg font-bold md:text-xl lg:text-2xl">Maximize the power of Excel</h1>
      <div className="mb-4 flex space-x-2">
        {skills.map((skill) => (
          <button key={skill.name} className={`rounded-lg border-2 px-4 py-2 text-sm font-medium ${activeSkill.name === skill.name ? 'border-techPurple bg-paneGrey text-techPurple' : 'border-borderGrey text-white'}`} onClick={() => setActiveSkill(skill)}>
            {skill.name}
          </button>
        ))}
      </div>
      <div className={`animate__animated ${animationClass} rounded-lg border-2 border-techPurple p-4`}>
        <h3 className="text-lg font-semibold">{activeSkill.name}</h3>
        <div>{activeSkill.content}</div>
      </div>
    </div>
  )
}

export default ExcelProposition
