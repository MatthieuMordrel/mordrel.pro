// components/MainDiv.js
import React from 'react'
import AutomateOnce from './AutomateOnce'
import { Link } from 'lucide-react'
import { Button } from '@/app/ui/Components/Button'

const MainPane = ({ className }: { className?: string }) => {
  return (
    <div className="flex min-h-60 flex-col space-y-10 p-10 text-center">
      <AutomateOnce className="" />
      <p className="space-y-2 font-semibold text-white">
        <span className="block">
          Streamline your workflows, make data-driven decisions, and elevate your business
        </span>
        <span className="block">
          Do not get behind, book today a starting session and we&apos;ll analyse all the potential
          for automating your work.
        </span>
      </p>
    </div>
  )
}

export default MainPane
