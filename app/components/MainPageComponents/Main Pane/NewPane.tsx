import { Pane } from '@/app/ui/Effects/Pane'
import FadeInEffect from '@/app/ui/Effects/AdvancedFadeIn'

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
    <div className="grid grid-cols-1 grid-rows-[1fr_1fr_1fr] gap-8 lg:grid-cols-3 lg:grid-rows-1">
      {paneData.map((pane, index) => (
        <div key={index} className="w-full">
          <FadeInEffect delay={0.3 + index * 0.2} animationStyle="fadeUp" className="h-full">
            <Pane includeBorderBeam={false} className="h-full p-4">
              <h1 className="mb-2 font-bold lg:mb-5">{pane.title}</h1>
              <p className="text-[clamp(0.5rem,0.5rem+1vw,1rem)]">{pane.description}</p>
            </Pane>
          </FadeInEffect>
        </div>
      ))}
    </div>
  )
}

export default PaneValue
