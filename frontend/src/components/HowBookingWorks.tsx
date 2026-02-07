import { MapPin, Calendar, CreditCard, CheckCircle2 } from "lucide-react";

export function HowBookingWorks() {
  const steps = [
    {
      number: "1",
      icon: MapPin,
      title: "Choose Pickup & Drop",
      description: "Enter your pickup and drop locations",
    },
    {
      number: "2",
      icon: Calendar,
      title: "Select Date & Time",
      description: "Pick your preferred date and time",
    },
    {
      number: "3",
      icon: CreditCard,
      title: "Confirm Price",
      description: "Review the calculated fare",
    },
    {
      number: "4",
      icon: CheckCircle2,
      title: "Pay Online",
      description: "Secure payment and instant confirmation",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5F] text-center mb-4">
          How Booking Works
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Simple and hassle-free booking process in just 4 steps
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-[#FF9933] opacity-20"></div>
              )}

              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#FF9933] to-[#e68a2e] text-white rounded-full text-3xl font-bold mb-4 shadow-xl relative">
                  <step.icon className="absolute" size={32} strokeWidth={2.5} />
                  <span className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#1B3A5F] rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#1B3A5F] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}