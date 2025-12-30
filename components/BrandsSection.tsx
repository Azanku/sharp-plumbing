import Image from 'next/image'

const brands = [
  { name: 'Moen', logo: '/images/brands/moen.png' },
  { name: 'Delta', logo: '/images/brands/delta.png' },
  { name: 'Kohler', logo: '/images/brands/kohler.png' },
  { name: 'Gerber', logo: '/images/brands/gerber.jpg' },
  { name: 'State', logo: '/images/brands/state.jpg' },
  { name: 'Bradford White', logo: '/images/brands/bradford-white.png' },
  { name: 'Navien', logo: '/images/brands/navien.jpg' },
  { name: 'Rinnai', logo: '/images/brands/rinnai.png' },
  { name: 'Daikin', logo: '/images/brands/daikin.png' },
  { name: 'Lennox', logo: '/images/brands/lennox.png' },
  { name: 'York', logo: '/images/brands/york.jpg' },
  { name: 'Amana', logo: '/images/brands/amana.png' },
  { name: 'Goodman', logo: '/images/brands/goodman.jpg' },
  { name: 'Trane', logo: '/images/brands/trane.png' },
  { name: 'Bryant', logo: '/images/brands/bryant.png' },
  { name: 'Carrier', logo: '/images/brands/carrier.png' },
  { name: 'Rheem', logo: '/images/brands/rheem.png' },
  { name: 'American Standard', logo: '/images/brands/american-standard.jpg' },
  { name: 'Ruud', logo: '/images/brands/ruud.png' },
  { name: 'Coleman', logo: '/images/brands/coleman.png' },
  { name: 'Heil', logo: '/images/brands/heil.png' },
]

export default function BrandsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="section-subheading">Trusted Partners</p>
          <h2 className="text-2xl md:text-3xl font-bold text-sharp-navy mb-4">
            We Work With Industry-Leading Brands
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sharp Plumbing is proud to install, repair, and service products from the most trusted names in plumbing, HVAC, and water heating.
          </p>
        </div>
        
        {/* Brands Grid */}
        <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 h-20 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-200"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={120}
                  height={60}
                  className="max-h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-sharp-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="font-semibold text-sharp-navy mb-1">Plumbing Fixtures</h3>
            <p className="text-gray-500 text-sm">Moen, Delta, Kohler, Gerber & more</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
              </svg>
            </div>
            <h3 className="font-semibold text-sharp-navy mb-1">Water Heaters</h3>
            <p className="text-gray-500 text-sm">Rinnai, Rheem, Navien, Bradford White & more</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-sharp-navy mb-1">HVAC Systems</h3>
            <p className="text-gray-500 text-sm">Trane, Carrier, Lennox, Goodman & more</p>
          </div>
        </div>
      </div>
    </section>
  )
}
