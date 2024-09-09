'use client'
import { TextHighlight } from '@ui/Fonts/TextHighlight'
import { useEffect, useState } from 'react'
import PowerBIReportweb from './PowerBIWeb'

const PowerbiPage = () => {
  const [reportWidth, setReportWidth] = useState(0)

  useEffect(() => {
    // Set the initial reportWidth after the component mounts on the client
    setReportWidth(Math.min(window.innerWidth * 0.9, 1000)) // Use Math.max instead of min

    const handleResize = () => {
      setReportWidth(Math.min(window.innerWidth * 0.9, 1000)) // Use Math.max instead of min
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="mt-4 flex flex-col gap-y-4 text-center">
        <div>
          <TextHighlight className="textMedium">Standard Dashboard </TextHighlight>
          <p className="textSmall italic">Evolution of Electricity capacity & generation (based on 2023 IRENA data)</p>
        </div>
        <PowerBIReportweb
          title="Draft File - Electricity"
          width={reportWidth}
          height={reportWidth / 1.6}
          src="https://app.powerbi.com/view?r=eyJrIjoiYjFlZjkzODItYzRkZi00ODVkLWI1NWUtMWE1YmFjMTY4NzE3IiwidCI6ImE3YTRkNGE0LWZiMDctNDgxZC1iYWNmLWYyZWEzMjEyZDk5MSIsImMiOjl9"
          className="mx-auto"
        />
      </div>
    </main>
  )
}

export default PowerbiPage
