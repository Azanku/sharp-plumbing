import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog | Sharp Plumbing | Independence, MO',
  description: 'Read the latest plumbing and HVAC tips, news, and advice from Sharp Plumbing in Independence, MO.',
  openGraph: {
    title: 'Blog | Sharp Plumbing',
    description: 'Latest plumbing and HVAC tips, news, and advice.',
    type: 'website',
  },
}

const blogPosts = [
  {
    title: 'When Should I Call a Residential Plumber?',
    author: 'Hibu Websites',
    date: 'August 20, 2025',
    excerpt: "In this article, we'll cover the key situations where calling a local team of residential plumbers is the right move. Give us a call today!",
  },
]

export default function BlogPage() {
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
              Blog
            </h1>
            <p className="text-gray-300 text-lg">
              Stay informed with the latest plumbing and HVAC tips, news, and advice from Sharp Plumbing.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-heading mb-8">Recent Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="card hover:border-sharp-gold border-2 border-transparent">
                <div className="mb-4">
                  <span className="text-sm text-gray-500">By {post.author} • {post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-sharp-navy mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <span className="inline-flex items-center text-sharp-gold font-semibold hover:underline cursor-pointer">
                  Read More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom text-center">
          <h2 className="section-heading mb-4">Need Plumbing or HVAC Services?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Contact Sharp Plumbing today for expert service in the Independence, MO area.
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
    </>
  )
}

