import React from 'react'
import { ChevronRight } from 'lucide-react'

interface Practice {
  text: string
  action?: () => void
}

interface DataVizBestPracticesProps {
  customPractices: Practice[]
  onPracticeClick?: (index: number) => void
}

const DataVizBestPractices: React.FC<DataVizBestPracticesProps> = ({
  customPractices,
  onPracticeClick
}) => {
  return (
    <div className="rounded-lg py-6">
      <ul className="space-y-3">
        {customPractices.map((practice, index) => (
          <li
            key={index}
            className="relative flex space-x-2 rounded py-2"
            onClick={() => {
              if (practice.action) {
                practice.action()
              } else if (onPracticeClick) {
                onPracticeClick(index)
              }
            }}
          >
            <ChevronRight className="text-techBlue" size={20} />
            <span className="flex-grow">{practice.text}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DataVizBestPractices
