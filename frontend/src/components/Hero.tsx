import { Link } from "react-router";
import { Phone, MapPin, Calendar, ArrowRight, Shield, Clock, Star } from "lucide-react";
import logo from "figma:asset/26fcf7e4fd10c8dcdad630b2744eb3a393fd2b37.png";

export function Hero() {
  return (
    <section id="home" className="pt-24 pb-12 px-4 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden min-h-screen flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF9933] rounded-full opacity-5 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1B3A5F] rounded-full opacity-5 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Decorative Dots Pattern */}
      <div className="absolute top-32 right-20 hidden lg:block opacity-20">
        <div className="grid grid-cols-4 gap-2">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-[#FF9933] rounded-full"></div>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Logo Badge - Mobile/Tablet */}
            <div className="lg:hidden flex justify-center mb-6">
              <div className="bg-white p-4 rounded-2xl shadow-xl border-2 border-[#FF9933]/20">
                <img 
                  src={logo} 
                  alt="Aditya Tours & Travels" 
                  className="h-20 w-auto"
                />
              </div>
            </div>

            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-[#FF9933]/10 border border-[#FF9933]/30 px-4 py-2 rounded-full mb-6">
              <Shield className="text-[#FF9933]" size={18} />
              <span className="text-sm font-semibold text-[#1B3A5F]">Trusted by 1000+ Customers</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B3A5F] mb-6 leading-tight">
              Premium Ertiga
              <span className="block text-[#FF9933] mt-2">
                Cab Service
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Experience comfortable, safe, and affordable rides with our well-maintained Maruti Suzuki Ertiga
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-gray-100">
                <Star className="text-[#FF9933]" size={18} fill="#FF9933" />
                <span className="text-sm font-medium text-gray-700">4.9 Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-gray-100">
                <Clock className="text-[#FF9933]" size={18} />
                <span className="text-sm font-medium text-gray-700">24/7 Service</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-gray-100">
                <MapPin className="text-[#FF9933]" size={18} />
                <span className="text-sm font-medium text-gray-700">All Routes</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link
                to="/booking"
                className="group bg-[#FF9933] text-white px-8 py-4 rounded-xl hover:bg-[#e68a2e] transition-all text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
              >
                Book Your Ride
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+919876543210"
                className="group bg-[#1B3A5F] text-white px-8 py-4 rounded-xl hover:bg-[#2a4a70] transition-all text-lg font-semibold flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <Phone size={20} className="group-hover:rotate-12 transition-transform" />
                Call Now
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <p className="text-2xl md:text-3xl font-bold text-[#FF9933]">₹12</p>
                <p className="text-xs md:text-sm text-gray-600">Per Kilometer</p>
              </div>
              <div className="text-center lg:text-left border-x border-gray-200">
                <p className="text-2xl md:text-3xl font-bold text-[#FF9933]">7</p>
                <p className="text-xs md:text-sm text-gray-600">Seater</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl md:text-3xl font-bold text-[#FF9933]">100%</p>
                <p className="text-xs md:text-sm text-gray-600">AC Comfort</p>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative order-1 lg:order-2 hidden md:block">
            {/* Floating Card with Image */}
            <div className="relative">
              {/* Main Image Card */}
              <div className="relative bg-gradient-to-br from-[#1B3A5F] to-[#2a4a70] p-4 md:p-6 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF9933]/20 to-transparent rounded-3xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1758223725156-ee49cc327a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBTVVYlMjB3aGl0ZSUyMGNhciUyMGhpZ2h3YXl8ZW58MXx8fHwxNzcwNDQ0MTYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Maruti Suzuki Ertiga"
                  className="relative z-10 w-full rounded-2xl shadow-lg object-cover h-[300px] md:h-[400px]"
                />
                
                {/* Floating Info Card */}
                <div className="absolute -bottom-6 -left-4 md:-left-6 bg-white p-4 rounded-2xl shadow-2xl border-2 border-[#FF9933]/20 z-20 animate-pulse">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#FF9933]/10 p-3 rounded-xl">
                      <Calendar className="text-[#FF9933]" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Book Today</p>
                      <p className="font-bold text-[#1B3A5F]">Save 20%</p>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="hidden md:block absolute -top-4 -right-4 bg-[#FF9933] text-white px-6 py-3 rounded-full shadow-xl z-20 rotate-12 transform hover:rotate-0 transition-transform">
                  <p className="font-bold text-lg">Available Now</p>
                </div>
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#FF9933]/20 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#1B3A5F]/20 rounded-full blur-2xl -z-10"></div>
            </div>

            {/* Desktop Logo Badge */}
            <div className="hidden lg:block absolute -bottom-12 right-0">
              <div className="bg-white p-6 rounded-2xl shadow-2xl border-2 border-[#FF9933]/20 transform hover:scale-110 transition-transform">
                <img 
                  src={logo} 
                  alt="Aditya Tours & Travels" 
                  className="h-16 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}