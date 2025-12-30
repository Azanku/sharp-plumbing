import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Financing Options | Sharp Plumbing | Independence, MO',
  description: 'Flexible financing options for plumbing and HVAC services in Independence, MO. Sharp Plumbing makes home comfort affordable. Call (816) 207-3561.',
  openGraph: {
    title: 'Financing Options | Sharp Plumbing',
    description: 'Flexible financing options for plumbing and HVAC services.',
    type: 'website',
  },
}

export default function FinancePage() {
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
              Finance
            </h1>
            <p className="text-gray-300 text-lg">
              Flexible financing options to make your home comfort projects affordable.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-heading mb-6">Affordable Home Comfort Solutions</h2>
            <p className="text-gray-600 mb-6">
              At Sharp Plumbing, we understand that plumbing and HVAC repairs or installations can be unexpected expenses. That&apos;s why we offer flexible financing options to help you get the services you need without straining your budget.
            </p>
            <p className="text-gray-600 mb-6">
              Our financing programs feature competitive rates and flexible payment terms. Whether you need a new water heater, AC installation, or emergency plumbing repair, we can help you find a payment plan that works for your situation.
            </p>

            <div className="bg-gray-50 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-bold text-sharp-navy mb-4">Financing Benefits:</h3>
              <ul className="space-y-3">
                {[
                  'Competitive interest rates',
                  'Flexible payment terms',
                  'Quick and easy application process',
                  'No prepayment penalties',
                  'Budget-friendly monthly payments',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-600">
                    <svg className="w-5 h-5 text-sharp-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-gray-600 mb-8">
              Contact us today to learn more about our financing options and how we can help make your home comfort projects affordable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
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

