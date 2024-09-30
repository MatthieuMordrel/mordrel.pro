import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/AccordionComp"

export default function FAQ({ className }: { className?: string }) {
  const faqData = [
    {
      id: 'item-1',
      question: 'Which services do you provide?',
      answer: 'We provide automation, data visualisation and other custom services aimed at empowering businesses. '
    },
    {
      id: 'item-2',
      question: 'How long does a service take to be completed?',
      answer:
        'Each service has its own requirements, and therefore the timeline may differ depending on its nature. However, a timeline is always agreed with the customer, including penalties in case of late delivery.'
    },
    {
      id: 'item-3',
      question: 'What is the cost of the service?',
      answer:
        'There is no fixed cost as we emphasize flexibility and a client-oriented approach where requirements may highly vary between customers. However each pricing is agreed beforehand with the client and tailored to represent accurately the difficulty and timeliness of the project.'
    },
    {
      id: 'item-4',
      question: 'Which data visualisation tools do you work with?',
      answer:
        'We ideally work with PowerBI to ensure the best quality/delivery time tradeoff, however we can create custom visualisations using various tools and framework in JavaScript or Python if necessary.'
    }
  ]
  return (
    <section className={className} id="FAQ">
      <h2 className="py-4 text-center text-2xl font-bold">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqData.map((item) => (
          <AccordionItem value={item.id} className="whitespace-pre-line border-b border-paneGrey" key={item.id}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
