// components/MainDiv.js
import React from 'react'

const AutomateOnce = ({ className }: { className?: string }) => {
  return (
    <div className="flex w-screen flex-col p-10 text-center">
      <h1 className=" text-3xl">
        <span className="block py-4">
          Automate <span className=" text-techPurple">Once</span>, Reuse{' '}
          <span className=" text-techPurple">Forever</span>
        </span>
      </h1>
    </div>
  )
}

export default AutomateOnce
