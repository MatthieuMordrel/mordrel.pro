import clsx, { ClassValue } from 'clsx'
import { ProfilerOnRenderCallback } from 'react'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const onRenderCallback: ProfilerOnRenderCallback = (
  id, // the "id" prop of the Profiler tree that has just committed
  phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration, // time spent rendering the committed update
  baseDuration, // estimated time to render the entire subtree without memoization
  startTime, // when React began rendering this update
  commitTime // when React committed this update
) => {
  // Log or send this information to your analytics service
  console.table({
    'Profiler ID': id,
    Phase: phase,
    'Actual Duration': actualDuration,
    'Base Duration': baseDuration,
    'Start Time': startTime,
    'Commit Time': commitTime
  })
}
