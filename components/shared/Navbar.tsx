"use client"
import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import darklogo from "@/public/images/logo/darklogo.png"
import lightlogo from "@/public/images/logo/lightlogo.png"
import Image from 'next/image'
import BookCallModal from '../reusable/BookCallModal'
import { ThemeToggle } from "@/components/ui/theme-toggle"

import darksmLogo from "@/public/images/logo/circledark.png"
import lightsmLogo from "@/public/images/logo/circlewhite.png"

export default function Navbar() {
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState('')

  React.useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Check which section is in view
      const sections = ['products', 'marketing-services', 'case-studies', 'blog']
      const currentSection = sections.find(section => {
        const element = document.querySelector(`#${section}`)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  const currentTheme = theme === 'system' ? systemTheme : theme

  // Smooth scroll function
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center py-4 px-4">
      <div className={`w-full transition-all duration-500 ease-in-out ${isScrolled
          ? 'max-w-4xl'
          : 'max-w-[1500px] main-container relative'
        }`}>
        <div className={`relative w-full transition-all duration-300 ${isScrolled
            ? `${currentTheme === 'dark' ? 'bg-background/60' : 'bg-background/95'} backdrop-blur-sm rounded-full border border-border/50`
            : 'bg-transparent '
          }`}>
          <div className="container flex h-16 items-center justify-between px-4">
            {/* Left Section - Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  width={100}
                  height={100}
                  src={currentTheme === 'dark' 
                    ? (isScrolled ? lightsmLogo : lightlogo)
                    : (isScrolled ? darksmLogo : darklogo)
                  }
                  alt="Logo"
                  className={`transition-all duration-300 hidden md:block ${isScrolled ? 'h-8 w-auto' : 'h-9 w-auto'}`}
                />
                <Image
                  width={100}
                  height={100}
                  src={currentTheme === 'dark' ? lightsmLogo : darksmLogo}
                  alt="Logo"
                  className="transition-all duration-300 block md:hidden h-8 w-auto"
                />
              </Link>
            </div>

            {/* Center Section - Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-grow">
              <NavigationMenu className="flex-grow flex justify-center">
                <NavigationMenuList className="gap-0">
                  {['products', 'marketing-services', 'case-studies', 'blog'].map((item) => (
                    <NavigationMenuItem key={item}>
                      <Link
                        href={`#${item}`}
                        onClick={(e) => scrollToSection(e, `#${item}`)}
                        className={`${currentTheme === 'dark' ? 'text-[#A9A9A9]' : 'text-[#1a1a1a]'} cursor-pointer px-2 relative hover:opacity-80`}
                      >
                        <Button
                          variant="ghost"
                          className={`${currentTheme === 'dark' ? 'text-[#A9A9A9]' : 'text-[#1a1a1a]'} cursor-pointer px-2 text-[16px] font-[400] transition-all duration-300 ${isScrolled ? 'text-[14px]' : 'text-[16px]'
                            } ${activeSection === item ? 'font-medium text-primary' : ''}`}
                        >
                          {item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                        </Button>
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <ThemeToggle />
              <BookCallModal
                className={`cursor-pointer hidden lg:block transition-all duration-300 ${isScrolled
                    ? 'px-4 py-1.5 text-sm rounded-full'
                    : 'px-6 py-2 rounded-md'
                  } ${currentTheme === 'dark' ? 'bg-[#FFF] hover:bg-[#FFF]/80 text-[#070707]' : 'bg-[#070707] hover:bg-[#070707]/90 text-white'
                  }`}
                eventSlug="obaro-industries"
                title="Book a Call"
                calUsername="obaro-industries"
              />
            </div>

            {/* Mobile/Tablet Menu Button */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className={`transition-all duration-300 ${isScrolled ? 'h-5 w-5' : 'h-7 w-7'}`} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[350px] p-6">
                  {/* Logo at the top */}
                  <div className="mb-8">
                    <Link href="/" className="flex items-center gap-2">
                      <Image
                        width={100}
                        height={100}
                        src={currentTheme === 'dark' ? lightlogo : darklogo}
                        alt="Logo"
                        className="h-8 w-auto"
                      />
                    </Link>
                  </div>

                  <div className="flex flex-col gap-6">
                    <Link href="#products" className="p-2 hover:bg-accent rounded-md">
                      Products
                    </Link>
                    <Link href="#marketing-services" className="p-2 hover:bg-accent rounded-md">
                      Marketing Services
                    </Link>
                    <Link href="#case-studies" className="p-2 hover:bg-accent rounded-md">
                      Case Studies
                    </Link>
                    <Link href="#blog" className="p-2 hover:bg-accent rounded-md">
                      Blog
                    </Link>
                    {/* <Button className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                      Book a Call
                    </Button> */}
                    <BookCallModal className={`cursor-pointer px-6 py-2  rounded-md ${currentTheme === 'dark' ? 'bg-[#FFF] text-[#070707]' : 'bg-[#070707] text-white'}`} eventSlug="obaro-industries" title="Book a Call" calUsername="obaro-industries" />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        {/* Bottom Border with Gap - Only show when not scrolled */}
        {/* {!isScrolled && (
          <div className="absolute -bottom-1 w-full flex justify-between">
            <div className="w-16 sm:w-24 md:w-32 xl:w-40 h-[9px] bg-border bg-gradient-to-r from-transparent via-border to-transparent translate-x-0 2xl:-translate-x-20 rounded-[1px] border-r border-s"></div>
            <div className="w-16 sm:w-24 md:w-32 xl:w-40 h-[9px] bg-border bg-gradient-to-r from-transparent via-border to-transparent -translate-x-0 border-r border-s rounded-[1px] 2xl:translate-x-20"></div>
          </div>
        )} */}
      </div>
    </div>
  )
}