import { Button } from "@/components/ui/button";
import Link from "next/link";

export const MainPaneText: React.FC = () => {
  return (
    <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none whiteToGrey">
          Transform Your Data into Actionable Insights
        </h1>
        <p className="max-w-[600px] text-gray-400 md:text-xl mx-auto lg:mx-0">
          Expert Power BI Dashboards, Data Visualizations, and Automation Solutions
        </p>
      </div>
      <div className="w-full max-w-sm space-y-2 mx-auto lg:mx-0">
        <Link href="/contact" passHref>
          <Button className="w-full bg-gray-200 text-gray-900 hover:bg-gray-300" size="lg">
            Get a Free Consultation
          </Button>
        </Link>
      </div>
    </div>
  )
}