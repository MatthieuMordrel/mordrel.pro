import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/ui/Components/AccordionComp'

export default function FAQ({ className }: { className?: string }) {
  const faqData = [
    {
      id: 'item-1',
      question: 'Is it accessible?',
      answer: 'Yes. It adheres to the WAI-ARIA design pattern.'
    },
    {
      id: 'item-2',
      question: 'Is it styled?',
      answer: 'Yes. It comes with default styles that matches the other components&apos; aesthetic.'
    },
    {
      id: 'item-3',
      question: 'Is it animated?',
      answer: 'Yes. It&apos;s animated by default, but you can disable it if you prefer.'
    }
  ]
  return (
    <div className={className}>
      <h2 className="py-4 text-center text-2xl font-bold">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqData.map((item) => (
          <AccordionItem value={item.id} className="border-b border-paneGrey" key={item.id}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
