'use client'
// debugger
import ShimmerButton from '@ui/Components/Aceternity/ShimmerButton'
import { useState } from 'react'
import { PowerBIReport } from './PowerBIReport'

const FetchTest = () => {
  const [embedToken, setEmbedToken] = useState('')
  const [expirationTime, setExpirationTime] = useState('')

  const fetchData = async () => {
    try {
      const response = await fetch('/api/PowerBI')
      const data = await response.json()
      setEmbedToken(data.token)
      setExpirationTime(data.expiration)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return (
    <div className="mt-8 flex flex-col items-center justify-center">
      <ShimmerButton label=" Get Embed Token" onClick={fetchData} className="rounded-md bg-techBlue px-4 py-2 hover:bg-techGreen" />
      {embedToken && (
        <div>
          <p className="mt-4 rounded-md bg-paneGrey p-6 text-primaryText">
            <span className="break-all">Embed Token: {embedToken}</span>
            <br />
            <span className="break-all text-red-600">Expiration Time: {expirationTime}</span>
          </p>
          <div className="mx-auto">
            <PowerBIReport
            // accessToken="embedToken"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default FetchTest
