// components/PowerBISkillsCard.js
import React from 'react'

const PowerBISkillsCard = () => {
  const skills = [
    {
      name: 'DAX',
      description: 'Advanced formula language for custom calculations.'
    },
    {
      name: 'Data Visualization',
      description: 'Create compelling reports and visual insights.'
    },
    {
      name: 'Data Modeling',
      description: 'Build robust data models for better analysis.'
    },
    {
      name: 'PowerBI Service',
      description: 'Share insights with dashboards and reports online.'
    }
  ]

  return (
    <div className=" text-white ">
      <h2 className="text-lg font-semibold text-white">PowerBI Proficiency</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index} className="mb-2 flex items-center gap-2">
            <span className="mr-3 h-6 w-6 flex-shrink-0 rounded-full bg-textGrey"></span>
            <div>
              <h3 className="font-semibold text-white">{skill.name}</h3>
              <p className="text-sm text-textGrey">{skill.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PowerBISkillsCard
