import Link from 'next/link'

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Same-Day Services Available',
    description: 'We respond quickly to your plumbing and HVAC emergencies.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Warranties on All Work',
    description: 'Peace of mind with comprehensive warranties on every job.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: 'Free Estimates',
    description: 'Transparent pricing with no hidden fees or surprises.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="section-subheading">Why Choose Us</p>
            <h2 className="section-heading mb-6">Why Choose Our Local Plumbers in Independence, MO</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              At Sharp Plumbing, we pride ourselves on our commitment to customer satisfaction. We offer free estimates and same-day services, and we respond to calls and emails promptly, usually within the same business day.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center text-sharp-blue">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-sharp-navy mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link href="/contact/request-call-back" className="btn-primary">
                Request Call Back
              </Link>
            </div>
          </div>

          {/* Image/Stats Side */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-2xl">
                  <div className="text-4xl font-bold text-sharp-navy mb-2">75+</div>
                  <p className="text-gray-600 text-sm">Years Combined Experience</p>
                </div>
                <div className="text-center p-6 bg-yellow-50 rounded-2xl">
                  <div className="text-4xl font-bold text-sharp-navy mb-2">1970</div>
                  <p className="text-gray-600 text-sm">Family Owned Since</p>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-2xl">
                  <div className="text-4xl font-bold text-sharp-navy mb-2">100%</div>
                  <p className="text-gray-600 text-sm">Satisfaction Guaranteed</p>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-2xl">
                  <div className="text-4xl font-bold text-sharp-navy mb-2">24/7</div>
                  <p className="text-gray-600 text-sm">Emergency Service</p>
                </div>
              </div>
              
              {/* Google Guaranteed Badge */}
              <div className="mt-6 flex items-center justify-center gap-3 p-4 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-800">Google Guaranteed</p>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
