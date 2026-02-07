import { Award, Users, TrendingUp, Target } from "lucide-react";

export function AboutUs() {
  return (
    <section id="about" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5F] mb-6">
              About Aditya Tours & Travels
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Welcome to Aditya Tours & Travels, your trusted partner for
              comfortable and reliable cab services. We specialize in providing
              premium Maruti Suzuki Ertiga cab services for all your travel needs.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              With years of experience in the transportation industry, we
              understand the importance of punctuality, safety, and comfort. Our
              well-maintained vehicle and experienced driver ensure you reach your
              destination safely and on time.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Whether it's a one-way trip, round trip, airport transfer, or a full
              day booking, we're here to make your journey smooth and memorable.
              We serve local and outstation routes with complete dedication to
              customer satisfaction.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF9933] to-[#e68a2e] opacity-0 group-hover:opacity-5 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-gradient-to-br from-[#FF9933] to-[#e68a2e] p-2 rounded-lg">
                      <Award className="text-white" size={20} strokeWidth={2.5} />
                    </div>
                    <p className="text-4xl font-bold text-[#FF9933]">5+</p>
                  </div>
                  <p className="text-gray-600">Years Experience</p>
                </div>
              </div>
              <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1B3A5F] to-[#2a4a70] opacity-0 group-hover:opacity-5 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-gradient-to-br from-[#1B3A5F] to-[#2a4a70] p-2 rounded-lg">
                      <Users className="text-white" size={20} strokeWidth={2.5} />
                    </div>
                    <p className="text-4xl font-bold text-[#FF9933]">1000+</p>
                  </div>
                  <p className="text-gray-600">Happy Customers</p>
                </div>
              </div>
              <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF9933] to-[#e68a2e] opacity-0 group-hover:opacity-5 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-gradient-to-br from-[#FF9933] to-[#e68a2e] p-2 rounded-lg">
                      <TrendingUp className="text-white" size={20} strokeWidth={2.5} />
                    </div>
                    <p className="text-4xl font-bold text-[#FF9933]">4.9</p>
                  </div>
                  <p className="text-gray-600">Average Rating</p>
                </div>
              </div>
              <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1B3A5F] to-[#2a4a70] opacity-0 group-hover:opacity-5 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-gradient-to-br from-[#1B3A5F] to-[#2a4a70] p-2 rounded-lg">
                      <Target className="text-white" size={20} strokeWidth={2.5} />
                    </div>
                    <p className="text-4xl font-bold text-[#FF9933]">100%</p>
                  </div>
                  <p className="text-gray-600">On-Time Service</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1762885590956-06eecab2096b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBmYW1pbHklMjB0cmF2ZWxpbmclMjBjYXJ8ZW58MXx8fHwxNzcwNDQzNTAxfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Happy Customers"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}