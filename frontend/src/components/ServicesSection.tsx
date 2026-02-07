import { ArrowLeftRight, RefreshCw, Plane, Clock } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: ArrowLeftRight,
      title: "One-Way Trips",
      description: "Convenient pickup and drop service for single journey",
      gradient: "from-[#FF9933] to-[#e68a2e]",
    },
    {
      icon: RefreshCw,
      title: "Round Trips",
      description: "Complete round-trip service with flexible timings",
      gradient: "from-[#1B3A5F] to-[#2a4a70]",
    },
    {
      icon: Plane,
      title: "Airport Pickup & Drop",
      description: "Reliable airport transfers, on-time guaranteed",
      gradient: "from-[#FF9933] to-[#e68a2e]",
    },
    {
      icon: Clock,
      title: "Full Day Cab",
      description: "Book the car for the entire day at your disposal",
      gradient: "from-[#1B3A5F] to-[#2a4a70]",
    },
  ];

  return (
    <section id="services" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5F] text-center mb-4">
          Our Services
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Flexible booking options to suit your travel needs
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all hover:scale-105 relative overflow-hidden"
            >
              {/* Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
              
              <div className="relative z-10">
                <div className={`bg-gradient-to-br ${service.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <service.icon className="text-white" size={32} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold text-[#1B3A5F] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}