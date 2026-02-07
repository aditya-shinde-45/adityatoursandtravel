import { Link } from "react-router";
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "figma:asset/26fcf7e4fd10c8dcdad630b2744eb3a393fd2b37.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Aditya Tours & Travels" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-[#1B3A5F] hover:text-[#FF9933] transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-[#1B3A5F] hover:text-[#FF9933] transition-colors font-medium"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-[#1B3A5F] hover:text-[#FF9933] transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-[#1B3A5F] hover:text-[#FF9933] transition-colors font-medium"
            >
              Contact
            </button>
            <Link
              to="/booking"
              className="bg-[#FF9933] text-white px-6 py-2.5 rounded-lg hover:bg-[#e68a2e] transition-colors font-semibold shadow-md hover:shadow-lg"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#1B3A5F]"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-[#1B3A5F] hover:text-[#FF9933] transition-colors text-left py-2 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-[#1B3A5F] hover:text-[#FF9933] transition-colors text-left py-2 font-medium"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-[#1B3A5F] hover:text-[#FF9933] transition-colors text-left py-2 font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-[#1B3A5F] hover:text-[#FF9933] transition-colors text-left py-2 font-medium"
              >
                Contact
              </button>
              <Link
                to="/booking"
                className="bg-[#FF9933] text-white px-6 py-2.5 rounded-lg hover:bg-[#e68a2e] transition-colors text-center font-semibold"
              >
                Book Now
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}