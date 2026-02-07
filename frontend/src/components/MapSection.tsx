export function MapSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5F] text-center mb-4">
          Route Preview
        </h2>
        <p className="text-center text-gray-600 mb-8">
          We serve all major routes in the region
        </p>

        {/* Map Container */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-gray-100">
          <div className="relative h-[400px] md:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.4037088855047!2d72.8776559!3d19.0759837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c63aceef0c69%3A0x2aa80cf2287dfa3b!2sJuhu%20Beach!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Service Area Map"
            ></iframe>
          </div>

          {/* Map Info */}
          <div className="p-6 bg-[#1B3A5F] text-white">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-[#FF9933]">₹12/km</p>
                <p className="text-sm">Base Rate</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#FF9933]">24/7</p>
                <p className="text-sm">Available</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#FF9933]">All Routes</p>
                <p className="text-sm">Coverage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}