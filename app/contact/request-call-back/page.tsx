import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Request Call Back | Sharp Plumbing | Independence, MO',
  description: 'Request a call back from Sharp Plumbing. Our team will contact you promptly to discuss your plumbing or HVAC needs in Independence, MO.',
  openGraph: {
    title: 'Request Call Back | Sharp Plumbing',
    description: 'Request a call back from our plumbing and HVAC experts.',
    type: 'website',
  },
}

export default function RequestCallBackPage() {
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
              Request Call Back
            </h1>
            <p className="text-gray-300 text-lg">
              Fill out the form below and our team will contact you promptly to discuss your plumbing or HVAC needs.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-sharp-navy mb-6">Hero Request Form</h2>
              <ContactForm variant="page" />
            </div>

            <div>
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-sharp-navy mb-4">Why Request a Call Back?</h3>
                <ul className="space-y-4">
                  {[
                    'Get personalized attention from our expert team',
                    'Discuss your specific plumbing or HVAC needs',
                    'Receive a free estimate for your project',
                    'Schedule a convenient service appointment',
                    'Learn about our current promotions and deals',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600">
                      <svg className="w-5 h-5 text-sharp-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 p-4 bg-sharp-navy rounded-lg text-white">
                  <p className="font-semibold mb-2">Need immediate assistance?</p>
                  <a href="tel:8162073561" className="text-sharp-gold text-xl font-bold hover:underline">
                    Call (816) 207-3561
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

