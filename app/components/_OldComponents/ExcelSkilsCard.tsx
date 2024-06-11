// components/ExcelSkillsCard.js
import React from 'react'

const ExcelSkillsCard = () => {
  const skills = [
    {
      name: 'PowerPivot',
      description: 'Utilize advanced data model creation.'
    },
    {
      name: 'PowerQuery',
      description: 'Expert in data manipulation and automation.'
    },
    {
      name: 'VBA',
      description: 'Automate repetitive tasks and complex processes.'
    },
    {
      name: 'Dynamic Arrays',
      description: 'Leverage advanced functions like FILTER and BYROW for dynamic control over your spreadsheets.'
    }
  ]

  return (
    <div className="rounded-lg bg-paneGrey p-6 text-white shadow-lg">
      <h2 className="mb-4 text-lg font-semibold">Excel Mastery</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index} className="mb-2 flex items-start gap-2">
            <span className="h-6 w-6 flex-shrink-0 rounded-full bg-techGreen"></span>
            <div>
              <h3 className="font-semibold">{skill.name}</h3>
              <p className="text-sm text-white">{skill.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ExcelSkillsCard
