import { PlayrightIcon } from '../../../data/Sotftware'
import HoverBox from './HoverBox'
import Image from 'next/image'
import IconAndText from '@/app/components/MainPageComponents/Main Pane/IconAndText'
import { BarChart, HandCoins, MonitorCheck } from 'lucide-react'
import { Pane } from '@/app/ui/Effects/Pane'

const PaneValue = () => {
  const paneData = [
    {
      title: 'Client-oriented approach',
      description:
        'We are a client-first company. We listen to your needs and tailor our solutions to meet them.'
    },
    {
      title: 'Tools agnostic',
      description:
        'We use and recommend tools based on the needs of each case, maximizing value for our customers.'
    },
    {
      title: 'Best Practices focused',
      description:
        'Our team follows industry best practices to ensure the highest quality of our products and services.'
    }
  ]

  return (
    <div className="flex flex-col justify-center space-y-8 md:flex-row md:space-x-8 md:space-y-0">
      {paneData.map((pane, index) => (
        <div key={index} className="w-full md:w-1/3">
          <Pane includeBorderBeam={false} className="h-full p-4">
            <h1 className="mb-7 font-bold">{pane.title}</h1>
            <p>{pane.description}</p>
          </Pane>
        </div>
      ))}
    </div>
  )
}

export default PaneValue
