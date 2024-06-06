import { PlayrightIcon } from '../../../data/Sotftware'
import HoverBox from './HoverBox'
import Image from 'next/image'
import IconAndText from '@/app/components/MainPageComponents/Main Pane/IconAndText'
import { BarChart, CircleDollarSign, HandCoins, MonitorCheck, PackageCheck, Speech } from 'lucide-react'

const widthIcon = 64
const heightIcon = 64

const PaneValue = () => {
  return (
    <div className="flex justify-center space-x-8 ">
      <div className="basis-1/3">
        <HoverBox
          topContent={
            <>
              <h1 className="mb-7 font-bold">Client-oriented approach</h1>
              <p>We are a client-first company. We listen to your needs and tailor our solutions to meet them.</p>
            </>
          }
          bottomContent={
            <div className="align-center mt-2 flex justify-center gap-x-2 text-center">
              <IconAndText
                icon={CircleDollarSign as React.ComponentType<{ className?: string; color?: string; strokeWidth?: number; size?: number }>}
                color="#9E829C"
                strokeWidth={0.5}
                comment="Value Oriented"
                type="lucide"
              />
              <IconAndText
                icon={Speech as React.ComponentType<{ className?: string; color?: string; strokeWidth?: number; size?: number }>}
                color="#9E829C"
                strokeWidth={0.5}
                comment="Communication"
                type="lucide"
              />
              <IconAndText
                icon={PackageCheck as React.ComponentType<{ className?: string; color?: string; strokeWidth?: number; size?: number }>}
                color="#9E829C"
                strokeWidth={0.5}
                comment="Customization"
                type="lucide"
              />{' '}
            </div>
          }
        />
      </div>
      <div className="basis-1/3">
        <HoverBox
          topContent={
            <>
              <h1 className="mb-7 font-bold">Tools agnostic</h1>
              <p> We use and recommend tools based on the needs of each case, maximizing value for our customers</p>
            </>
          }
          bottomContent={
            <div className="grid grid-cols-4 gap-4 px-4">
              <Image src="/Icons/Open AI Icon.png" alt="OpenAI" width={widthIcon} height={heightIcon} className="rounded-full" />
              <PlayrightIcon className="h-16 w-16 rounded-full" />
              <Image src="/Icons/Power Automate Icon.png" alt="Power Automate" width={widthIcon} height={heightIcon} className="rounded-full" />
              <Image src="/Icons/PowerBI Icon.png" alt="PowerBI" width="96" height="96" className="rounded-full" />
              <Image src="/Icons/React Icon.png" alt="React" width={widthIcon} height={heightIcon} className="rounded-full" />
              <Image src="/Icons/Excel Icon.png" alt="Excel" width={widthIcon} height={heightIcon} className="rounded-full" />
              <Image src="/Icons/Next Icon.png" alt="Next.js" width={widthIcon} height={heightIcon} className="rounded-full" />
              <Image src="/Icons/Python Icon.png" alt="Python" width={widthIcon} height={heightIcon} className="rounded-full" />
            </div>
          }
        />
      </div>
      <div className="basis-1/3">
        <HoverBox
          topContent={
            <>
              <h1 className="mb-7 font-bold">Best Practices focused</h1>
              <p>Our team follows industry best practices to ensure the highest quality of our products and services.</p>
            </>
          }
          bottomContent={
            <div className="align-center mt-2 flex justify-center gap-x-2 text-center">
              <IconAndText
                icon={MonitorCheck as React.ComponentType<{ className?: string; color?: string; strokeWidth?: number; size?: number }>}
                color="#9E829C"
                strokeWidth={0.5}
                comment="Maintainability"
                type="lucide"
              />
              <IconAndText
                icon={BarChart as React.ComponentType<{ className?: string; color?: string; strokeWidth?: number; size?: number }>}
                color="#9E829C"
                strokeWidth={0.5}
                comment="Scalibility"
                type="lucide"
              />
              <IconAndText
                icon={HandCoins as React.ComponentType<{ className?: string; color?: string; strokeWidth?: number; size?: number }>}
                color="#9E829C"
                strokeWidth={0.5}
                comment="Cost efficiency"
                type="lucide"
              />{' '}
            </div>
          }
        />
      </div>
    </div>
  )
}

export default PaneValue
