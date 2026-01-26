import Hero from '@/components/Hero'
import VeridianSection from '@/components/CarolwoodSection'
import FeaturedProperties from '@/components/FeaturedProperties'
import AboutSection from '@/components/AboutSection'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="relative">
        <Navbar />
        <Hero />
      </div>
      <div className="py-10 bg-luxury-light"></div>
      <VeridianSection />
      <FeaturedProperties />
      <AboutSection />
      <Footer />
    </main>
  )
}
