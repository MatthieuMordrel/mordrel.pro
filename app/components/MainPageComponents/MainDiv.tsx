// components/MainDiv.js
import React from 'react'

const MainDiv = ({ className }: { className?: string }) => {
  return (
    <div className="flex min-h-60 flex-col p-10 text-center">
      <h1 className="pb-10 text-6xl">
        <span className="block py-4">
          Automate <span className="font-bold text-techPurple">Once</span>
        </span>
        <span className="py-4">
          Reuse <span className="font-bold text-techPurple">Forever</span>
        </span>
      </h1>
      <div className="font-bold">
        <p className="space-y-2">
          <span className="block">The world of tomorrow leverages automations everywhere.</span>
          <span className="block">Book today a starting session and we&apos;ll analyse all the potential for automating your work.</span>
          <span className="block">
            Discover our <span className="text-white">Excel automation, PowerBI propositions, API integrations and tailored solutions.</span>
          </span>
        </p>
      </div>
    </div>
  )
}

export default MainDiv
