'use client'

import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'

const allProperties = [
  {
    id: 1,
    title: 'Modern Villa Estate',
    location: 'Newport Beach, CA',
    price: '$8,500,000',
    bedrooms: 5,
    bathrooms: 6,
    sqft: '8,500',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    description: 'Stunning modern villa with panoramic city views and resort-style amenities.',
  },
  {
    id: 2,
    title: 'Oceanfront Penthouse',
    location: 'Malibu, CA',
    price: '$12,000,000',
    bedrooms: 4,
    bathrooms: 5,
    sqft: '6,200',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    description: 'Luxurious oceanfront penthouse with private beach access and infinity pool.',
  },
  {
    id: 3,
    title: 'Luxury Mountain Retreat',
    location: 'Aspen, CO',
    price: '$6,800,000',
    bedrooms: 6,
    bathrooms: 7,
    sqft: '9,200',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    description: 'Ski-in/ski-out mountain retreat with breathtaking alpine views.',
  },
  {
    id: 4,
    title: 'Contemporary Mansion',
    location: 'Bel Air, CA',
    price: '$15,500,000',
    bedrooms: 7,
    bathrooms: 8,
    sqft: '12,000',
    image: 'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=800&q=80',
    description: 'Architectural masterpiece with cutting-edge design and smart home technology.',
  },
  {
    id: 5,
    title: 'Historic Estate',
    location: 'Charleston, SC',
    price: '$4,200,000',
    bedrooms: 5,
    bathrooms: 5,
    sqft: '7,800',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    description: 'Beautifully restored historic estate with period details and modern amenities.',
  },
  {
    id: 6,
    title: 'Waterfront Estate',
    location: 'Miami Beach, FL',
    price: '$9,800,000',
    bedrooms: 5,
    bathrooms: 6,
    sqft: '8,900',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
    description: 'Exclusive waterfront estate with private dock and tropical landscaping.',
  },
  {
    id: 7,
    title: 'Desert Oasis',
    location: 'Scottsdale, AZ',
    price: '$5,500,000',
    bedrooms: 4,
    bathrooms: 5,
    sqft: '7,200',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80',
    description: 'Modern desert home with stunning mountain views and resort-style pool.',
  },
  {
    id: 8,
    title: 'Coastal Estate',
    location: 'Monterey, CA',
    price: '$7,200,000',
    bedrooms: 5,
    bathrooms: 6,
    sqft: '8,100',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80',
    description: 'Spectacular coastal estate with ocean views and private beach access.',
  },
  {
    id: 9,
    title: 'Urban Penthouse',
    location: 'New York, NY',
    price: '$18,000,000',
    bedrooms: 3,
    bathrooms: 4,
    sqft: '5,800',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    description: 'Ultra-luxury penthouse in the heart of Manhattan with skyline views.',
  },
]

function PropertyCard({ property, index }: { property: typeof allProperties[0], index: number }) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <Link
      ref={ref as any}
      href={`/properties/${property.id}`}
      className={`group block transition-all duration-luxury-slow ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="bg-luxury-light rounded-luxury overflow-hidden shadow-luxury hover:shadow-luxury-hover transition-all duration-luxury">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-luxury-slow group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-4 right-4">
            <div className="bg-luxury-text/90 backdrop-blur-sm text-luxury-light px-4 py-2 text-sm tracking-wide">
              {property.price}
            </div>
          </div>
        </div>
        <div className="p-6 md:p-8">
          <h3 className="font-display text-2xl md:text-3xl font-light text-luxury-text mb-2 tracking-tight group-hover:text-luxury-gold transition-colors duration-luxury">
            {property.title}
          </h3>
          <p className="text-sm tracking-wide uppercase text-luxury-text-muted mb-2">
            {property.location}
          </p>
          <p className="text-sm text-luxury-text-muted mb-6 leading-relaxed line-clamp-2">
            {property.description}
          </p>
          <div className="flex items-center gap-6 text-xs tracking-wide text-luxury-text-muted border-t border-luxury-border pt-4">
            <span>{property.bedrooms} Bed</span>
            <span className="text-luxury-border">•</span>
            <span>{property.bathrooms} Bath</span>
            <span className="text-luxury-border">•</span>
            <span>{property.sqft} sqft</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function PropertiesPage() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <main className="min-h-screen bg-luxury-light">
      <Navbar />
      <div>
        {/* Hero Header */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
              alt="Luxury properties"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
          </div>
          <div ref={ref as any} className={`relative z-10 max-w-container mx-auto px-6 md:px-8 lg:px-12 text-center transition-all duration-luxury-slow ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight">
              All Properties
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Explore our complete collection of luxury estates
            </p>
          </div>
        </section>

        {/* Properties Grid */}
        <section className="py-28 md:py-32 bg-luxury-light">
          <div className="max-w-container mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {allProperties.map((property, index) => (
                <PropertyCard key={property.id} property={property} index={index} />
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
