import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimation from '@/components/ScrollAnimation'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=1920&q=80"
              alt="Luxury estate"
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
                About Us
              </h1>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                Excellence in luxury real estate for over two decades
              </p>
            </ScrollAnimation>
          </div>
        </section>

        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
              <ScrollAnimation animationType="fade-in-left">
                <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                    alt="Luxury real estate"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </ScrollAnimation>
              <ScrollAnimation animationType="fade-in-right">
                <div>
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-luxury-dark mb-6">
                    Our Story
                  </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Founded in 2003, Veridian Estates has been at the forefront of the luxury real estate 
                  market, representing some of the most prestigious properties in the world. Our team 
                  of experienced professionals brings together decades of combined expertise in high-end 
                  real estate transactions.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We understand that buying or selling a luxury property is more than a transaction—it's 
                  a life-changing decision. That's why we provide personalized service, attention to 
                  detail, and unwavering commitment to our clients' success.
                </p>
                </div>
              </ScrollAnimation>
            </div>

            {/* Our Team Section */}
            <ScrollAnimation animationType="fade-in-up">
              <div className="mb-24">
                <div className="text-center mb-12">
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-luxury-dark mb-4">
                    Our Team
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Meet the experienced professionals dedicated to your success
                  </p>
                </div>
                <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80"
                    alt="Our professional real estate team"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1200px"
                  />
                </div>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
              <div className="text-center">
                <div className="text-5xl font-display font-bold text-luxury-gold mb-4">20+</div>
                <div className="text-xl font-semibold text-luxury-dark mb-2">Years Experience</div>
                <div className="text-gray-600">Serving clients since 2003</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-display font-bold text-luxury-gold mb-4">500+</div>
                <div className="text-xl font-semibold text-luxury-dark mb-2">Properties Sold</div>
                <div className="text-gray-600">Successful transactions</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-display font-bold text-luxury-gold mb-4">$2B+</div>
                <div className="text-xl font-semibold text-luxury-dark mb-2">Total Sales Volume</div>
                <div className="text-gray-600">In luxury properties</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-display font-bold text-luxury-gold mb-4">100%</div>
                <div className="text-xl font-semibold text-luxury-dark mb-2">Client Satisfaction</div>
                <div className="text-gray-600">Our commitment to excellence</div>
              </div>
            </div>

            <ScrollAnimation animationType="fade-in-up">
              <div className="relative rounded-lg overflow-hidden">
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
                <div className="relative z-10 p-12">
                  <h2 className="font-display text-4xl font-bold text-luxury-dark mb-8 text-center">
                    Our Values
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="text-4xl mb-4">✨</div>
                      <h3 className="font-display text-2xl font-bold text-luxury-dark mb-3">Excellence</h3>
                      <p className="text-gray-700">
                        We strive for perfection in every detail, ensuring the highest standards in all we do.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-4">🤝</div>
                      <h3 className="font-display text-2xl font-bold text-luxury-dark mb-3">Integrity</h3>
                      <p className="text-gray-700">
                        Honest, transparent communication and ethical practices guide every transaction.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-4">🎯</div>
                      <h3 className="font-display text-2xl font-bold text-luxury-dark mb-3">Results</h3>
                      <p className="text-gray-700">
                        We deliver exceptional outcomes through dedication, expertise, and personalized service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
