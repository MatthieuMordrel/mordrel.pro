'use client'
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

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
      // Check if the mouse did not leave to a child element of the dropdown.
      // This prevents the dropdown from closing if the mouse is still over a child element.
      // Define the variable relatedTarget as the relatedTarget of the event, i.e. the div that mouseLeave affected. It defines it as a Node for Typescript to treat it as Node. For type safety + to access the methods and properties of a Node
      let relatedTarget = event.relatedTarget as Node // The event.relatedTarget refers to the elemtent the mouse just entered
      // Normally, current directly accesses the DOM element that ref is attached to, provided the element exists. If the element has not been mounted yet or if it's unmounted, current would be null.
      // If relatedTarget is inside dropdownRef.current or is the same as dropdownRef.current, contains returns true. Otherwise, it returns false.
      //In dropdownRef.current?.contains(relatedTarget), it means "access the contains method of the object dropdownRef.current if dropdownRef.current is not null or undefined.
      //If dropdownRef.current is null or undefined, then stop the operation and return undefined immediately."
      if (!dropdownRef.current?.contains(relatedTarget)) {
        setDropdownOpen(false) // Close the dropdown if the mouse is truly outside.
      }
    }, 300)
  }

  // Effect hook to clean up the timeout when the component unmounts.
  // This ensures that we do not leave any dangling timeouts that could cause errors.
  //WHY : Consider a scenario where:

  // A user opens a dropdown and then navigates away from the page (triggering an unmount) without triggering the mouse leave event. Without a cleanup in useEffect, the timeout would not be cleared.
  // The timeout callback attempts to update the component's state after the component has been unmounted, leading to console errors and potential bugs in the application.
  useEffect(() => {
    return () => {
      // Clear any existing timeout on unmount to prevent memory leaks.
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current)
      }
    }
  }, []) // The empty dependency array means this effect runs only once on mount and on unmount.

  return (
    <nav className="sticky top-0 z-50 flex h-16 items-center justify-between border-b-2 border-borderGrey bg-techGrey p-4 text-white">
      <div className="mx-auto flex w-full items-center justify-center gap-14">
        {/* Dropdown menu container with event handlers for mouse enter and leave. This div refers to the dropdownRef*/}
        <div ref={dropdownRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div>
            <Link href="/" className="hover:text-techBlue">
              Services
            </Link>
          </div>
          {isDropdownOpen && (
            <div className="absolute -ml-3 mt-2 w-48 rounded-lg border-2 border-borderGrey bg-techGrey py-3 text-white shadow-lg">
              {/* Individual links in the dropdown, each with hover styles */}
              {/* <Link
                href="/Excel"
                className="block px-4 py-1 hover:text-techBlue"
              >
                Excel
              </Link>
              <Link
                href="/PowerBI"
                className="block px-4 py-1 hover:text-techBlue"
              >
                PowerBI
              </Link> */}
              <Link href="/#api-block" className="block px-4 py-1 hover:text-techBlue">
                API Integration
              </Link>
              <Link href="/#visu-block" className="block px-4 py-1 hover:text-techBlue">
                Visualisations
              </Link>
            </div>
          )}
        </div>
        <Link href="/about" className="hover:text-techBlue">
          About
        </Link>
        <Link href="/pricing" className="hover:text-techBlue">
          Pricing
        </Link>
      </div>
      <Link href="/contact" className="hidden rounded bg-techGreen px-4 py-2 hover:text-black md:block">
        Contact
      </Link>
    </nav>
  )
}

export default Navbar
