import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Reviews | Sharp Plumbing | Independence, MO',
  description: 'Read customer reviews for Sharp Plumbing in Independence, MO. See what our satisfied customers are saying about our plumbing and HVAC services.',
  openGraph: {
    title: 'Reviews | Sharp Plumbing',
    description: 'See what our satisfied customers are saying about our services.',
    type: 'website',
  },
}

export default function ReviewsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-sharp-navy py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-sharp-gold font-semibold uppercase tracking-wider mb-4">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Reviews
            </h1>
            <p className="text-gray-300 text-lg">
              See what our satisfied customers are saying about Sharp Plumbing.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-heading mb-6">Here&apos;s what our satisfied customers are saying...</h2>
            <p className="text-gray-600 mb-8">
              At <strong>Sharp Plumbing</strong>, we take pride in providing exceptional HVAC, gas line, water heater, drain, and sewer services to our customers. We would be grateful if you could share your thoughts about our business with others. Your feedback helps us improve and helps others make informed decisions. Please take a moment to leave a review of Sharp Plumbing and let others know what you think.
            </p>

            {/* Google Guaranteed Badge */}
            <div className="flex justify-center mb-12">
              <div className="bg-white shadow-lg rounded-lg p-6 flex items-center gap-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-800">Google Guaranteed</p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8162073561" className="btn-primary text-lg">
                Call (816) 207-3561
              </a>
              <Link href="/contact/request-call-back" className="btn-secondary text-lg">
                Request Call Back
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

