"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Code2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || typeof window === "undefined") return

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    // Initial check
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [mounted])

  const navItems = [
    { href: "/", label: "Home", icon: "◉" },
    { href: "/about", label: "About", icon: "◈" },
    { href: "/work", label: "Work", icon: "◊" },
    { href: "/contact", label: "Contact", icon: "◎" },
  ]

  if (!mounted) {
    return (
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <Code2 className="h-6 w-6 text-white" />
              <Sparkles className="h-3 w-3 text-white/60 absolute -top-1 -right-1" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              GW
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 rounded-full text-sm font-medium text-gray-400 hover:text-white"
              >
                <span className="flex items-center space-x-2">
                  <span className="text-xs opacity-60">{item.icon}</span>
                  <span>{item.label}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    )
  }

  return (
    <>
      {/* Floating Navigation */}
      <nav
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border border-white/20 shadow-2xl shadow-white/5"
            : "bg-black/40 backdrop-blur-md border border-white/10"
        } rounded-full px-8 py-4`}
      >
        <div className="flex items-center justify-between">
          {/* Logo with animated elements */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Code2 className="h-6 w-6 text-white group-hover:rotate-12 transition-transform duration-300" />
              <Sparkles className="h-3 w-3 text-white/60 absolute -top-1 -right-1 group-hover:scale-125 transition-transform duration-300" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              GW
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group ${
                  pathname === item.href ? "text-white bg-white/10" : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className="flex items-center space-x-2">
                  <span className="text-xs opacity-60 group-hover:opacity-100 transition-opacity">{item.icon}</span>
                  <span>{item.label}</span>
                </span>
                {pathname === item.href && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent opacity-50" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-8 w-8 rounded-full hover:bg-white/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={() => setIsOpen(false)} />
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-80 bg-black/90 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
            <div className="space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-4 px-6 py-4 rounded-2xl text-base font-medium transition-all duration-300 ${
                    pathname === item.href
                      ? "text-white bg-white/10 shadow-lg"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
