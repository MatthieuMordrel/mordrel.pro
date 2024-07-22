'use client'
import Link from 'next/link'
import Image from 'next/image'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink
} from '@/app/ui/Components/Shadcn/NavBarShadCn'
import { cn } from '@lib/utils'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 h-16 border-b-2 border-borderGrey bg-techGrey text-white">
      <div className="relative grid h-full w-full grid-cols-[auto_auto_auto] items-center sm:grid-cols-3">
        <div className="flex h-full w-full items-center gap-x-4">
          {/* Logo placeholder */}
          <div className=""></div>
        </div>
        <div className="flex w-full items-center justify-center gap-4 sm:gap-14">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="from-muted/50 to-muted flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">Our Services</div>
                          <p className="text-muted-foreground text-sm leading-tight">Explore our range of services designed to meet your needs.</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/#exemples-block" title="Exemples">
                      View examples of our work
                    </ListItem>
                    <ListItem href="/#api-block" title="API Integration">
                      Seamless API integration services
                    </ListItem>
                    <ListItem href="/#visu-block" title="Visualisations">
                      Data visualization solutions
                    </ListItem>
                    <ListItem href="/#excel-block" title="Excel Services">
                      Advanced Excel services and solutions
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={cn('font-semibold hover:text-techBlue')}>About</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/pricing" legacyBehavior passHref>
                  <NavigationMenuLink className={cn('font-semibold hover:text-techBlue')}>Process</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex h-full w-full items-center justify-end">
          <Link href="/contact" className="mr-4 rounded bg-techGreen p-2 font-medium hover:text-black md:block md:px-4 md:py-2">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'

export default Navbar
