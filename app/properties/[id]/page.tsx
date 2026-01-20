import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const propertyDetails: { [key: string]: any } = {
  '1': {
    title: 'Modern Villa Estate',
    location: 'Beverly Hills, CA',
    price: '$8,500,000',
    bedrooms: 5,
    bathrooms: 6,
    sqft: '8,500',
    year: '2020',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
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
}

export default async function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const property = propertyDetails[id] || propertyDetails['1']

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Link href="/properties" className="text-luxury-gold hover:underline mb-4 inline-block">
            ← Back to Properties
          </Link>
        </div>

        <section className="px-4 pb-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
              <div className="relative h-96 lg:h-[600px] rounded-lg overflow-hidden">
                <Image
                  src={property.images[0]}
                  alt={property.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {property.images.slice(1, 3).map((img: string, idx: number) => (
                  <div key={idx} className="relative h-48 lg:h-[290px] rounded-lg overflow-hidden">
                    <Image
                      src={img}
                      alt={`${property.title} ${idx + 2}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h1 className="font-display text-4xl md:text-5xl font-bold text-luxury-dark mb-4">
                  {property.title}
                </h1>
                <p className="text-xl text-gray-600 mb-6">{property.location}</p>
                <div className="text-3xl font-display font-bold text-luxury-gold mb-8">
                  {property.price}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 p-6 bg-luxury-light rounded-lg">
                  <div>
                    <div className="text-2xl font-display font-bold text-luxury-dark mb-1">
                      {property.bedrooms}
                    </div>
                    <div className="text-gray-600">Bedrooms</div>
                  </div>
                  <div>
                    <div className="text-2xl font-display font-bold text-luxury-dark mb-1">
                      {property.bathrooms}
                    </div>
                    <div className="text-gray-600">Bathrooms</div>
                  </div>
                  <div>
                    <div className="text-2xl font-display font-bold text-luxury-dark mb-1">
                      {property.sqft}
                    </div>
                    <div className="text-gray-600">Square Feet</div>
                  </div>
                  <div>
                    <div className="text-2xl font-display font-bold text-luxury-dark mb-1">
                      {property.year}
                    </div>
                    <div className="text-gray-600">Year Built</div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="font-display text-3xl font-bold text-luxury-dark mb-4">
                    Description
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">{property.description}</p>
                </div>

                <div>
                  <h2 className="font-display text-3xl font-bold text-luxury-dark mb-4">
                    Features
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {property.features.map((feature: string, idx: number) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-700">
                        <svg className="w-5 h-5 text-luxury-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-luxury-light rounded-lg p-6 sticky top-24">
                  <h3 className="font-display text-2xl font-bold text-luxury-dark mb-4">
                    Schedule a Viewing
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Contact us to schedule a private viewing of this exceptional property.
                  </p>
                  <Link
                    href="/contact"
                    className="block w-full bg-luxury-gold text-white text-center px-6 py-4 rounded-sm font-semibold hover:bg-opacity-90 transition-all mb-4"
                  >
                    Contact Agent
                  </Link>
                  <button className="w-full bg-luxury-dark text-white text-center px-6 py-4 rounded-sm font-semibold hover:bg-opacity-90 transition-all">
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
