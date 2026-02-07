import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { QuickBookingWidget } from "../components/QuickBookingWidget";
import { VehicleSection } from "../components/VehicleSection";
import { ServicesSection } from "../components/ServicesSection";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { AboutUs } from "../components/AboutUs";
import { HowBookingWorks } from "../components/HowBookingWorks";
import { MapSection } from "../components/MapSection";
import { CTASection } from "../components/CTASection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <Hero />
      <QuickBookingWidget />
      <VehicleSection />
      <ServicesSection />
      <WhyChooseUs />
      <AboutUs />
      <HowBookingWorks />
      <MapSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
}
