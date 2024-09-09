'use client'

import { sendEmail } from '@actions/actions'
import { cn } from '@lib/utils'
import { useEffect, useState } from 'react'
import { useFormState } from 'react-dom'
import ButtonSubmit from './ButtonSubmit'
import FormField from './FormField'

const MailForm = ({ className }: { className?: string }) => {
  //The key will help remount the form which will reset the fields
  const [key, setKey] = useState(0)
  const [submissionMessage, formAction] = useFormState(sendEmail, null)

  useEffect(() => {
    if (submissionMessage?.message && !submissionMessage?.error) {
      // console.log(submissionMessage)
      // Reset the form by updating the key
      setKey((prevKey) => prevKey + 1)
    }
  }, [submissionMessage])

  return (
    <form key={key} action={formAction} className={cn('mx-auto', className)}>
      <div className="flex justify-between space-x-4">
        <FormField id="firstName" name="firstName" label="First Name" className="" />
        <FormField id="lastName" label="Last Name" name="lastName" className="" />
      </div>
      <FormField id="company" label="Company" name="company" />
      <FormField id="email" name="email" label="Email*" type="email" required />
      <FormField
        id="message"
        name="message"
        label="Message*"
        type="textarea"
        required
        className=""
        placeholder="Please tell us about your project, your goals and what you expect of the service !"
      />
      <ButtonSubmit />
      <div className="mt-4 h-6">
        {submissionMessage?.message && <p className="text-center text-green-400">{submissionMessage.message}</p>}
        {submissionMessage?.error && <p className="text-center text-red-500">{submissionMessage.error}</p>}
      </div>
    </form>
  )
}

export default MailForm
