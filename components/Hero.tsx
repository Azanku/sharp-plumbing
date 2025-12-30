import ContactForm from './ContactForm'

export default function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center bg-gradient-to-r from-sharp-navy via-sharp-blue to-sharp-navy">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
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
