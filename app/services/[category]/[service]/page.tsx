import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import { serviceCategories, getServiceBySlugs, getAllServices } from '@/data/services'
import ContactForm from '@/components/ContactForm'

interface Props {
  params: Promise<{ category: string; service: string }>
}

export async function generateStaticParams() {
  const allServices = getAllServices()
  return allServices.map(({ category, service }) => ({
    category: category.slug,
    service: service.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: categorySlug, service: serviceSlug } = await params
  const result = getServiceBySlugs(categorySlug, serviceSlug)
  
  if (!result) {
    return {
      title: 'Service Not Found | Sharp Plumbing',
    }
  }

  const { service } = result

  return {
    title: `${service.title} | Sharp Plumbing | Independence, MO`,
    description: service.metaDescription,
    openGraph: {
      title: `${service.title} | Sharp Plumbing`,
      description: service.metaDescription,
      type: 'website',
    },
  }
}

export default async function ServicePage({ params }: Props) {
  const { category: categorySlug, service: serviceSlug } = await params
  const result = getServiceBySlugs(categorySlug, serviceSlug)

  if (!result) {
    notFound()
  }

  const { category, service } = result

  // Get related services (other services in same category)
  const relatedServices = category.services.filter(s => s.slug !== service.slug).slice(0, 4)

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4 border-b border-gray-100">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-sharp-blue transition-colors">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href={`/services/${category.slug}`} className="text-gray-500 hover:text-sharp-blue transition-colors">
              {category.title}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-sharp-navy font-medium">{service.title}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sharp-navy to-sharp-blue py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-sharp-gold font-semibold uppercase tracking-wider mb-4">
              {category.title}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {service.title}
            </h1>
            <p className="text-blue-100 text-lg">
              {service.description}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="tel:8162073561" className="btn-primary text-lg">
                Call (816) 207-3561
              </a>
              <Link href="/contact/request-call-back" className="btn-outline-light text-lg">
                Request Call Back
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                {service.content.split('\n\n').map((paragraph, index) => {
                  // Check if paragraph is a list
                  if (paragraph.startsWith('- ')) {
                    const items = paragraph.split('\n').filter(item => item.startsWith('- '))
                    return (
                      <ul key={index} className="space-y-3 mb-6">
                        {items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-600">
                            <svg className="w-5 h-5 text-sharp-blue flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>{item.replace('- ', '')}</span>
                          </li>
                        ))}
                      </ul>
                    )
                  }
                  return (
                    <p key={index} className="text-gray-600 mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  )
                })}
              </div>

              {/* Why Choose Us */}
              <div className="mt-12 bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-sharp-navy mb-6">
                  Why Choose Sharp Plumbing?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Same-Day Services Available',
                    'Warranties on All Work',
                    'Free Estimates',
                    'Over 75 Years Combined Experience',
                    'Family Owned Since 1970',
                    'Licensed & Insured Professionals',
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-sharp-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                <ContactForm variant="sidebar" />

                {/* Quick Contact */}
                <div className="bg-sharp-navy rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">Need {service.title}?</h3>
                  <p className="text-blue-100 mb-4">
                    Contact our expert team today for fast, reliable service in the Independence, MO area.
                  </p>
                  <a
                    href="tel:8162073561"
                    className="flex items-center gap-2 text-sharp-gold font-semibold text-lg hover:underline"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    (816) 207-3561
                  </a>
                </div>

                {/* Related Services */}
                {relatedServices.length > 0 && (
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <h3 className="text-lg font-bold text-sharp-navy mb-4">Related Services</h3>
                    <ul className="space-y-3">
                      {relatedServices.map((related) => (
                        <li key={related.slug}>
                          <Link
                            href={`/services/${category.slug}/${related.slug}`}
                            className="flex items-center gap-2 text-gray-600 hover:text-sharp-blue transition-colors"
                          >
                            <svg className="w-4 h-4 text-sharp-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            {related.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sharp-gold py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-sharp-navy mb-4">
            Ready for {service.title}?
          </h2>
          <p className="text-sharp-navy/80 max-w-2xl mx-auto mb-8">
            Contact Sharp Plumbing today. We offer free estimates, same-day services, and warranties on all work.
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
