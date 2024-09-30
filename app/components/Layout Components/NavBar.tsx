'use client'
import { Button } from '@/components/ui/button'
import { BarChart, FileCode, FileSpreadsheet, Webhook } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null)
  const pathname = usePathname()

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
      try {
        const relatedTarget = event.relatedTarget as Node | null
        if (!relatedTarget || !dropdownRef.current) {
          setDropdownOpen(false)
          return
        }

        // Check if the relatedTarget is actually a Node
        if (!(relatedTarget instanceof Node)) {
          setDropdownOpen(false)
          return
        }

        if (!dropdownRef.current.contains(relatedTarget)) {
          setDropdownOpen(false)
        }
      } catch (error) {
        console.error('Error in handleMouseLeave:', error)
        setDropdownOpen(false)
      }
    }, 300)
  }

  useEffect(() => {
    return () => clearDropdownTimeout()
  }, [])

  const links = [
    { href: '/#exemples-block', text: 'Examples', icon: FileCode },
    { href: '/#visu-block', text: 'Visualisations', icon: BarChart },
    { href: '/#api-block', text: 'API Integration', icon: Webhook },
    { href: '/#excel-block', text: 'Excel Services', icon: FileSpreadsheet }
  ]

  const isActive = (href: string) => pathname === href

  const getLinkClasses = (href: string, additionalClasses: string = '') =>
    `
    font-semibold transition-colors duration-200
    ${isActive(href) ? 'text-techBlue font-bold' : 'hover:text-techBlue'}
    ${additionalClasses}
  `.trim()

  return (
    <nav className="sticky top-0 z-50 h-16 border-b-2 border-borderGrey bg-background">
      <div className="relative grid h-full w-full grid-cols-[auto_auto_auto] items-center sm:grid-cols-3">
        <div className="flex h-full w-full items-center gap-x-4">
          <div className="">
            {/* <DarkModeToggle /> */}
            </div>
        </div>
        <div className="flex w-full items-center justify-center gap-4 sm:gap-14">
          <div ref={dropdownRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div>
              <Link href="/" className={getLinkClasses('/')}>
                Services
              </Link>
            </div>
            <div
              className={`absolute -ml-3 mt-2 w-48 rounded-lg border-2 bg-background border-borderGrey py-3 shadow-lg transition-all duration-300 ease-in-out ${isDropdownOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-[-10px] opacity-0'}`}
            >
              {links.map((link, index) => (
                <Link key={index} href={link.href} className={getLinkClasses(link.href, 'flex items-center px-4 py-1')}>
                  {link.icon && <link.icon className="mr-2" size={16} />}
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/about" className={getLinkClasses('/about')}>
            About
          </Link>
          <Link href="/pricing" className={getLinkClasses('/pricing')}>
            Process
          </Link>
        </div>
        <div className="flex h-full w-full items-center justify-end">
          <Link href="/contact" className="mr-6" passHref>
            <Button variant="outline" className='text-black w-28 '>Contact</Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
