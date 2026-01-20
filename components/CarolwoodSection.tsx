'use client'

import Image from 'next/image'
import ScrollAnimation from './ScrollAnimation'
import { useEffect, useRef, useState } from 'react'

export default function VeridianSection() {
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const scrolled = window.scrollY - rect.top
        setScrollY(scrolled * 0.2)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="relative py-72 px-4 overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 transition-transform duration-75 ease-out"
          style={{
            transform: `translateY(${scrollY}px) scale(1.05)`,
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=1920&q=80"
            alt="Luxury estate"
            fill
            className="object-cover scale-110"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <ScrollAnimation animationType="fade-in-up" delay={200}>
          <div className="mb-12">
            <h2 className="font-luxury text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 tracking-tight animate-fade-in-up stagger-1">
              Veridian Estates
            </h2>
            <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8 animate-line-expand"></div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animationType="fade-in-up" delay={400}>
          <p className="font-luxury text-xl md:text-2xl lg:text-3xl text-gray-100 leading-relaxed max-w-5xl mx-auto font-light tracking-wide animate-fade-in-up stagger-3">
            Veridian Estates is a boutique brokerage based in Beverly Hills, founded by an organic 
            collaboration of highly successful real estate professionals. Leveraging its stellar 
            leadership and supported by the most refined resources in the industry, Veridian Estates 
            is driven by an unrelenting focus on discretion, transactional excellence and exceeding 
            client expectation.
          </p>
        </ScrollAnimation>
      </div>
    </section>
  )
}
