import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const MainPaneText: React.FC = () => {
  return (
    <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
      <div className="space-y-2">
        <h1 className="whiteToGrey text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Transform Your Data into Actionable Insights</h1>
        <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl lg:mx-0">
          Achieve 30–70% time savings on your reporting time, satisfaction garanteed or free of charge.
          {/* Expert Power BI Dashboards, Data Visualizations, and Automation Solutions */}
        </p>
      </div>
      <div className="mx-auto w-full max-w-sm space-y-2 lg:mx-0">
        <Link href="https://calendly.com/matthieumordrel/introduction" passHref>
          <Button className="w-full bg-gray-200 text-gray-900 hover:bg-gray-300" size="lg">
            Get a Free Consultation
          </Button>
        </Link>
      </div>
    </div>
  )
}
