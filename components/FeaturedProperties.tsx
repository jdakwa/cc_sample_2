'use client'

import Image from 'next/image'
import Link from 'next/link'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'

const properties = [
  {
    id: 1,
    title: 'Modern Villa Estate',
    location: 'Newport Beach, CA',
    price: '$8,500,000',
    bedrooms: 5,
    bathrooms: 6,
    sqft: '8,500',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
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
  },
]

function PropertyCard({ property, index }: { property: typeof properties[0], index: number }) {
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
        {/* Image Container - Consistent 4:5 Ratio */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-luxury-slow group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Price Badge - Refined */}
          <div className="absolute top-4 right-4">
            <div className="bg-luxury-text/90 backdrop-blur-sm text-luxury-light px-4 py-2 text-sm tracking-wide">
              {property.price}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <h3 className="font-display text-2xl md:text-3xl font-light text-luxury-text mb-2 tracking-tight group-hover:text-luxury-gold transition-colors duration-luxury">
            {property.title}
          </h3>
          <p className="text-sm tracking-wide uppercase text-luxury-text-muted mb-6">
            {property.location}
          </p>
          
          {/* Meta - Minimal */}
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

export default function FeaturedProperties() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-28 md:py-32 bg-luxury-light">
      <div className="max-w-container mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header - Editorial Style */}
        <div className={`mb-16 text-center transition-all duration-luxury-slow ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="mb-4">
            <span className="text-xs tracking-[0.2em] uppercase text-luxury-text-muted font-medium">
              Curated Selection
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight text-luxury-text">
            Featured Properties
          </h2>
          <p className="text-lg text-luxury-text-muted max-w-2xl mx-auto leading-relaxed">
            Discover our curated collection of exceptional luxury estates
          </p>
        </div>

        {/* Properties Grid - Spacious */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {properties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>

        {/* CTA - Clear and prominent */}
        <div className="text-center mt-16">
          <Link
            href="/properties"
            className="inline-block px-10 py-4 text-base tracking-wide uppercase bg-luxury-text text-luxury-light hover:bg-luxury-charcoal transition-all duration-luxury shadow-luxury-lg hover:shadow-luxury-hover font-medium"
          >
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  )
}
