'use client'

import { useState } from 'react'

const MailForm = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setStatus('Sending...')
    const res = await fetch('http://localhost:3000/api/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, message })
    })

    const { error } = await res.json()
    if (error) {
      setStatus('Error sending message')
    } else {
      setStatus('Message sent!')
      setEmail('')
      setMessage('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-4xl rounded-lg bg-white p-12 shadow-lg">
      <div className="mb-6">
        <label htmlFor="email" className="block text-lg font-medium text-gray-700">
          Email:
        </label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 block w-full rounded-md border-gray-300 text-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg" />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-lg font-medium text-gray-700">
          Message:
        </label>
        <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required className="mt-1 block h-64 w-full rounded-md border-gray-300 text-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"></textarea>
      </div>
      <button type="submit" className="w-full rounded-md bg-indigo-600 px-6 py-3 text-lg font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        Send
      </button>
      <p className="mt-6 text-center text-lg text-gray-600">{status}</p>
    </form>
  )
}

export default MailForm
