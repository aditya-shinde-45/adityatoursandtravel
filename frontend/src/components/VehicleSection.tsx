import { Link } from "react-router";
import { Users, Snowflake, Briefcase, User, ArrowRight, Gauge, Shield } from "lucide-react";

export function VehicleSection() {
  return (
    <section id="vehicle" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5F] text-center mb-12">
          Our Vehicle
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Vehicle Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1694928938628-5be5454d3302?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYXJ1dGklMjBTdXp1a2klMjBFcnRpZ2ElMjB3aGl0ZSUyMGNhcnxlbnwxfHx8fDE3NzA0NDI0NTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Maruti Suzuki Ertiga"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>

          {/* Vehicle Details */}
          <div>
            <h3 className="text-3xl font-bold text-[#1B3A5F] mb-4">
              Maruti Suzuki Ertiga
            </h3>
            <p className="text-gray-600 mb-6">
              Travel in comfort with our well-maintained, spacious Ertiga. Perfect
              for families and groups.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-[#FF9933] to-[#e68a2e] p-3 rounded-xl shadow-lg">
                  <Users className="text-white" size={28} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="font-semibold text-[#1B3A5F]">
                    Seating Capacity
                  </p>
                  <p className="text-gray-600">Up to 7 passengers</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-[#1B3A5F] to-[#2a4a70] p-3 rounded-xl shadow-lg">
                  <Snowflake className="text-white" size={28} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="font-semibold text-[#1B3A5F]">AC Vehicle</p>
                  <p className="text-gray-600">Fully air-conditioned</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-[#FF9933] to-[#e68a2e] p-3 rounded-xl shadow-lg">
                  <Briefcase className="text-white" size={28} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="font-semibold text-[#1B3A5F]">Luggage Space</p>
                  <p className="text-gray-600">Ample storage for bags</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-[#1B3A5F] to-[#2a4a70] p-3 rounded-xl shadow-lg">
                  <User className="text-white" size={28} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="font-semibold text-[#1B3A5F]">
                    Experienced Driver
                  </p>
                  <p className="text-gray-600">Professional & courteous</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-[#FF9933] to-[#e68a2e] p-3 rounded-xl shadow-lg">
                  <Shield className="text-white" size={28} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="font-semibold text-[#1B3A5F]">
                    Insured & Safe
                  </p>
                  <p className="text-gray-600">Fully insured for your safety</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-[#1B3A5F] to-[#2a4a70] p-3 rounded-xl shadow-lg">
                  <Gauge className="text-white" size={28} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="font-semibold text-[#1B3A5F]">
                    GPS Enabled
                  </p>
                  <p className="text-gray-600">Real-time tracking available</p>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="bg-gradient-to-br from-[#FF9933]/10 to-[#FF9933]/5 p-6 rounded-xl mb-6 border-2 border-[#FF9933]/20">
              <p className="text-sm text-[#1B3A5F] mb-2">Starting from</p>
              <p className="text-4xl font-bold text-[#FF9933]">₹12/km</p>
              <p className="text-sm text-gray-600 mt-2">
                + Driver allowance (for outstation trips)
              </p>
            </div>

            {/* CTA */}
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 bg-[#1B3A5F] text-white px-8 py-4 rounded-lg hover:bg-[#2a4a70] transition-all text-lg font-semibold shadow-md hover:shadow-lg hover:scale-105"
            >
              Book This Car
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}