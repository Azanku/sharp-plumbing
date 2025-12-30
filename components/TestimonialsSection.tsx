export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="section-subheading">Customer Reviews</p>
          <h2 className="section-heading">Here&apos;s what our satisfied customers are saying...</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            At <strong>Sharp Plumbing</strong>, we take pride in providing exceptional HVAC, gas line, water heater, drain, and sewer services to our customers. Your feedback helps us improve and helps others make informed decisions.
          </p>
        </div>

        {/* Google Guaranteed Badge */}
        <div className="flex justify-center">
          <div className="bg-white shadow-xl rounded-2xl p-8 flex items-center gap-6 border border-gray-100">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-xl text-gray-800 mb-1">Google Guaranteed</p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-500 mt-1">Trusted by homeowners in Independence, MO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
