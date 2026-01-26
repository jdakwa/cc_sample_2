'use client'

import { useEffect, useRef } from 'react'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'

export default function VeridianSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const { ref: contentRef, isVisible } = useIntersectionObserver({ threshold: 0.1 })

  useEffect(() => {
    // Auto-play video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Auto-play might be blocked by browser, that's okay
      })
    }
  }, [])

  return (
    <section className="relative overflow-hidden" style={{ paddingTop: 'calc(7rem * 2 + 20px)', paddingBottom: 'calc(7rem * 2 + 20px)' }}>
      {/* Video Background - Full width and height of section */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/veridian-section-video.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Centered White Box - Larger to fit all text */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="w-3/5 h-3/5 bg-white relative shadow-luxury-lg">
          {/* Content inside white box */}
          <div ref={contentRef as any} className="relative z-10 h-full flex flex-col justify-center px-8 md:px-12 lg:px-16">
            <div className={`text-left transition-all duration-luxury-slow ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {/* Heading */}
              <div className="mb-8">
                <h2 className="font-luxury text-3xl md:text-4xl lg:text-5xl font-light text-luxury-text mb-4 tracking-tight">
                  Veridian Realty Group
                </h2>
                <div className="w-16 h-px bg-luxury-gold mb-6"></div>
              </div>

              {/* Content - Two Paragraphs */}
              <div className="space-y-6">
                <p className="font-luxury text-base md:text-lg lg:text-xl text-luxury-text leading-relaxed font-light tracking-normal">
                  Veridian Realty Group is a boutique brokerage based in Newport Beach, founded by an organic 
                  collaboration of highly successful real estate professionals.
                </p>
                <p className="font-luxury text-base md:text-lg lg:text-xl text-luxury-text leading-relaxed font-light tracking-normal">
                  Leveraging its stellar leadership and supported by the most refined resources in the industry, 
                  Veridian Realty Group is driven by an unrelenting focus on discretion, transactional excellence 
                  and exceeding client expectation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
