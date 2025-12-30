import Image from 'next/image'
import ContactForm from './ContactForm'

export default function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Plumbing Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sharp-navy/95 via-sharp-navy/85 to-sharp-navy/70"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="text-white">
            <p className="text-sharp-gold font-semibold uppercase tracking-wider mb-4 animate-fade-in-up">
              Local, Family Owned Company Since 1970
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up animation-delay-100">
              Home Comfort Solutions
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-sharp-gold mb-6 animate-fade-in-up animation-delay-200">
              Independence, MO
            </h2>
            <div className="space-y-3 mb-8 animate-fade-in-up animation-delay-300">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-sharp-gold rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-sharp-navy" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg">Same-Day Services Available</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-sharp-gold rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-sharp-navy" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg">Warranties on All Work</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-sharp-gold rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-sharp-navy" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg">Free Estimates</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
              <a href="tel:8162073561" className="btn-primary text-lg">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (816) 207-3561
              </a>
            </div>

            {/* Google Guarantee Badge */}
            <div className="mt-8 animate-fade-in-up animation-delay-500">
              <div className="inline-flex items-center gap-2 bg-white rounded-full pl-1 pr-4 py-1 shadow-lg border border-gray-100">
                {/* Green Checkmark Circle */}
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  {/* Google text with brand colors */}
                  <div className="flex items-center">
                    <span className="text-[#4285F4] font-medium text-base">G</span>
                    <span className="text-[#EA4335] font-medium text-base">o</span>
                    <span className="text-[#FBBC05] font-medium text-base">o</span>
                    <span className="text-[#4285F4] font-medium text-base">g</span>
                    <span className="text-[#34A853] font-medium text-base">l</span>
                    <span className="text-[#EA4335] font-medium text-base">e</span>
                  </div>
                  <p className="text-gray-800 font-semibold text-sm -mt-0.5">Guaranteed</p>
                  {/* Stars */}
                  <div className="flex gap-0.5 -mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="animate-fade-in-up animation-delay-200">
            <ContactForm variant="hero" />
          </div>
        </div>
      </div>
    </section>
  )
}
