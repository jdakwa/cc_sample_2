import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-luxury-dark text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">Veridian Estates</h3>
            <p className="text-gray-400">
              Your trusted partner in luxury real estate. Excellence in every transaction.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-luxury-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-luxury-gold transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-luxury-gold transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-luxury-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-luxury-gold transition-colors cursor-pointer">
                Property Sales
              </li>
              <li className="hover:text-luxury-gold transition-colors cursor-pointer">
                Property Management
              </li>
              <li className="hover:text-luxury-gold transition-colors cursor-pointer">
                Investment Consulting
              </li>
              <li className="hover:text-luxury-gold transition-colors cursor-pointer">
                Market Analysis
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Luxury Avenue</li>
              <li>Beverly Hills, CA 90210</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@veridianestates.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Veridian Estates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
