import { NextResponse, NextRequest } from 'next/server'

// This line specifies that the API route should be executed on the Edge runtime.
// The Edge runtime is a serverless environment provided by Vercel that allows for faster response times and better performance.
// By setting `export const runtime = 'edge'`, the API route will be executed on the Edge runtime instead of the default Node.js runtime.
// export const runtime = 'edge'

export async function GET() {
  const accessToken = process.env.POWERBI_ACCESS_TOKEN
  const reportId = '7f1fcb4e-b2ab-426d-8214-0525ca5203fa'
  const datasetId = '04c5bff4-1fdc-4b29-b2eb-9842d6957050'
  //   const expirationTime = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()

  const body = {
    reports: [{ id: reportId }],
    datasets: [{ id: datasetId }]
    // expirationTime
  }
  const response = await fetch('https://api.powerbi.com/v1.0/myorg/GenerateToken', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })

  // Check if the response is ok
  if (!response.ok) {
    return new NextResponse(JSON.stringify({ error: 'Failed to generate embed token' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  // Try to parse the response as JSON
  let data
  try {
    data = await response.json()
  } catch (error) {
    // If parsing fails, return an error message
    return new NextResponse(JSON.stringify({ error: 'Invalid response from Power BI API' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  //   console.log('Embed Token:', data.token)

  return new NextResponse(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
