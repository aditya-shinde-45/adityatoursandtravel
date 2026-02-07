import { Link } from "react-router";
import { Phone, Mail, MessageCircle } from "lucide-react";
import logo from "figma:asset/26fcf7e4fd10c8dcdad630b2744eb3a393fd2b37.png";

export function Footer() {
  return (
    <footer className="bg-[#1B3A5F] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <img
                src={logo}
                alt="Aditya Tours & Travels"
                className="h-20 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner for comfortable and reliable Ertiga cab
              services. Safe, affordable, and on-time every time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-[#FF9933] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("about");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-gray-300 hover:text-[#FF9933] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("services");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-gray-300 hover:text-[#FF9933] transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <Link
                  to="/booking"
                  className="text-gray-300 hover:text-[#FF9933] transition-colors"
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#FF9933] transition-colors"
                >
                  <Phone size={18} />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@adityatours.com"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#FF9933] transition-colors"
                >
                  <Mail size={18} />
                  info@adityatours.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#FF9933] transition-colors"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Aditya Tours & Travels. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}