import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimation from '@/components/ScrollAnimation'

const allProperties = [
  {
    id: 1,
    title: 'Modern Villa Estate',
    location: 'Beverly Hills, CA',
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
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
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

export default function PropertiesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
              alt="Luxury properties"
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
                All Properties
              </h1>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                Explore our complete collection of luxury estates
              </p>
            </ScrollAnimation>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProperties.map((property, index) => (
                <ScrollAnimation
                  key={property.id}
                  animationType="scale-in"
                  delay={index * 50}
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
                    <div className="absolute top-4 right-4 bg-luxury-gold text-white px-4 py-2 rounded-sm font-semibold">
                      {property.price}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl font-bold text-luxury-dark mb-2 group-hover:text-luxury-gold transition-colors">
                      {property.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{property.location}</p>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">{property.description}</p>
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
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
