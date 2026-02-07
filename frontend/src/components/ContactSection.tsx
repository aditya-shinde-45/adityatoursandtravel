import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export function ContactSection() {
  const contacts = [
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
      gradient: "from-[#FF9933] to-[#e68a2e]",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Chat with us",
      href: "https://wa.me/919876543210",
      gradient: "from-[#1B3A5F] to-[#2a4a70]",
      external: true,
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@adityatours.com",
      href: "mailto:info@adityatours.com",
      gradient: "from-[#FF9933] to-[#e68a2e]",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Serving All Major Cities",
      gradient: "from-[#1B3A5F] to-[#2a4a70]",
    },
  ];

  return (
    <section id="contact" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5F] text-center mb-4">
          Get In Touch
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Have questions? We're here to help. Contact us anytime!
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((contact, index) => {
            const Component = contact.href ? 'a' : 'div';
            const props = contact.href ? {
              href: contact.href,
              ...(contact.external && {
                target: "_blank",
                rel: "noopener noreferrer"
              })
            } : {};

            return (
              <Component
                key={index}
                {...props}
                className="group bg-gray-50 p-6 rounded-xl hover:shadow-2xl transition-all hover:scale-105 text-center relative overflow-hidden"
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${contact.gradient} rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <contact.icon className="text-white" size={28} strokeWidth={2.5} />
                  </div>
                  <h3 className="font-bold text-[#1B3A5F] mb-2">{contact.title}</h3>
                  <p className="text-gray-600">{contact.value}</p>
                </div>
              </Component>
            );
          })}
        </div>
      </div>
    </section>
  );
}