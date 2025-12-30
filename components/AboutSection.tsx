import Link from 'next/link'

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div>
            <p className="section-subheading">About Us</p>
            <h2 className="section-heading mb-6">
              Solutions as sharp as our name.
            </h2>
            <p className="text-2xl text-sharp-blue font-semibold mb-6">
              Family owned and operated since 1970
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Sharp Plumbing has been the trusted name in plumbing, HVAC, and gas line services for the Independence, MO Area since 1970. With over 75 years of combined experience, our team of skilled professionals delivers fast, reliable solutions for all your home comfort needs.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              As a local, family- and woman-owned business, we understand the unique challenges faced by Independence, MO homeowners and are committed to providing personalized service that exceeds expectations.
            </p>
            <Link href="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </div>

          {/* Image/Video Side */}
          <div className="relative">
            <div className="bg-gradient-to-br from-sharp-navy to-sharp-blue rounded-3xl overflow-hidden shadow-2xl aspect-video flex items-center justify-center">
              <div className="text-center text-white p-8">
                <div className="w-20 h-20 bg-sharp-gold rounded-full flex items-center justify-center mx-auto mb-6 cursor-pointer hover:scale-110 transition-transform shadow-lg">
                  <svg className="w-10 h-10 text-sharp-navy ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Learn more about</h3>
                <h4 className="text-3xl font-bold text-sharp-gold">Sharp Plumbing</h4>
                <p className="mt-4 text-blue-100 max-w-sm mx-auto">
                  Serving Independence, MO Area with HVAC, gas line, drain, and sewer services since 1970.
                </p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-sharp-gold rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
