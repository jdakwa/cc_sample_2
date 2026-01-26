import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-luxury-text text-luxury-light border-t border-luxury-border/20">
      <div className="max-w-container mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl mb-4 tracking-tight">Veridian Realty Group</h3>
            <p className="text-sm text-luxury-light/60 leading-relaxed max-w-xs">
              Your trusted partner in luxury real estate. Excellence in every transaction.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-luxury-light/80 mb-6 font-medium">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-luxury-light/60">
              <li>
                <Link 
                  href="/" 
                  className="hover:text-luxury-light transition-colors duration-luxury inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/properties" 
                  className="hover:text-luxury-light transition-colors duration-luxury inline-block"
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="hover:text-luxury-light transition-colors duration-luxury inline-block"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="hover:text-luxury-light transition-colors duration-luxury inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-luxury-light/80 mb-6 font-medium">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-luxury-light/60">
              <li className="hover:text-luxury-light transition-colors duration-luxury cursor-pointer">
                Property Sales
              </li>
              <li className="hover:text-luxury-light transition-colors duration-luxury cursor-pointer">
                Property Management
              </li>
              <li className="hover:text-luxury-light transition-colors duration-luxury cursor-pointer">
                Investment Consulting
              </li>
              <li className="hover:text-luxury-light transition-colors duration-luxury cursor-pointer">
                Market Analysis
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-luxury-light/80 mb-6 font-medium">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-luxury-light/60 leading-relaxed">
              <li>123 Luxury Avenue</li>
              <li>Newport Beach, CA 92660</li>
              <li>
                <a 
                  href="tel:+15551234567" 
                  className="hover:text-luxury-light transition-colors duration-luxury"
                >
                  (555) 123-4567
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@veridianestates.com" 
                  className="hover:text-luxury-light transition-colors duration-luxury"
                >
                  info@veridianestates.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal */}
        <div className="border-t border-luxury-light/10 pt-8 text-center">
          <p className="text-xs text-luxury-light/40 tracking-wide">
            &copy; {new Date().getFullYear()} Veridian Realty Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
