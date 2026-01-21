import Image from 'next/image'
import ScrollAnimation from './ScrollAnimation'

export default function AboutSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
          alt="Luxury interior"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/85" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation animationType="fade-in-left">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1718209881007-c0ecdfc00f9d?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                Excellence in Every Detail
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              With over two decades of experience in luxury real estate, we have built a reputation 
              for delivering exceptional service and finding the perfect home for discerning clients.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our team of dedicated professionals combines deep market knowledge with personalized 
              attention to ensure every transaction exceeds expectations. From historic estates to 
              contemporary masterpieces, we curate only the finest properties.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-4xl font-display font-bold text-luxury-gold mb-2">20+</div>
                <div className="text-gray-700">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-luxury-gold mb-2">500+</div>
                <div className="text-gray-700">Properties Sold</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-luxury-gold mb-2">$2B+</div>
                <div className="text-gray-700">Total Sales Volume</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-luxury-gold mb-2">100%</div>
                <div className="text-gray-700">Client Satisfaction</div>
              </div>
            </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
