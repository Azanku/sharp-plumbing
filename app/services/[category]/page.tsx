import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import { serviceCategories, getCategoryBySlug } from '@/data/services'
import ContactForm from '@/components/ContactForm'

interface Props {
  params: Promise<{ category: string }>
}

export async function generateStaticParams() {
  return serviceCategories.map((category) => ({
    category: category.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: categorySlug } = await params
  const category = getCategoryBySlug(categorySlug)
  
  if (!category) {
    return {
      title: 'Service Not Found | Sharp Plumbing',
    }
  }

  return {
    title: `${category.title} | Sharp Plumbing | Independence, MO`,
    description: category.metaDescription,
    openGraph: {
      title: `${category.title} | Sharp Plumbing`,
      description: category.metaDescription,
      type: 'website',
    },
  }
}

export default async function ServiceCategoryPage({ params }: Props) {
  const { category: categorySlug } = await params
  const category = getCategoryBySlug(categorySlug)

  if (!category) {
    notFound()
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sharp-navy to-sharp-blue py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-sharp-gold font-semibold uppercase tracking-wider mb-4">
              Our Services
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {category.title}
            </h1>
            <p className="text-blue-100 text-lg">
              {category.description}
            </p>
            <div className="mt-8">
              <a href="tel:8162073561" className="btn-primary text-lg">
                Call (816) 207-3561
              </a>
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
                {category.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-600 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Services List */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-sharp-navy mb-6">
                  Our {category.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${category.slug}/${service.slug}`}
                      className="bg-white rounded-xl p-4 border border-gray-200 hover:border-sharp-blue hover:shadow-lg transition-all group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-sharp-blue transition-colors">
                          <svg className="w-6 h-6 text-sharp-blue group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-sharp-navy group-hover:text-sharp-blue transition-colors">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                    </Link>
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
                  <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                  <p className="text-blue-100 mb-4">
                    Our expert team is ready to assist you with all your plumbing and HVAC needs.
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="container-custom text-center">
          <h2 className="section-heading mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Contact Sharp Plumbing today for expert {category.title.toLowerCase()} in the Independence, MO area.
            We offer free estimates and same-day services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8162073561" className="btn-primary text-lg">
              Call (816) 207-3561
            </a>
            <Link href="/contact/request-call-back" className="btn-secondary text-lg">
              Request Call Back
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
