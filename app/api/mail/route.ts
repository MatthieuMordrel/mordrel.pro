// pages/api/contact.js
import sendgrid from '@sendgrid/mail'
import { NextRequest, NextResponse } from 'next/server'

const apiKey = process.env.SENDGRID_API_KEY
if (!apiKey) {
  throw new Error('SENDGRID_API_KEY is not defined')
}
sendgrid.setApiKey(apiKey)

// Start of Selection
export async function POST(req: NextRequest) {
  if (req.method === 'POST') {
    const body = await req.json()
    const { email, message, firstName, lastName, company } = body

    const msg = {
      to: process.env.EMAIL_TO, // Your email address where you want to receive messages
      from: 'no-reply@mordrel.pro', // Use a verified sender
      subject: `New message from ${email}`,
      text: `First Name: ${firstName ? firstName : ''}\n\nLast Name: ${lastName ? lastName : ''}\n\nCompany: ${company ? company : ''}\n\nMessage: ${message}`,
      replyTo: email,
      headers: {
        'X-First-Name': firstName,
        'X-Last-Name': lastName,
        'X-Company': company || 'an unlisted company'
      }
    }

    try {
      await sendgrid.send(msg)
      return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 })
    } catch (error) {
      console.error(error)
      return NextResponse.json({ error: 'Error sending email' }, { status: 500 })
    }
  }
}
