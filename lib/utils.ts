import clsx, { ClassValue } from 'clsx'
import { ProfilerOnRenderCallback } from 'react'
import { twMerge } from 'tailwind-merge'

/**
 * Merges multiple class names together using the `clsx` and `tailwind-merge` libraries.
 * This function takes an arbitrary number of arguments, each representing a class name or an array of class names.
 * It first combines all the arguments using `clsx`, which handles conditional classes and ensures proper formatting.
 * Then, it passes the combined class names to `twMerge` from the `tailwind-merge` library, which merges the Tailwind CSS classes and removes any duplicates.
 *
 * @param {...ClassValue[]} inputs - An arbitrary number of arguments representing class names or arrays of class names.
 * @returns {string} The merged and deduplicated class names as a string.
 */
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
