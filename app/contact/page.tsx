'use client'

import { useState } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const { ref: headerRef, isVisible: headerVisible } = useIntersectionObserver({ threshold: 0.1 })
  const { ref: contentRef, isVisible: contentVisible } = useIntersectionObserver({ threshold: 0.1 })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will contact you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen bg-luxury-light">
      <Navbar />
      <div>
        {/* Hero Header */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80"
              alt="Luxury home"
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
              Contact Us
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Get in touch with our team of luxury real estate specialists
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-28 md:py-32 bg-luxury-light">
          <div className="max-w-container mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Info */}
              <div ref={contentRef as any} className={`transition-all duration-luxury-slow ${
                contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}>
                <div className="mb-4">
                  <span className="text-xs tracking-[0.2em] uppercase text-luxury-text-muted font-medium">
                    Get In Touch
                  </span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-light text-luxury-text mb-8 tracking-tight">
                  Let's Connect
                </h2>
                <p className="text-lg text-luxury-text-muted mb-12 leading-relaxed">
                  Whether you're looking to buy, sell, or invest in luxury real estate, our team 
                  is here to help. Reach out to schedule a consultation or learn more about our services.
                </p>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-luxury-text/5 p-3 rounded-luxury">
                      <svg className="w-5 h-5 text-luxury-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm tracking-wide uppercase text-luxury-text-muted mb-1 font-medium">Phone</h3>
                      <a href="tel:+15551234567" className="text-luxury-text hover:text-luxury-gold transition-colors duration-luxury">
                        (555) 123-4567
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-luxury-text/5 p-3 rounded-luxury">
                      <svg className="w-5 h-5 text-luxury-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm tracking-wide uppercase text-luxury-text-muted mb-1 font-medium">Email</h3>
                      <a href="mailto:info@veridianestates.com" className="text-luxury-text hover:text-luxury-gold transition-colors duration-luxury">
                        info@veridianestates.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-luxury-text/5 p-3 rounded-luxury">
                      <svg className="w-5 h-5 text-luxury-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm tracking-wide uppercase text-luxury-text-muted mb-1 font-medium">Address</h3>
                      <p className="text-luxury-text leading-relaxed">
                        123 Luxury Avenue<br />
                        Newport Beach, CA 92660
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className={`transition-all duration-luxury-slow ${
                contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`} style={{ transitionDelay: '100ms' }}>
                <div className="bg-luxury-light rounded-luxury-lg shadow-luxury-lg p-8 md:p-12">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-xs tracking-wide uppercase text-luxury-text-muted mb-2 font-medium">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-luxury-light border border-luxury-border rounded-luxury text-luxury-text placeholder:text-luxury-text-muted/50 focus:outline-none focus:border-luxury-text transition-colors duration-luxury"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs tracking-wide uppercase text-luxury-text-muted mb-2 font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-luxury-light border border-luxury-border rounded-luxury text-luxury-text placeholder:text-luxury-text-muted/50 focus:outline-none focus:border-luxury-text transition-colors duration-luxury"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs tracking-wide uppercase text-luxury-text-muted mb-2 font-medium">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-luxury-light border border-luxury-border rounded-luxury text-luxury-text placeholder:text-luxury-text-muted/50 focus:outline-none focus:border-luxury-text transition-colors duration-luxury"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-xs tracking-wide uppercase text-luxury-text-muted mb-2 font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-luxury-light border border-luxury-border rounded-luxury text-luxury-text placeholder:text-luxury-text-muted/50 focus:outline-none focus:border-luxury-text transition-colors duration-luxury resize-none"
                        placeholder="Tell us about your inquiry..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full px-8 py-3.5 text-sm tracking-wide uppercase bg-luxury-text text-luxury-light hover:bg-luxury-charcoal transition-all duration-luxury shadow-luxury hover:shadow-luxury-md"
                    >
                      Send Message
                    </button>
                  </form>
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
