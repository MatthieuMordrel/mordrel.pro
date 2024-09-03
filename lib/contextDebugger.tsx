'use client'

import { useData } from '@lib/dataContext'

const ContextDebugger = () => {
  const context = useData()

  return (
    <div className="fixed bottom-0 right-0 m-4 max-w-sm overflow-auto rounded bg-gray-800 p-4 text-white shadow-lg">
      <h2 className="mb-2 text-lg font-bold">Context Values:</h2>
      <pre className="text-xs">{JSON.stringify(context, null, 2)}</pre>
    </div>
  )
}

export default ContextDebugger
