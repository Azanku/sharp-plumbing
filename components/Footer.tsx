import Link from 'next/link'

const servingAreas = [
  'Kansas City Metropolitan Area',
  'Lenexa, KS',
  'Leawood, KS',
  'Liberty, MO',
  'Mission, KS',
  'Gladstone, MO',
  'Parkville, MO',
  'Kansas City, KS',
  'Blue Springs, MO',
  'Independence, MO',
  "Lee's Summit, MO",
  'Roeland Park, KS',
  'Overland Park, KS',
  'Prairie Village, KS',
  'North Kansas City, MO',
  'and surrounding areas',
]

const siteLinks = [
  { name: 'Home', href: '/' },
  { name: 'AC Services', href: '/services/ac-services' },
  { name: 'Appliances Installation', href: '/services/appliances-installation' },
  { name: 'Drains and Pipes', href: '/services/drains-and-pipes' },
  { name: 'Gas Line Services', href: '/services/gas-line-services' },
  { name: 'Heating Services', href: '/services/heating-services' },
  { name: 'Sewer Services', href: '/services/sewer-services' },
  { name: 'Water Heater Services', href: '/services/water-heater-services' },
]

export default function Footer() {
  return (
    <footer className="bg-sharp-navy text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-sharp-gold">Sharp</span> Plumbing
            </div>
            <p className="text-blue-200 mb-4">
              Local, Family Owned Company since 1970. Serving Independence, MO and the Kansas City Metropolitan Area.
            </p>
            <a
              href="tel:8162073561"
              className="inline-flex items-center gap-2 text-sharp-gold font-semibold hover:underline"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (816) 207-3561
            </a>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-sharp-gold">Business Hours</h3>
            <div className="space-y-2 text-blue-200">
              <div className="flex justify-between">
                <span>Mon - Fri</span>
                <span className="text-white">8:00 am - 6:00 pm</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white">8:00 am - 5:00 pm</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white">Closed</span>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sharp-gold mt-4 hover:underline"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send a Message
            </Link>
          </div>

          {/* Site Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-sharp-gold">Quick Links</h3>
            <ul className="space-y-2">
              {siteLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-blue-200 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Serving Area */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-sharp-gold">Serving Area</h3>
            <ul className="space-y-1 text-sm text-blue-200">
              {servingAreas.slice(0, 10).map((area, index) => (
                <li key={index}>{area}</li>
              ))}
              <li>
                <Link href="/contact/serving-area" className="text-sharp-gold hover:underline">
                  View all areas →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-blue-200">
              © 2025 Sharp Plumbing. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-200">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/conditions-of-use" className="hover:text-white transition-colors">
                Terms of Use
              </Link>
              <Link href="/website-accessibility-policy" className="hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
