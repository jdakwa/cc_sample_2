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
                    src="https://plus.unsplash.com/premium_photo-1682437265699-4f441cf2b271?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Our team"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </ScrollAnimation>
              <ScrollAnimation animationType="fade-in-right">
                <div>
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-luxury-dark mb-6">
                    Our Team
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
                      <div className="flex justify-center mb-4">
                        <svg className="w-16 h-16 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <h3 className="font-display text-2xl font-bold text-luxury-dark mb-3">Excellence</h3>
                      <p className="text-gray-700">
                        We strive for perfection in every detail, ensuring the highest standards in all we do.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="flex justify-center mb-4">
                        <svg className="w-16 h-16 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="font-display text-2xl font-bold text-luxury-dark mb-3">Integrity</h3>
                      <p className="text-gray-700">
                        Honest, transparent communication and ethical practices guide every transaction.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="flex justify-center mb-4">
                        <svg className="w-16 h-16 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
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
