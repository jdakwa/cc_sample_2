'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animationType?: 'fade-in' | 'fade-in-left' | 'fade-in-right' | 'fade-in-up' | 'scale-in'
  delay?: number
}

export default function ScrollAnimation({
  children,
  className = '',
  animationType = 'fade-in',
  delay = 0,
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [delay])

  return (
    <div
      ref={ref}
      className={`scroll-${animationType} ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
