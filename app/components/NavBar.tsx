'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  // State to manage if the dropdown is open. Initially set to false.
  // This state is either True or False. When True, it shows the panel, when False it doesn't.
  const [isDropdownOpen, setDropdownOpen] = useState(false)

  // Reference to the dropdown div element. This allows direct DOM manipulation,
  // useful for checking if certain events occur inside or outside this element.
  //Initally the reference is intialized with null
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Reference to store timeout ID. This is used to handle setting and clearing
  // timeouts for the dropdown close delay, ensuring we don't close it prematurely.
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null)

  // Handles mouse enter event on the dropdown to prevent it from closing unexpectedly.
  // This function is triggered when the mouse pointer enters the dropdown area.
  const handleMouseEnter = () => {
    // Clear any existing timeout to ensure the menu stays open
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current)
      timeoutIdRef.current = null
    }
    setDropdownOpen(true) // Open the dropdown menu
  }

  // Handles mouse leave event on the dropdown, setting a delay before closing the dropdown.
  // This function is triggered when the mouse pointer leaves the dropdown area.

  // The function signature (event: React.MouseEvent<HTMLDivElement, MouseEvent>) defines the input of the function.
  // Here, event is an object that contains information about the mouse event, including where it occurred, the target element, and other metadata related to the mouse action.
  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // Schedule to close the dropdown after a delay of 300 milliseconds.
    timeoutIdRef.current = setTimeout(() => {
      // Define the variable relatedTarget as the relatedTarget of the event, i.e. the div that mouseLeave affected.
      let relatedTarget = event.relatedTarget as Node | null // The event.relatedTarget refers to the element the mouse just entered

      // Check if relatedTarget is not null and if it is inside dropdownRef.current or is the same as dropdownRef.current
      if (relatedTarget && !dropdownRef.current?.contains(relatedTarget)) {
        setDropdownOpen(false) // Close the dropdown if the mouse is truly outside.
      }
    }, 300)
  }

  useEffect(() => {
    return () => {
      // Clear any existing timeout on unmount to prevent memory leaks.
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current)
      }
    }
  }, [])

  return (
    <nav className="sticky top-0 z-50 h-16 border-b-2 border-borderGrey bg-techGrey text-white">
      <div className="relative grid h-full w-full grid-cols-[auto_auto_auto] items-center sm:grid-cols-3">
        <div className="flex h-full w-full items-center gap-x-4">
          <div className="relative h-full w-16">
            <Image
              src="/M5.png"
              alt="LogoIcon"
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="p-2"
            />
          </div>
          <div className=""></div>
        </div>
        <div className="flex w-full items-center justify-center gap-4 sm:gap-14">
          {/* Dropdown menu container with event handlers for mouse enter and leave. This div refers to the dropdownRef*/}
          <div ref={dropdownRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div>
              <Link href="/" className="font-semibold hover:text-techBlue">
                Services
              </Link>
            </div>
            {isDropdownOpen && (
              <div className="absolute -ml-3 mt-2 w-48 rounded-lg border-2 border-borderGrey bg-techGrey py-3 text-white shadow-lg">
                <Link href="/#api-block" className="block px-4 py-1 hover:text-techBlue">
                  API Integration
                </Link>
                <Link href="/#visu-block" className="block px-4 py-1 hover:text-techBlue">
                  Visualisations
                </Link>
                <Link href="/#excel-block" className="block px-4 py-1 hover:text-techBlue">
                  Excel Services
                </Link>
                <Link href="/#exemples-block" className="block px-4 py-1 hover:text-techBlue">
                  Exemples
                </Link>
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
          <Link
            href="/contact"
            className="mr-4 rounded bg-techGreen p-2 font-medium hover:text-black md:block md:px-4 md:py-2"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
