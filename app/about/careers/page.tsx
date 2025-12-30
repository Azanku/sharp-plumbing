import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Careers | Sharp Plumbing | Independence, MO',
  description: 'Join the Sharp Plumbing team! We are looking for skilled plumbers, HVAC technicians, and service professionals in Independence, MO. Apply today.',
  openGraph: {
    title: 'Careers | Sharp Plumbing',
    description: 'Join our team of skilled professionals in Independence, MO.',
    type: 'website',
  },
}

export default function CareersPage() {
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
              Careers
            </h1>
            <p className="text-gray-300 text-lg">
              Join our team of skilled professionals and build a rewarding career with Sharp Plumbing.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-heading mb-6">Join the Sharp Plumbing Team</h2>
            <p className="text-gray-600 mb-6">
              Sharp Plumbing is always looking for talented, hardworking individuals to join our growing team. As a family-owned company with over 75 years of combined experience, we value dedication, professionalism, and a commitment to customer satisfaction.
            </p>

            <div className="bg-gray-50 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-bold text-sharp-navy mb-4">Why Work With Us:</h3>
              <ul className="space-y-3">
                {[
                  'Competitive pay and benefits',
                  'Opportunities for advancement',
                  'Ongoing training and development',
                  'Family-friendly work environment',
                  'Stable, year-round employment',
                  'Work with a respected local company',
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
              If you&apos;re interested in joining our team, contact us today to learn about current openings and opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:8162073561" className="btn-primary text-lg">
                Call (816) 207-3561
              </a>
              <Link href="/contact" className="btn-secondary text-lg">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

