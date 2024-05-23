// ValuesComponent.jsx or ValuesComponent.tsx if you are using TypeScript
import { HiAcademicCap } from 'react-icons/hi2'
import { HiCpuChip } from 'react-icons/hi2'
import { HiFaceSmile } from 'react-icons/hi2'

const ValuesComponent = () => {
  return (
    <div className="bg-white p-8 text-techGrey">
      <div className="mx-auto text-center">
        <h2 className="text-xl font-semibold">Our commitment</h2>
        <p className="my-4">All our projects resonnate around core values that we push to the boundary to provide the best experience to our clients.</p>
        <div className="mt-8 flex flex-wrap items-center justify-around">
          <div className="flex w-1/3 flex-col items-center p-4">
            <HiCpuChip className="mb-2 h-12 w-12" /> {/* Icon component */}
            <p className="text-lg font-medium">Cutting Edge Technology</p>
          </div>
          <div className="flex w-1/3 flex-col items-center p-4">
            <HiAcademicCap className="mb-2 h-12 w-12" /> {/* Icon component */}
            <p className="text-lg font-medium">Best practices first</p>
          </div>
          <div className="flex w-1/3 flex-col items-center p-4">
            <HiFaceSmile className="mb-2 h-12 w-12" /> {/* Icon component */}
            <p className="text-lg font-medium">Client Oriented</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ValuesComponent
