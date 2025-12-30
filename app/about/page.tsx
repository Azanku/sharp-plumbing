import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Sharp Plumbing | Family Owned Since 1970 | Independence, MO',
  description: 'Learn about Sharp Plumbing - a local, family-owned plumbing and HVAC company serving Independence, MO since 1970. Over 75 years of combined experience.',
  openGraph: {
    title: 'About Sharp Plumbing | Family Owned Since 1970',
    description: 'Local, family-owned plumbing and HVAC company serving Independence, MO since 1970.',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sharp-navy to-sharp-blue py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-sharp-gold font-semibold uppercase tracking-wider mb-4">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Solutions as sharp as our name.
            </h1>
            <p className="text-2xl text-sharp-gold font-semibold mb-6">
              Family owned and operated since 1970
            </p>
            <p className="text-blue-100 text-lg">
              Sharp Plumbing has been the trusted name in plumbing, HVAC, and gas line services for the Independence, MO Area since 1970.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading mb-6">Expert Plumbing, HVAC, and Other Comfort Solutions</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Sharp Plumbing has been the trusted name in plumbing, HVAC, and gas line services for the Independence, MO Area since 1970. With over 75 years of combined experience, our team of skilled professionals delivers fast, reliable solutions for all your home comfort needs. As a local, family- and woman-owned business, we understand the unique challenges faced by Independence, MO homeowners and are committed to providing personalized service that exceeds expectations.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  At Sharp Plumbing, we pride ourselves on our commitment to customer satisfaction. We offer free estimates and same-day services, and we respond to calls and emails promptly, usually within the same business day. Our comprehensive warranties on all work provide peace of mind, and we even handle insurance work. With our money-saving deals and efficient services, we ensure that your systems operate at peak performance without breaking the bank. Contact our local plumbers in Independence, MO today to learn more!
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-3xl p-8">
              <div className="aspect-video bg-sharp-navy rounded-2xl flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <div className="w-16 h-16 bg-sharp-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-sharp-navy ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm text-blue-200">Watch our story</p>
                </div>
              </div>
              <p className="text-center text-gray-500 mt-4 text-sm">
                Sharp Plumbing team stands in front of their logo on building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-heading text-center mb-12">Why Choose Our Local Plumbers in Independence, MO</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Same-Day Services Available', icon: '⏰', desc: 'Fast response when you need us most' },
              { title: 'Warranties on All Work', icon: '🛡️', desc: 'Peace of mind on every job' },
              { title: 'Free Estimates', icon: '📋', desc: 'Transparent, upfront pricing' },
              { title: 'We Provide Insurance Work', icon: '📄', desc: 'Working with your insurance company' },
              { title: 'Money-Saving Deals', icon: '💰', desc: 'Quality service at affordable prices' },
              { title: 'Over 75 Years of Combined Experience', icon: '🏆', desc: 'Trusted expertise you can rely on' },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-sharp-navy mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Links */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-heading text-center mb-12">Learn More About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Finance', href: '/about/finance', description: 'Flexible financing options for your plumbing and HVAC needs.' },
              { title: 'Careers', href: '/about/careers', description: 'Join our team of skilled professionals.' },
              { title: 'FAQs', href: '/about/faqs', description: 'Answers to frequently asked questions.' },
              { title: 'Reviews', href: '/about/reviews', description: 'See what our customers are saying.' },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="bg-gray-50 rounded-2xl p-6 hover:bg-sharp-blue hover:text-white group transition-all border border-gray-100"
              >
                <h3 className="text-xl font-bold text-sharp-navy group-hover:text-white transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 group-hover:text-blue-100 transition-colors">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sharp-gold py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-sharp-navy mb-4">Ready to Experience the Sharp Difference?</h2>
          <p className="text-sharp-navy/80 max-w-2xl mx-auto mb-8">
            Contact us today for expert plumbing, HVAC, and gas line services in the Independence, MO area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8162073561" className="btn-secondary text-lg">
              Call (816) 207-3561
            </a>
            <Link href="/contact/request-call-back" className="bg-white text-sharp-navy font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center text-lg shadow-lg">
              Request Call Back
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
