'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'

const heroVideos = [
  {
    src: '/hero-video.mp4',
  },
  {
    src: '/hero-video-2.mp4',
  },
  {
    src: '/hero-video-3.mp4',
  },
]

export default function Hero() {
  const video1Ref = useRef<HTMLVideoElement>(null)
  const video2Ref = useRef<HTMLVideoElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeVideo, setActiveVideo] = useState(1) // 1 or 2
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 })

  const currentVideo = heroVideos[currentIndex]
  const nextIndex = (currentIndex + 1) % heroVideos.length
  const nextVideo = heroVideos[nextIndex]

  useEffect(() => {
    // Initialize first video
    const activeVideoRef = activeVideo === 1 ? video1Ref : video2Ref
    if (activeVideoRef.current) {
      activeVideoRef.current.src = currentVideo.src
      activeVideoRef.current.load()
      activeVideoRef.current.play().catch(() => {})
    }
  }, [])

  useEffect(() => {
    // Preload next video in the inactive element
    const inactiveVideoRef = activeVideo === 1 ? video2Ref : video1Ref
    if (inactiveVideoRef.current) {
      inactiveVideoRef.current.src = nextVideo.src
      inactiveVideoRef.current.load()
    }
  }, [currentIndex, activeVideo, nextVideo.src])

  const handleVideoEnd = () => {
    const inactiveVideoRef = activeVideo === 1 ? video2Ref : video1Ref
    const activeVideoRef = activeVideo === 1 ? video1Ref : video2Ref
    
    // Start playing next video (already preloaded) before switching
    if (inactiveVideoRef.current) {
      inactiveVideoRef.current.currentTime = 0
      inactiveVideoRef.current.play().catch(() => {})
      
      // Wait a tiny bit to ensure video has started, then switch visibility
      setTimeout(() => {
        // Hide current video and show next
        if (activeVideoRef.current) {
          activeVideoRef.current.pause()
        }
        
        // Switch active video and update index
        setActiveVideo(activeVideo === 1 ? 2 : 1)
        setCurrentIndex(nextIndex)
      }, 50)
    }
  }

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Fullscreen Video Background - Two videos for seamless transition */}
      <div className="absolute inset-0 z-0">
        {/* Video 1 */}
        <video
          ref={video1Ref}
          autoPlay
          muted
          playsInline
          onEnded={activeVideo === 1 ? handleVideoEnd : undefined}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            activeVideo === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <source src={currentVideo.src} type="video/mp4" />
        </video>
        
        {/* Video 2 */}
        <video
          ref={video2Ref}
          muted
          playsInline
          onEnded={activeVideo === 2 ? handleVideoEnd : undefined}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            activeVideo === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <source src={nextVideo.src} type="video/mp4" />
        </video>
        
        {/* Shadow overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-20" />
      </div>

      {/* Content - Editorial Layout */}
      <div className={`relative z-30 text-center text-white px-4 max-w-content mx-auto transition-all duration-luxury-slow ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {/* Subheadline - Single, consistent subheading */}
        <p className="font-display text-5xl md:text-7xl lg:text-8xl font-light mb-12 tracking-tight text-balance text-white">
          Discover your dream home
        </p>

        {/* CTAs - Clear, prominent buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link 
            href="/properties"
            className="px-10 py-4 text-base tracking-wide uppercase bg-white text-luxury-text hover:bg-white/95 transition-all duration-luxury shadow-luxury-lg hover:shadow-luxury-hover font-medium"
          >
            View Properties
          </Link>
          <Link 
            href="/contact"
            className="px-10 py-4 text-base tracking-wide uppercase text-white border-2 border-white hover:bg-white hover:text-luxury-text transition-all duration-luxury font-medium"
          >
            Schedule Consultation
          </Link>
        </div>
        
        {/* Secondary CTA */}
        <div className="text-center">
          <Link 
            href="/about"
            className="text-sm tracking-wide uppercase text-white/80 hover:text-white transition-colors duration-luxury underline underline-offset-4"
          >
            Learn More About Us
          </Link>
        </div>
      </div>

      {/* Scroll Indicator - Refined */}
      <div className="absolute bottom-8 right-8 z-30 animate-pulse">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs tracking-wider uppercase">Scroll</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
