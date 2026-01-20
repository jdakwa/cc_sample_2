'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <span className="font-display text-2xl font-bold text-luxury-dark">
              Veridian Estates
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation Links */}
            <Link href="/" className={`font-luxury text-lg relative group px-3 py-2 transition-colors duration-300 ${
              pathname === '/' ? 'text-white' : 'text-luxury-dark hover:text-white'
            }`}>
              <span className="relative z-10">Home</span>
              <span className={`absolute inset-0 bg-luxury-gold rounded-sm transition-all duration-300 ease-out ${
                pathname === '/' 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100'
              }`}></span>
            </Link>
            <Link href="/properties" className={`font-luxury text-lg relative group px-3 py-2 transition-colors duration-300 ${
              pathname === '/properties' ? 'text-white' : 'text-luxury-dark hover:text-white'
            }`}>
              <span className="relative z-10">Properties</span>
              <span className={`absolute inset-0 bg-luxury-gold rounded-sm transition-all duration-300 ease-out ${
                pathname === '/properties' 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100'
              }`}></span>
            </Link>
            <Link href="/about" className={`font-luxury text-lg relative group px-3 py-2 transition-colors duration-300 ${
              pathname === '/about' ? 'text-white' : 'text-luxury-dark hover:text-white'
            }`}>
              <span className="relative z-10">About</span>
              <span className={`absolute inset-0 bg-luxury-gold rounded-sm transition-all duration-300 ease-out ${
                pathname === '/about' 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100'
              }`}></span>
            </Link>
            <Link href="/contact" className={`font-luxury text-lg relative group px-3 py-2 transition-colors duration-300 ${
              pathname === '/contact' ? 'text-white' : 'text-luxury-dark hover:text-white'
            }`}>
              <span className="relative z-10">Contact</span>
              <span className={`absolute inset-0 bg-luxury-gold rounded-sm transition-all duration-300 ease-out ${
                pathname === '/contact' 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100'
              }`}></span>
            </Link>
            <button className="font-luxury bg-luxury-gold text-white px-6 py-2 rounded-sm hover:bg-opacity-90 transition-all">
              Schedule Viewing
            </button>
            {/* Contact Icons - Far Right */}
            <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-gray-300">
              <a 
                href="tel:+15551234567" 
                className="p-2 text-luxury-dark hover:text-luxury-gold hover:bg-luxury-gold/10 rounded-sm transition-all"
                aria-label="Call us"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <a 
                href="mailto:info@veridianestates.com" 
                className="p-2 text-luxury-dark hover:text-luxury-gold hover:bg-luxury-gold/10 rounded-sm transition-all"
                aria-label="Email us"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-luxury-dark"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-4">
            <Link href="/" className={`font-luxury block px-3 py-2 rounded-sm transition-colors ${
              pathname === '/' ? 'bg-luxury-gold text-white' : 'text-luxury-dark hover:bg-luxury-gold hover:text-white'
            }`}>
              Home
            </Link>
            <Link href="/properties" className={`font-luxury block px-3 py-2 rounded-sm transition-colors ${
              pathname === '/properties' ? 'bg-luxury-gold text-white' : 'text-luxury-dark hover:bg-luxury-gold hover:text-white'
            }`}>
              Properties
            </Link>
            <Link href="/about" className={`font-luxury block px-3 py-2 rounded-sm transition-colors ${
              pathname === '/about' ? 'bg-luxury-gold text-white' : 'text-luxury-dark hover:bg-luxury-gold hover:text-white'
            }`}>
              About
            </Link>
            <Link href="/contact" className={`font-luxury block px-3 py-2 rounded-sm transition-colors ${
              pathname === '/contact' ? 'bg-luxury-gold text-white' : 'text-luxury-dark hover:bg-luxury-gold hover:text-white'
            }`}>
              Contact
            </Link>
            {/* Mobile Contact Icons */}
            <div className="flex items-center gap-4 pt-2 border-t border-gray-300">
              <a 
                href="tel:+15551234567" 
                className="flex items-center gap-2 px-4 py-2 bg-luxury-gold/10 text-luxury-dark hover:bg-luxury-gold hover:text-white rounded-sm transition-all"
                aria-label="Call us"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-luxury">(555) 123-4567</span>
              </a>
              <a 
                href="mailto:info@veridianestates.com" 
                className="flex items-center gap-2 px-4 py-2 bg-luxury-gold/10 text-luxury-dark hover:bg-luxury-gold hover:text-white rounded-sm transition-all"
                aria-label="Email us"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-luxury text-sm">Email</span>
              </a>
            </div>
            <button className="font-luxury w-full bg-luxury-gold text-white px-6 py-2 rounded-sm hover:bg-opacity-90 transition-all">
              Schedule Viewing
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
