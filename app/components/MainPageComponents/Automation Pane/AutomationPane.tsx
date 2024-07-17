'use client'
import { TextHighlight } from '@/app/ui/Fonts/TextHighlight'
import { AnimateTextDiv } from '@/app/components/MainPageComponents/Automation Pane/AnimatedTextDiv'
import { GlobeDemo } from '@/app/components/MainPageComponents/Automation Pane/Globe'
import React, { Profiler } from 'react'
import { onRenderCallback } from '@/app/lib/utils'

const AutomationPane = () => (
  <>
    <div className="grid h-full grid-cols-1 grid-rows-[auto_auto_1fr] gap-y-2 p-4 md:grid-cols-2 md:grid-rows-[auto_1fr]">
      <div className="title-responsive col-span-full row-span-1 flex h-auto w-full flex-col justify-center gap-y-2 text-center">
        <TextHighlight>Automate your processes</TextHighlight>
        <p className="hidden text-balance text-base tracking-tight sm:block sm:text-lg md:text-xl">
          Ensure your business stays connected during all parts of its processes.
        </p>
      </div>

      <AnimateTextDiv className="col-span-1 row-start-2 w-full pt-4 md:py-4" />

      <div className="col-span-1 row-span-1 row-start-3 md:col-start-2 md:row-start-2">
        {/* <Profiler id="GlobeDemo" onRender={onRenderCallback}> */}
        <GlobeDemo />
        {/* </Profiler> */}
      </div>
    </div>
  </>
)

export default AutomationPane
