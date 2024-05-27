'use client'

import { useState } from 'react'
import FormField from './FormField'

const MailForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const [company, setCompany] = useState('')

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setStatus('Sending...')
    const res = await fetch('http://localhost:3000/api/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ firstName, lastName, email, message, company })
    })

    const { error } = await res.json()
    if (error) {
      setStatus('Error sending message')
    } else {
      setStatus('Message sent!')
      setFirstName('')
      setLastName('')
      setEmail('')
      setMessage('')
      setCompany('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-4xl px-12 ">
      <div className="flex justify-between space-x-4">
        <FormField id="firstName" label="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-1/2" />
        <FormField id="lastName" label="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-1/2" />
      </div>
      <FormField id="company" label="Company" value={company} onChange={(e) => setCompany(e.target.value)} />
      <FormField id="email" label="Email (required)" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <FormField id="message" label="Message (required)" type="textarea" value={message} onChange={(e) => setMessage(e.target.value)} required placeholder="Please tell us about your project, your goals and what you expect of the service !" />

      <button type="submit" className="mt-4 w-full transform rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-offset-2">
        Send Message
      </button>
      <p className="mt-6 text-center text-lg font-medium text-gray-200">{status}</p>
    </form>
  )
}

export default MailForm
