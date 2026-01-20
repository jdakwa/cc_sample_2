import Image from 'next/image'
import Link from 'next/link'
import ScrollAnimation from './ScrollAnimation'

const properties = [
  {
    id: 1,
    title: 'Modern Villa Estate',
    location: 'Beverly Hills, CA',
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

export default function FeaturedProperties() {
  return (
    <section className="py-24 px-4 bg-luxury-light">
      <div className="max-w-7xl mx-auto">
        {/* Header with Background Image */}
        <div className="relative mb-16 rounded-lg overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
              alt="Luxury properties"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 text-center py-16 px-4">
            <ScrollAnimation animationType="fade-in-up">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                Featured Properties
              </h2>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                Discover our curated collection of exceptional luxury estates
              </p>
            </ScrollAnimation>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <ScrollAnimation
              key={property.id}
              animationType="scale-in"
              delay={index * 100}
            >
              <Link
                href={`/properties/${property.id}`}
                className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 block"
              >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 right-4 bg-luxury-gold text-white px-4 py-2 rounded-sm font-semibold transform transition-transform group-hover:scale-110">
                  {property.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-luxury-dark mb-2 group-hover:text-luxury-gold transition-colors">
                  {property.title}
                </h3>
                <p className="text-gray-600 mb-4">{property.location}</p>
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    {property.bedrooms} Beds
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {property.bathrooms} Baths
                  </span>
                  <span>{property.sqft} sqft</span>
                </div>
              </div>
              </Link>
            </ScrollAnimation>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/properties"
            className="inline-block bg-luxury-dark text-white px-8 py-4 rounded-sm text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  )
}
