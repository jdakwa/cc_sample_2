'use client'

import { useState } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimation from '@/components/ScrollAnimation'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
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
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80"
              alt="Luxury home"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <ScrollAnimation animationType="fade-in-up">
              <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">
                Contact Us
              </h1>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                Get in touch with our team of luxury real estate specialists
              </p>
            </ScrollAnimation>
          </div>
        </section>

        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ScrollAnimation animationType="fade-in-left">
                <div>
                  <h2 className="font-display text-4xl font-bold text-luxury-dark mb-6">
                    Let's Connect
                  </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Whether you're looking to buy, sell, or invest in luxury real estate, our team 
                  is here to help. Reach out to schedule a consultation or learn more about our services.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-luxury-gold/10 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-luxury-dark mb-1">Phone</h3>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-luxury-gold/10 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-luxury-dark mb-1">Email</h3>
                      <p className="text-gray-600">info@veridianestates.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-luxury-gold/10 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-luxury-dark mb-1">Address</h3>
                      <p className="text-gray-600">
                        123 Luxury Avenue<br />
                        Beverly Hills, CA 90210
                      </p>
                    </div>
                  </div>
                </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animationType="fade-in-right">
                <div className="bg-luxury-light rounded-lg p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-luxury-dark mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-luxury-dark mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-luxury-dark mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-luxury-dark mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent resize-none"
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-luxury-gold text-white px-8 py-4 rounded-sm text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
