'use client'

import Image from 'next/image'
import Link from 'next/link'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'

export default function AboutSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section ref={ref} className="relative py-28 md:py-32 overflow-hidden bg-luxury-light">
      {/* Background Image - Subtle */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
          alt="Luxury interior"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-luxury-light/92" />
      </div>
      
      <div className="relative z-10 max-w-container mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className={`transition-all duration-luxury-slow ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="relative aspect-[4/5] lg:h-[600px] rounded-luxury-lg overflow-hidden shadow-luxury-lg">
              <Image
                src="https://images.unsplash.com/photo-1718209881007-c0ecdfc00f9d?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Luxury real estate"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Name in bottom right corner */}
              <div className="absolute bottom-4 right-4 z-10">
                <p className="text-white text-sm md:text-base tracking-wide font-medium">
                  Hector Ruiz
                </p>
              </div>
            </div>
          </div>

          {/* Content Card */}
          <div className={`transition-all duration-luxury-slow ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`} style={{ transitionDelay: '100ms' }}>
            <div className="bg-luxury-light rounded-luxury-lg shadow-luxury-lg p-8 md:p-12">
              {/* Eyebrow */}
              <div className="mb-4">
                <span className="text-xs tracking-[0.2em] uppercase text-luxury-text-muted font-medium">
                  About Veridian Realty Group
                </span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-luxury-text mb-8 tracking-tight">
                Excellence in Every Detail
              </h2>

              <div className="space-y-6 mb-10">
                <p className="text-lg text-luxury-text leading-relaxed font-medium">
                  With over two decades of experience in luxury real estate, we have built a reputation 
                  for delivering exceptional service and finding the perfect home for discerning clients.
                </p>
                <p className="text-lg text-luxury-text leading-relaxed font-medium">
                  Our team of dedicated professionals combines deep market knowledge with personalized 
                  attention to ensure every transaction exceeds expectations. From historic estates to 
                  contemporary masterpieces, we curate only the finest properties.
                </p>
              </div>

              {/* Stats Grid - Refined */}
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-luxury-border mb-8">
                <div>
                  <div className="text-4xl md:text-5xl font-display font-light text-luxury-gold mb-2 tracking-tight">
                    20+
                  </div>
                  <div className="text-sm text-luxury-text-muted tracking-wide uppercase">
                    Years Experience
                  </div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-display font-light text-luxury-gold mb-2 tracking-tight">
                    500+
                  </div>
                  <div className="text-sm text-luxury-text-muted tracking-wide uppercase">
                    Properties Sold
                  </div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-display font-light text-luxury-gold mb-2 tracking-tight">
                    $2B+
                  </div>
                  <div className="text-sm text-luxury-text-muted tracking-wide uppercase">
                    Sales Volume
                  </div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-display font-light text-luxury-gold mb-2 tracking-tight">
                    100%
                  </div>
                  <div className="text-sm text-luxury-text-muted tracking-wide uppercase">
                    Client Satisfaction
                  </div>
                </div>
              </div>
              
              {/* CTA */}
              <div className="pt-8 border-t border-luxury-border">
                <Link
                  href="/contact"
                  className="inline-block w-full text-center px-8 py-4 text-base tracking-wide uppercase bg-luxury-text text-luxury-light hover:bg-luxury-charcoal transition-all duration-luxury shadow-luxury-lg hover:shadow-luxury-hover font-medium"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
