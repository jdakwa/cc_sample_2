'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const propertyDetails: { [key: string]: any } = {
  '1': {
    title: 'Modern Villa Estate',
    location: 'Newport Beach, CA',
    price: '$8,500,000',
    bedrooms: 5,
    bathrooms: 6,
    sqft: '8,500',
    year: '2020',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80',
    ],
    description: 'Stunning modern villa with panoramic city views and resort-style amenities. This architectural masterpiece features floor-to-ceiling windows, an open-concept design, and premium finishes throughout.',
    features: [
      'Panoramic city views',
      'Resort-style pool and spa',
      'Wine cellar',
      'Home theater',
      'Smart home technology',
      'Private elevator',
      '3-car garage',
      'Rooftop terrace',
    ],
  },
  '2': {
    title: 'Oceanfront Penthouse',
    location: 'Newport Beach, CA',
    price: '$12,000,000',
    bedrooms: 4,
    bathrooms: 5,
    sqft: '6,200',
    year: '2019',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
    ],
    description: 'Luxurious oceanfront penthouse with private beach access and infinity pool.',
    features: [
      'Oceanfront location',
      'Infinity pool',
      'Private beach access',
      'Panoramic ocean views',
    ],
  },
}

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const property = propertyDetails[params.id] || propertyDetails['1']

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length)
  }

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length)
  }

  return (
    <main className="min-h-screen bg-luxury-light">
      <Navbar />
      <div>
        <div className="max-w-container mx-auto px-6 md:px-8 lg:px-12 py-8">
          <Link href="/properties" className="text-luxury-gold hover:text-luxury-gold/80 transition-colors duration-luxury inline-block mb-4">
            ← Back to Properties
          </Link>
        </div>

        <section className="px-6 md:px-8 lg:px-12 pb-12">
          <div className="max-w-container mx-auto">
            {/* Image Gallery with Carousel */}
            <div className="relative mb-12">
              <div className="relative h-96 md:h-[600px] lg:h-[700px] rounded-luxury-lg overflow-hidden shadow-luxury-lg">
                <Image
                  src={property.images[currentImageIndex]}
                  alt={`${property.title} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-cover transition-opacity duration-300"
                  priority
                  sizes="100vw"
                />
                
                {/* Navigation Arrows */}
                {property.images.length > 1 && (
                  <>
                    <button
                      onClick={goToPrevious}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/90 backdrop-blur-sm hover:bg-white text-luxury-text transition-all duration-luxury rounded-full shadow-luxury hover:shadow-luxury-md"
                      aria-label="Previous image"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                      </svg>
                    </button>
                    <button
                      onClick={goToNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/90 backdrop-blur-sm hover:bg-white text-luxury-text transition-all duration-luxury rounded-full shadow-luxury hover:shadow-luxury-md"
                      aria-label="Next image"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </button>
                  </>
                )}

                {/* Image Counter */}
                {property.images.length > 1 && (
                  <div className="absolute bottom-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-luxury-text">
                    {currentImageIndex + 1} / {property.images.length}
                  </div>
                )}
              </div>

              {/* Thumbnail Navigation */}
              {property.images.length > 1 && (
                <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                  {property.images.map((img: string, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`relative flex-shrink-0 w-24 h-24 rounded-luxury overflow-hidden border-2 transition-all duration-luxury ${
                        idx === currentImageIndex
                          ? 'border-luxury-gold shadow-luxury-md'
                          : 'border-transparent hover:border-luxury-border opacity-70 hover:opacity-100'
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h1 className="font-display text-4xl md:text-5xl font-light text-luxury-text mb-4 tracking-tight">
                  {property.title}
                </h1>
                <p className="text-lg text-luxury-text-muted mb-6">{property.location}</p>
                <div className="text-3xl font-display font-light text-luxury-text mb-8 tracking-tight">
                  {property.price}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 p-6 bg-luxury-light rounded-luxury-lg border border-luxury-border">
                  <div>
                    <div className="text-2xl font-display font-light text-luxury-text mb-1 tracking-tight">
                      {property.bedrooms}
                    </div>
                    <div className="text-sm text-luxury-text-muted tracking-wide uppercase">Bedrooms</div>
                  </div>
                  <div>
                    <div className="text-2xl font-display font-light text-luxury-text mb-1 tracking-tight">
                      {property.bathrooms}
                    </div>
                    <div className="text-sm text-luxury-text-muted tracking-wide uppercase">Bathrooms</div>
                  </div>
                  <div>
                    <div className="text-2xl font-display font-light text-luxury-text mb-1 tracking-tight">
                      {property.sqft}
                    </div>
                    <div className="text-sm text-luxury-text-muted tracking-wide uppercase">Square Feet</div>
                  </div>
                  <div>
                    <div className="text-2xl font-display font-light text-luxury-text mb-1 tracking-tight">
                      {property.year}
                    </div>
                    <div className="text-sm text-luxury-text-muted tracking-wide uppercase">Year Built</div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="font-display text-3xl font-light text-luxury-text mb-4 tracking-tight">
                    Description
                  </h2>
                  <p className="text-lg text-luxury-text-muted leading-relaxed">{property.description}</p>
                </div>

                <div>
                  <h2 className="font-display text-3xl font-light text-luxury-text mb-4 tracking-tight">
                    Features
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {property.features.map((feature: string, idx: number) => (
                      <div key={idx} className="flex items-center gap-2 text-luxury-text-muted">
                        <svg className="w-5 h-5 text-luxury-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-luxury-light rounded-luxury-lg p-6 border border-luxury-border sticky top-24">
                  <h3 className="font-display text-2xl font-light text-luxury-text mb-4 tracking-tight">
                    Schedule a Viewing
                  </h3>
                  <p className="text-luxury-text-muted mb-6 leading-relaxed">
                    Contact us to schedule a private viewing of this exceptional property.
                  </p>
                  <Link
                    href="/contact"
                    className="block w-full bg-luxury-text text-luxury-light text-center px-6 py-3.5 text-sm tracking-wide uppercase hover:bg-luxury-charcoal transition-all duration-luxury shadow-luxury hover:shadow-luxury-md font-medium mb-4"
                  >
                    Contact Agent
                  </Link>
                  <button className="w-full bg-luxury-text text-luxury-light text-center px-6 py-3.5 text-sm tracking-wide uppercase hover:bg-luxury-charcoal transition-all duration-luxury shadow-luxury hover:shadow-luxury-md font-medium">
                    Schedule Viewing
                  </button>
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
