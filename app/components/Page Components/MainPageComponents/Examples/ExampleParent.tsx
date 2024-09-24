import FadeInEffect from '@/app/ui/Effects/AdvancedFadeIn'
import { TextHighlight } from '@/app/ui/Fonts/TextHighlight'
import { HTMLAttributes } from 'react'

export function ExamplesParent({ className, children, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <section className={className} {...props}>
      <TextHighlight className="titleResponsive mb-8 text-center">Simply, what do we do ?</TextHighlight>
      <FadeInEffect className="mx-auto w-full max-w-3xl p-6 pt-0 sm:p-10 sm:pt-0">{children}</FadeInEffect>
    </section>
  )
}
