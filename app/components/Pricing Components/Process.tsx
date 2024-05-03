import React from 'react'

const steps = [
  {
    number: '01',
    title: 'Send a Request',
    description: 'Email me with your requests, needs, and desires.'
  },
  {
    number: '02',
    title: 'Book a Call',
    description:
      'We schedule a call to discuss your requirements and service details.'
  },
  {
    number: '03',
    title: 'Strategy Development',
    description:
      'I think about the best tools, ideas, and processes to implement for your needs.'
  },
  {
    number: '04',
    title: 'Alignment',
    description:
      'We agree on the proposed solutions to ensure we are fully aligned.'
  },
  {
    number: '05',
    title: 'Delivery',
    description: 'I deliver the work according to our agreement and timeline.'
  },
  {
    number: '06',
    title: 'Review & Maintain',
    description:
      'We review the work, acknowledge its completion, and discuss future maintenance if needed.'
  }
]

const ConsultingProcess = () => {
  return (
    <div className="bg-techGrey px-4  text-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-center text-2xl font-bold">
          Process and Pricing
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="pane rounded-lg p-4 shadow-lg transition-transform hover:scale-105"
            >
              <h3 className="text-lg font-semibold text-techPurple">
                {step.number}. {step.title}
              </h3>
              <p className="mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ConsultingProcess
