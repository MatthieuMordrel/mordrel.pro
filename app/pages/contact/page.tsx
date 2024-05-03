// Contact component
import React from 'react'
import GradientBorder from '../../components/MainPageComponents/GradientBorder'
import ApiIntegrationShowcase from '@/app/components/MainPageComponents/APIIntegration'
import MainDiv from '@/app/components/MainPageComponents/MainDiv'
import ValueProposition from '@/app/components/MainPageComponents/AddedValue'

// Contact page
export default function ContactPage() {
  return (
    <div className="flex gap-5 bg-techGrey">
      <GradientBorder>
        <div className="h-[40vh] w-[60vh]">
          <ValueProposition />
        </div>
      </GradientBorder>
    </div>
  )
}
