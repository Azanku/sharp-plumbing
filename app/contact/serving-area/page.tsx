import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Serving Area | Sharp Plumbing | Independence, MO | Kansas City Metro',
  description: 'Sharp Plumbing serves Independence, MO and the Kansas City Metropolitan Area including Lee\'s Summit, Blue Springs, Overland Park, and surrounding areas.',
  openGraph: {
    title: 'Serving Area | Sharp Plumbing',
    description: 'Serving Independence, MO and the Kansas City Metropolitan Area.',
    type: 'website',
  },
}

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
  'Fairway, KS 66205',
  'Mission Hills, KS',
  'Overland Park, KS',
  'Westwood, KS 66205',
  'Prairie Village, KS',
  'North Kansas City, MO',
  'Westwood Hills, KS 66205',
  'and surrounding areas',
]

export default function ServingAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-sharp-navy py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-sharp-gold font-semibold uppercase tracking-wider mb-4">
              Contact Us
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Serving Area
            </h1>
            <p className="text-gray-300 text-lg">
              Sharp Plumbing proudly serves Independence, MO and the greater Kansas City Metropolitan Area.
            </p>
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-heading mb-6">Areas We Serve</h2>
              <p className="text-gray-600 mb-8">
                Serving Independence, MO Area, Sharp Plumbing specializes in HVAC, gas line, drain, and sewer services. Same-day services available. Warranties on all work. Free estimates. Call us today.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {servingAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-700">
                    <svg className="w-4 h-4 text-sharp-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {area}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-sharp-navy mb-6">Contact Us Today</h3>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-600 mb-2">Call us for service in your area:</p>
                    <a href="tel:8162073561" className="flex items-center gap-3 text-2xl font-bold text-sharp-gold hover:underline">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      (816) 207-3561
                    </a>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-semibold text-sharp-navy mb-3">Business Hours</h4>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex justify-between">
                        <span>Mon - Fri</span>
                        <span>8:00 am - 6:00 pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span>8:00 am - 5:00 pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <Link href="/contact/request-call-back" className="btn-primary w-full text-center">
                      Request Call Back
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sharp-gold py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-sharp-navy mb-4">
            Serving Your Community Since 1970
          </h2>
          <p className="text-sharp-navy/80 max-w-2xl mx-auto mb-8">
            Local, family-owned company with over 75 years of combined experience. Same-day services available with warranties on all work.
          </p>
          <a href="tel:8162073561" className="btn-secondary text-lg">
            Call (816) 207-3561
          </a>
        </div>
      </section>
    </>
  )
}

