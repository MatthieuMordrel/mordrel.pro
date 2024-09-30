'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function DarkModeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

 //The useEffect is here to avoid an hydration mistmacth as we don't have access to the theme when pre-rendering the button
  useEffect(() => setMounted(true), [])

	//The mounted state is used to ensure that the component only renders its content after it has been mounted on the client-side.
  if (!mounted) return null

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className='rounded-md p-4 hover:bg-gray-200 dark:hover:bg-yellow-600'>
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}