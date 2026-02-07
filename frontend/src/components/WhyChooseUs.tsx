import { Clock, Car, IndianRupee, Shield } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Clock,
      title: "On-Time Pickup",
      description: "We value your time and ensure punctual service every time",
      color: "bg-gradient-to-br from-[#FF9933] to-[#e68a2e]",
    },
    {
      icon: Car,
      title: "Clean & Well-Maintained",
      description: "Regular servicing and cleanliness checks for your comfort",
      color: "bg-gradient-to-br from-[#1B3A5F] to-[#2a4a70]",
    },
    {
      icon: IndianRupee,
      title: "Transparent Pricing",
      description: "No hidden charges, clear pricing structure upfront",
      color: "bg-gradient-to-br from-[#FF9933] to-[#e68a2e]",
    },
    {
      icon: Shield,
      title: "Safe Journey",
      description: "Experienced drivers and well-maintained vehicles",
      color: "bg-gradient-to-br from-[#1B3A5F] to-[#2a4a70]",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5F] text-center mb-4">
          Why Choose Us
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Your trusted travel partner for comfortable and reliable journeys
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group">
              <div className={`inline-flex items-center justify-center w-20 h-20 ${reason.color} rounded-2xl mb-4 shadow-xl group-hover:scale-110 transition-transform`}>
                <reason.icon className="text-white" size={36} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold text-[#1B3A5F] mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}