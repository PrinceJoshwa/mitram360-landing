"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useCallback } from "react"
import { Menu, X } from "lucide-react"
import Image from 'next/image';


export default function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = useCallback(
    (path: string) => {
      if (path === "/home" && (pathname === "/" || pathname === "/home")) {
        return true
      }
      return pathname === path
    },
    [pathname],
  )

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  const navItems = [
    { href: "/home", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/for-dsas", label: "For DSAs" },
    { href: "/for-cas", label: "For CAs" },
    { href: "/for-lending-partners", label: "For Lending Partners" },
    // { href: "/help-center", label: "Help Center" },
  ]

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          {/* <div className="flex items-center">
            <Link href="/home" className="flex items-center" prefetch={true}>
              <div className="flex items-center space-x-1">
                <span className="text-2xl font-bold text-gray-800">Mit</span>
                <div className="relative">
                  <span className="text-2xl font-bold text-orange-500">r</span>
                  <div className="absolute -top-1 -right-1 w-3 h-3 border border-orange-500 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  </div>
                </div>
                <span className="text-2xl font-bold text-gray-800">am360</span>
                <sup className="text-xs text-gray-500">®</sup>
              </div>
            </Link>
          </div> */}
              <div className="flex items-center">
                <Link href="/home" className="flex items-center" prefetch={true}>
                  <Image
                    src="/logo.png"
                    alt="Mitram360 Logo"
                    width={50} // adjust as needed
                    height={50} // adjust as needed
                    className="object-contain"
                  />
                </Link>
              </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch={true}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-150 ${
                  isActive(item.href)
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-gray-700 hover:text-orange-500"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex space-x-3">
            <Button className="bg-orange-400 hover:bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors duration-150">
              WITH Mitram360
            </Button>
            <Button
              asChild
              className="bg-orange-400 hover:bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors duration-150"
            >
              <Link href="/become-our-partner" prefetch={true}>
                BECOME OUR PARTNER
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-700 hover:text-orange-500 hover:bg-gray-100 transition-colors duration-150"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch={true}
                  onClick={closeMobileMenu}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-150 ${
                    isActive(item.href)
                      ? "text-orange-500 bg-orange-50"
                      : "text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                  WITH Mitram360
                </Button>
                <Button
                  asChild
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full text-sm font-medium"
                >
                  <Link href="/become-our-partner" prefetch={true} onClick={closeMobileMenu}>
                    BECOME OUR PARTNER
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
