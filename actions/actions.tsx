'use server'

import sendgrid from '@sendgrid/mail'
import { revalidatePath } from 'next/cache'

const apiKey = process.env.SENDGRID_API_KEY
if (!apiKey) {
  throw new Error('SENDGRID_API_KEY is not defined')
}
sendgrid.setApiKey(apiKey)

export async function sendEmail(prevState: any, formData: FormData) {
  // console.log(formData)
  const firstName = formData.get('firstName') as string
  const lastName = formData.get('lastName') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string
  const company = formData.get('company') as string

  console.log(firstName, lastName, email, message)

  if (!email) {
    return { error: 'Email is required' }
  }

  const to = process.env.EMAIL_TO
  if (!to) {
    console.error('EMAIL_TO environment variable is not set')
    return { error: 'Server configuration error' }
  }

  const msg = {
    to,
    from: 'no-reply@mordrel.pro',
    subject: `New message from ${email}`,
    text: `First Name: ${firstName || ''}\n\nLast Name: ${lastName || ''}\n\nCompany: ${company || ''}\n\nMessage: ${message}`,
    replyTo: email,
    headers: {
      'X-First-Name': firstName || '',
      'X-Last-Name': lastName || '',
      'X-Company': company || 'an unlisted company'
    }
  }

  try {
    // console.log('Entered the try block')
    await sendgrid.send(msg)
    revalidatePath('/contact')
    return { message: 'Thank you! Your message has been sent successfully !' }
  } catch (error: unknown) {
    console.error('SendGrid error:', error)
    if (error instanceof Error && 'response' in error) {
      console.error((error as { response: { body: unknown } }).response.body)
    }
    return { error: 'Sorry, there was an error sending your message. Please try again later or contact me at matthieu@mordrel.pro' }
  }
}
