import { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us | Sharp Plumbing | Independence, MO | (816) 207-3561',
  description: 'Contact Sharp Plumbing for plumbing and HVAC services in Independence, MO. Call (816) 207-3561 or request a call back. Same-day services available.',
  openGraph: {
    title: 'Contact Us | Sharp Plumbing',
    description: 'Contact Sharp Plumbing for plumbing and HVAC services in Independence, MO.',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sharp-navy to-sharp-blue py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-sharp-gold font-semibold uppercase tracking-wider mb-4">
              Get In Touch
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-blue-100 text-lg">
              Ready to get started? Contact Sharp Plumbing today for expert plumbing, HVAC, and gas line services in the Independence, MO area.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-sharp-navy mb-6">Send a Message</h2>
              <ContactForm variant="page" />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-sharp-navy mb-6">Contact Information</h2>
              
              {/* Phone */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-sharp-navy mb-3">Phone</h3>
                <a href="tel:8162073561" className="flex items-center gap-3 text-2xl font-bold text-sharp-blue hover:underline">
                  <div className="w-12 h-12 bg-sharp-blue rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  (816) 207-3561
                </a>
              </div>

              {/* Business Hours */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-sharp-navy mb-4">Business Hours</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex justify-between">
                    <span>Mon - Fri</span>
                    <span className="font-medium text-sharp-navy">8:00 am - 6:00 pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium text-sharp-navy">8:00 am - 5:00 pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-sharp-navy">Closed</span>
                  </div>
                </div>
              </div>

              {/* Service Area */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-sharp-navy mb-2">Service Area</h3>
                <p className="text-gray-600 mb-3">Serving the Independence, MO Area and surrounding communities.</p>
                <Link href="/contact/serving-area" className="text-sharp-blue font-semibold hover:underline inline-flex items-center">
                  View Full Service Area
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Quick Links */}
              <div className="bg-sharp-navy rounded-2xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <Link href="/contact/request-call-back" className="flex items-center gap-2 text-blue-200 hover:text-sharp-gold transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Request Call Back
                  </Link>
                  <Link href="/contact/serving-area" className="flex items-center gap-2 text-blue-200 hover:text-sharp-gold transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Serving Area
                  </Link>
                  <Link href="/services" className="flex items-center gap-2 text-blue-200 hover:text-sharp-gold transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Our Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
