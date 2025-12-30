export default function PromoSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="section-subheading">Special Offers</p>
          <h2 className="section-heading">Money-Saving Deals</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* $20 Off Promo */}
          <div className="bg-gradient-to-br from-sharp-navy to-sharp-blue rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sharp-gold/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative">
              <div className="inline-block bg-sharp-gold text-sharp-navy font-bold text-2xl px-4 py-2 rounded-lg mb-4">
                $20 OFF
              </div>
              <h3 className="text-xl font-bold mb-3">Any Service</h3>
              <p className="text-blue-100 mb-4">
                Save $20 on any plumbing service from Sharp Plumbing. From repairs to installations, we&apos;ve got you covered across the Independence, MO area.
              </p>
              <p className="text-sm text-blue-200 mb-4 italic">
                Must mention this coupon at the time of scheduling.
              </p>
              <a href="tel:8162073561" className="btn-primary">
                Call Now
              </a>
            </div>
          </div>

          {/* Tankless Water Heater Promo */}
          <div className="bg-gradient-to-br from-sharp-gold to-yellow-500 rounded-2xl p-8 text-sharp-navy relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative">
              <div className="inline-block bg-sharp-navy text-white font-bold text-2xl px-4 py-2 rounded-lg mb-4">
                $25 OFF
              </div>
              <h3 className="text-xl font-bold mb-3">Tankless Water Heater Savings</h3>
              <p className="text-sharp-navy/80 mb-4">
                Get $25 off our tankless water heater maintenance flush. Extend the life of your system and ensure peak performance.
              </p>
              <p className="text-sm text-sharp-navy/60 mb-4 italic">
                Must mention this coupon at the time of scheduling.
              </p>
              <a href="tel:8162073561" className="btn-secondary">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
