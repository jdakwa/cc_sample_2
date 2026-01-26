'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomepage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className={`z-[100] transition-all duration-luxury ${
        isHomepage 
          ? 'absolute top-0 left-0 right-0 bg-transparent pt-4' 
          : 'relative bg-luxury-light/95 backdrop-blur-sm pt-4'
      }`}
    >
      <div className="max-w-container mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex justify-between items-center h-24 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center group pt-2">
            <Image
              src="/logo.png"
              alt="Veridian Realty Group"
              width={540}
              height={180}
              className="h-36 w-auto transition-opacity duration-luxury group-hover:opacity-90"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <div className="flex items-center space-x-8">
              <Link 
                href="/" 
                className={`relative text-sm tracking-wide uppercase transition-colors duration-luxury ${
                  pathname === '/' 
                    ? isHomepage ? 'text-white font-medium' : 'text-luxury-text font-medium'
                    : isHomepage ? 'text-white/80 hover:text-white' : 'text-luxury-text-muted hover:text-luxury-text'
                }`}
              >
                <span>Home</span>
                {pathname === '/' && (
                  <span className={`absolute -bottom-1 left-0 right-0 h-px ${isHomepage ? 'bg-luxury-gold' : 'bg-luxury-gold'}`} />
                )}
              </Link>
              <Link 
                href="/properties" 
                className={`relative text-sm tracking-wide uppercase transition-colors duration-luxury ${
                  pathname === '/properties' 
                    ? isHomepage ? 'text-white font-medium' : 'text-luxury-text font-medium'
                    : isHomepage ? 'text-white/80 hover:text-white' : 'text-luxury-text-muted hover:text-luxury-text'
                }`}
              >
                <span>Properties</span>
                {pathname === '/properties' && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-luxury-gold" />
                )}
              </Link>
              <Link 
                href="/about" 
                className={`relative text-sm tracking-wide uppercase transition-colors duration-luxury ${
                  pathname === '/about' 
                    ? isHomepage ? 'text-white font-medium' : 'text-luxury-text font-medium'
                    : isHomepage ? 'text-white/80 hover:text-white' : 'text-luxury-text-muted hover:text-luxury-text'
                }`}
              >
                <span>About</span>
                {pathname === '/about' && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-luxury-gold" />
                )}
              </Link>
              <Link 
                href="/contact" 
                className={`relative text-sm tracking-wide uppercase transition-colors duration-luxury ${
                  pathname === '/contact' 
                    ? isHomepage ? 'text-white font-medium' : 'text-luxury-text font-medium'
                    : isHomepage ? 'text-white/80 hover:text-white' : 'text-luxury-text-muted hover:text-luxury-text'
                }`}
              >
                <span>Contact</span>
                {pathname === '/contact' && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-luxury-gold" />
                )}
              </Link>
            </div>

            {/* CTA Button */}
            <button className={`px-6 py-2.5 text-sm tracking-wide uppercase transition-all duration-luxury shadow-luxury hover:shadow-luxury-md ${
              isHomepage 
                ? 'bg-white text-luxury-text hover:bg-white/95' 
                : 'bg-luxury-text text-luxury-light hover:bg-luxury-charcoal'
            }`}>
              Schedule Viewing
            </button>

            {/* Contact Icons */}
            <div className={`flex items-center space-x-3 ml-6 pl-6 border-l ${
              isHomepage ? 'border-white/20' : 'border-luxury-border'
            }`}>
              <a 
                href="tel:+15551234567" 
                className={`p-2 transition-colors duration-luxury ${
                  isHomepage ? 'text-white/80 hover:text-white' : 'text-luxury-text-muted hover:text-luxury-text'
                }`}
                aria-label="Call us"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <a 
                href="mailto:info@veridianestates.com" 
                className={`p-2 transition-colors duration-luxury ${
                  isHomepage ? 'text-white/80 hover:text-white' : 'text-luxury-text-muted hover:text-luxury-text'
                }`}
                aria-label="Email us"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden transition-colors duration-luxury ${
              isHomepage ? 'text-white' : 'text-luxury-text'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={`md:hidden pb-6 space-y-1 border-t mt-4 pt-4 ${
            isHomepage 
              ? 'border-white/20 bg-black/20 backdrop-blur-sm rounded-lg' 
              : 'border-luxury-border bg-luxury-light'
          }`}>
            <Link 
              href="/" 
              className={`block px-3 py-2.5 text-sm tracking-wide uppercase transition-colors duration-luxury ${
                pathname === '/' 
                  ? isHomepage ? 'text-white font-medium' : 'text-luxury-text font-medium'
                  : isHomepage ? 'text-white/80 hover:text-white' : 'text-luxury-text-muted hover:text-luxury-text'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/properties" 
              className={`block px-3 py-2.5 text-sm tracking-wide uppercase transition-colors duration-luxury ${
                pathname === '/properties' 
                  ? isHomepage ? 'text-white font-medium' : 'text-luxury-text font-medium'
                  : isHomepage ? 'text-white/80 hover:text-white' : 'text-luxury-text-muted hover:text-luxury-text'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Properties
            </Link>
            <Link 
              href="/about" 
              className={`block px-3 py-2.5 text-sm tracking-wide uppercase transition-colors duration-luxury ${
                pathname === '/about' 
                  ? isHomepage ? 'text-white font-medium' : 'text-luxury-text font-medium'
                  : isHomepage ? 'text-white/80 hover:text-white' : 'text-luxury-text-muted hover:text-luxury-text'
              }`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className={`block px-3 py-2.5 text-sm tracking-wide uppercase transition-colors duration-luxury ${
                pathname === '/contact' 
                  ? isHomepage ? 'text-white font-medium' : 'text-luxury-text font-medium'
                  : isHomepage ? 'text-white/80 hover:text-white' : 'text-luxury-text-muted hover:text-luxury-text'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className={`flex items-center gap-4 pt-4 border-t mt-4 ${
              isHomepage ? 'border-white/20' : 'border-luxury-border'
            }`}>
              <a 
                href="tel:+15551234567" 
                className={`flex items-center gap-2 px-4 py-2 text-sm transition-colors ${
                  isHomepage ? 'text-white/80 hover:text-white' : 'text-luxury-text-muted hover:text-luxury-text'
                }`}
                aria-label="Call us"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(555) 123-4567</span>
              </a>
              <a 
                href="mailto:info@veridianestates.com" 
                className={`flex items-center gap-2 px-4 py-2 text-sm transition-colors ${
                  isHomepage ? 'text-white/80 hover:text-white' : 'text-luxury-text-muted hover:text-luxury-text'
                }`}
                aria-label="Email us"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email</span>
              </a>
            </div>
            <button 
              className={`w-full mt-4 px-6 py-2.5 text-sm tracking-wide uppercase transition-all duration-luxury ${
                isHomepage 
                  ? 'bg-white text-luxury-text hover:bg-white/95' 
                  : 'bg-luxury-text text-luxury-light hover:bg-luxury-charcoal'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Schedule Viewing
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
