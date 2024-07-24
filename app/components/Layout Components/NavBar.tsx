'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import BorderMagicButton from '@/app/ui/Components/Aceternity/BorderMagic'
import ShimmerButton from '@/app/ui/Components/Aceternity/ShimmerButton'

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null)

  const clearDropdownTimeout = () => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current)
      timeoutIdRef.current = null
    }
  }

  const handleMouseEnter = () => {
    clearDropdownTimeout()
    setDropdownOpen(true)
  }

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    timeoutIdRef.current = setTimeout(() => {
      const relatedTarget = event.relatedTarget as Node | null
      if (relatedTarget && !dropdownRef.current?.contains(relatedTarget)) {
        setDropdownOpen(false)
      }
    }, 300)
  }

  useEffect(() => {
    return () => clearDropdownTimeout()
  }, [])

  const links = [
    { href: '/#exemples-block', text: 'Examples' },
    { href: '/#visu-block', text: 'Visualisations' },
    { href: '/#api-block', text: 'API Integration' },
    { href: '/#excel-block', text: 'Excel Services' }
  ]

  return (
    <nav className="sticky top-0 z-50 h-16 border-b-2 border-borderGrey bg-techGrey">
      <div className="relative grid h-full w-full grid-cols-[auto_auto_auto] items-center sm:grid-cols-3">
        <div className="flex h-full w-full items-center gap-x-4">
          <div className="">{/* Logo */}</div>
        </div>
        <div className="flex w-full items-center justify-center gap-4 sm:gap-14">
          <div ref={dropdownRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div>
              <Link href="/" className="font-semibold hover:text-techBlue">
                Services
              </Link>
            </div>
            {isDropdownOpen && (
              <div className="absolute -ml-3 mt-2 w-48 rounded-lg border-2 border-borderGrey bg-techGrey py-3 shadow-lg">
                {links.map((link, index) => (
                  <Link key={index} href={link.href} className="block px-4 py-1 hover:text-techBlue">
                    {link.text}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/about" className="font-semibold hover:text-techBlue">
            About
          </Link>
          <Link href="/pricing" className="font-semibold hover:text-techBlue">
            Process
          </Link>
        </div>
        <div className="flex h-full w-full items-center justify-end">
          <Link href="/contact" className="mr-4 font-medium hover:text-black md:block">
            <ShimmerButton label={'Contact'} className="" />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
