import { Link } from "react-router";
import { ArrowRight, Phone, Calendar, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#1B3A5F] via-[#2a4a70] to-[#1B3A5F] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#FF9933] rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#FF9933] rounded-full opacity-10 blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Icon Badge */}
        <div className="inline-flex items-center gap-2 bg-[#FF9933]/20 border border-[#FF9933]/30 px-4 py-2 rounded-full mb-6">
          <Sparkles className="text-[#FF9933]" size={18} />
          <span className="text-sm font-semibold text-white">Special Offer Available</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to Book Your Ertiga?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Experience comfortable and reliable travel. Book now and enjoy our
          premium service!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <Link
            to="/booking"
            className="group inline-flex items-center gap-2 bg-[#FF9933] text-white px-10 py-5 rounded-xl hover:bg-[#e68a2e] transition-all text-xl font-semibold shadow-2xl hover:shadow-3xl hover:scale-105"
          >
            <Calendar size={24} className="group-hover:rotate-12 transition-transform" />
            Book Now
            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="tel:+919876543210"
            className="inline-flex items-center gap-2 text-xl text-white font-semibold hover:text-[#FF9933] transition-colors px-6 py-3 bg-white/10 rounded-xl hover:bg-white/20"
          >
            <Phone size={24} />
            Call: +91 98765 43210
          </a>
        </div>
        
        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <div className="flex items-center gap-2 text-white/80">
            <div className="w-2 h-2 bg-[#FF9933] rounded-full"></div>
            <span className="text-sm">Instant Confirmation</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <div className="w-2 h-2 bg-[#FF9933] rounded-full"></div>
            <span className="text-sm">24/7 Support</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <div className="w-2 h-2 bg-[#FF9933] rounded-full"></div>
            <span className="text-sm">Easy Cancellation</span>
          </div>
        </div>
      </div>
    </section>
  );
}