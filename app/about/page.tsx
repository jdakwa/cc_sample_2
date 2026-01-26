'use client'

import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'

export default function AboutPage() {
  const { ref: headerRef, isVisible: headerVisible } = useIntersectionObserver({ threshold: 0.1 })
  const { ref: contentRef, isVisible: contentVisible } = useIntersectionObserver({ threshold: 0.1 })
  const { ref: statsRef, isVisible: statsVisible } = useIntersectionObserver({ threshold: 0.1 })
  const { ref: valuesRef, isVisible: valuesVisible } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <main className="min-h-screen bg-luxury-light">
      <Navbar />
      <div>
        {/* Hero Header */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=1920&q=80"
              alt="Luxury estate"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
          </div>
          <div ref={headerRef as any} className={`relative z-10 max-w-container mx-auto px-6 md:px-8 lg:px-12 text-center transition-all duration-luxury-slow ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight">
              About Us
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Excellence in luxury real estate for over two decades
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-28 md:py-32 bg-luxury-light">
          <div className="max-w-container mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
              {/* Image */}
              <div className={`transition-all duration-luxury-slow ${
                contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}>
                <div className="relative aspect-[4/5] lg:h-[600px] rounded-luxury-lg overflow-hidden shadow-luxury-lg">
                  <Image
                    src="https://plus.unsplash.com/premium_photo-1682437265699-4f441cf2b271?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Our team"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Content */}
              <div ref={contentRef as any} className={`transition-all duration-luxury-slow ${
                contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`} style={{ transitionDelay: '100ms' }}>
                <div className="bg-luxury-light rounded-luxury-lg shadow-luxury-lg p-8 md:p-12">
                  <div className="mb-4">
                    <span className="text-xs tracking-[0.2em] uppercase text-luxury-text-muted font-medium">
                      Our Team
                    </span>
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl font-light text-luxury-text mb-8 tracking-tight">
                    Our Team
                  </h2>
                  <div className="space-y-6 mb-10">
                    <p className="text-lg text-luxury-text leading-relaxed">
                      Founded in 2003, Veridian Realty Group (formerly known as Veridian Estates) has been at the forefront of the luxury real estate 
                      market, representing some of the most prestigious properties in the world. Our team 
                      of experienced professionals brings together decades of combined expertise in high-end 
                      real estate transactions.
                    </p>
                    <p className="text-lg text-luxury-text leading-relaxed">
                      We understand that buying or selling a luxury property is more than a transaction—it's 
                      a life-changing decision. That's why we provide personalized service, attention to 
                      detail, and unwavering commitment to our clients' success.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div ref={statsRef as any} className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 transition-all duration-luxury-slow ${
              statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-display font-light text-luxury-gold mb-3 tracking-tight">20+</div>
                <div className="text-sm tracking-wide uppercase text-luxury-text-muted mb-1">Years Experience</div>
                <div className="text-xs text-luxury-text-muted">Serving clients since 2003</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-display font-light text-luxury-gold mb-3 tracking-tight">500+</div>
                <div className="text-sm tracking-wide uppercase text-luxury-text-muted mb-1">Properties Sold</div>
                <div className="text-xs text-luxury-text-muted">Successful transactions</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-display font-light text-luxury-gold mb-3 tracking-tight">$2B+</div>
                <div className="text-sm tracking-wide uppercase text-luxury-text-muted mb-1">Total Sales Volume</div>
                <div className="text-xs text-luxury-text-muted">In luxury properties</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-display font-light text-luxury-gold mb-3 tracking-tight">100%</div>
                <div className="text-sm tracking-wide uppercase text-luxury-text-muted mb-1">Client Satisfaction</div>
                <div className="text-xs text-luxury-text-muted">Our commitment to excellence</div>
              </div>
            </div>

            {/* Values Section */}
            <div ref={valuesRef as any} className={`relative rounded-luxury-lg overflow-hidden transition-all duration-luxury-slow ${
              valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="absolute inset-0 z-0">
                <Image
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80"
                  alt="Luxury interior"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-luxury-light/95" />
              </div>
              <div className="relative z-10 p-12 md:p-16">
                <div className="mb-8 text-center">
                  <span className="text-xs tracking-[0.2em] uppercase text-luxury-text-muted font-medium mb-4 block">
                    Our Values
                  </span>
                  <h2 className="font-display text-4xl md:text-5xl font-light text-luxury-text mb-8 tracking-tight">
                    Our Values
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div className="text-center">
                    <div className="flex justify-center mb-6">
                      <svg className="w-16 h-16 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <h3 className="font-display text-2xl font-light text-luxury-text mb-4 tracking-tight">Excellence</h3>
                    <p className="text-luxury-text-muted leading-relaxed">
                      We strive for perfection in every detail, ensuring the highest standards in all we do.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center mb-6">
                      <svg className="w-16 h-16 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="font-display text-2xl font-light text-luxury-text mb-4 tracking-tight">Integrity</h3>
                    <p className="text-luxury-text-muted leading-relaxed">
                      Honest, transparent communication and ethical practices guide every transaction.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center mb-6">
                      <svg className="w-16 h-16 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h3 className="font-display text-2xl font-light text-luxury-text mb-4 tracking-tight">Results</h3>
                    <p className="text-luxury-text-muted leading-relaxed">
                      We deliver exceptional outcomes through dedication, expertise, and personalized service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
