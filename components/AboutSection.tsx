import Link from 'next/link'
import Image from 'next/image'

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

          {/* Image Side */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-image.jpg"
                alt="Sharp Plumbing Team"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Callout Logo Overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4">
              <Image
                src="/images/logo-callout.png"
                alt="Sharp Plumbing"
                width={150}
                height={80}
                className="h-16 w-auto"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-sharp-gold/20 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
