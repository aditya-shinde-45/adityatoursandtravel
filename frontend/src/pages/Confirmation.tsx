import { useLocation, Link } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import {
  CheckCircle,
  MessageCircle,
  Phone,
  Download,
  MapPin,
  Calendar,
  Car,
  CreditCard,
} from "lucide-react";

export default function Confirmation() {
  const location = useLocation();
  const bookingData = location.state || {};

  return (
    <div className="bg-white min-h-screen">
      <Header />

      <div className="pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Success Message */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6">
              <CheckCircle className="text-green-600" size={56} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#0B2C4D] mb-4">
              Booking Confirmed!
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              Your Ertiga cab has been booked successfully
            </p>
            <p className="text-gray-500">
              A confirmation has been sent to your contact details
            </p>
          </div>

          {/* Booking ID Card */}
          <div className="bg-gradient-to-r from-[#0B2C4D] to-[#164164] rounded-2xl shadow-xl p-6 md:p-8 mb-6 text-white">
            <p className="text-sm opacity-80 mb-2">Booking ID</p>
            <p className="text-3xl md:text-4xl font-bold tracking-wider">
              {bookingData.bookingId || "ADT12345678"}
            </p>
            <p className="text-sm opacity-80 mt-4">
              Keep this ID for future reference
            </p>
          </div>

          {/* Trip Summary */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border-2 border-gray-100 mb-6">
            <h2 className="text-2xl font-bold text-[#0B2C4D] mb-6">
              Trip Summary
            </h2>

            <div className="space-y-4">
              {/* Route */}
              <div className="flex items-start gap-4">
                <div className="bg-[#F7941D] bg-opacity-10 p-3 rounded-lg">
                  <MapPin className="text-[#F7941D]" size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-[#0B2C4D]">Route</p>
                  <p className="text-gray-600">
                    {bookingData.pickup || "Pickup Location"}
                  </p>
                  <p className="text-gray-400 text-sm my-1">↓</p>
                  <p className="text-gray-600">
                    {bookingData.drop || "Drop Location"}
                  </p>
                </div>
              </div>

              {/* Date & Time */}
              <div className="flex items-start gap-4">
                <div className="bg-[#F7941D] bg-opacity-10 p-3 rounded-lg">
                  <Calendar className="text-[#F7941D]" size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-[#0B2C4D]">Date & Time</p>
                  <p className="text-gray-600">
                    {bookingData.date || "Not specified"} at{" "}
                    {bookingData.time || "Not specified"}
                  </p>
                </div>
              </div>

              {/* Vehicle */}
              <div className="flex items-start gap-4">
                <div className="bg-[#F7941D] bg-opacity-10 p-3 rounded-lg">
                  <Car className="text-[#F7941D]" size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-[#0B2C4D]">Vehicle</p>
                  <p className="text-gray-600">
                    Maruti Suzuki Ertiga (7-Seater)
                  </p>
                </div>
              </div>

              {/* Payment */}
              <div className="flex items-start gap-4">
                <div className="bg-[#F7941D] bg-opacity-10 p-3 rounded-lg">
                  <CreditCard className="text-[#F7941D]" size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-[#0B2C4D]">
                    Amount Paid
                  </p>
                  <p className="text-gray-600">
                    ₹{bookingData.amountPaid || bookingData.totalFare || 0}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Information */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="font-bold text-blue-900 mb-3">
              Important Information
            </h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li>• Driver will contact you 30 minutes before pickup time</li>
              <li>• Please be ready at the pickup location on time</li>
              <li>• Carry a valid ID proof for verification</li>
              <li>• For any changes, contact us at least 2 hours in advance</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {/* WhatsApp Support */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 bg-[#25D366] text-white p-4 rounded-lg hover:bg-[#20BA5A] transition-colors"
            >
              <MessageCircle size={24} />
              <span className="font-semibold">WhatsApp Support</span>
            </a>

            {/* Call Driver */}
            <a
              href="tel:+919876543210"
              className="flex flex-col items-center gap-2 bg-[#0B2C4D] text-white p-4 rounded-lg hover:bg-[#164164] transition-colors"
            >
              <Phone size={24} />
              <span className="font-semibold">Call Us</span>
            </a>

            {/* Download Receipt */}
            <button className="flex flex-col items-center gap-2 bg-[#F7941D] text-white p-4 rounded-lg hover:bg-[#e08519] transition-colors">
              <Download size={24} />
              <span className="font-semibold">Download Receipt</span>
            </button>
          </div>

          {/* Back to Home */}
          <div className="text-center">
            <Link
              to="/"
              className="inline-block text-[#0B2C4D] hover:text-[#F7941D] transition-colors font-semibold"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
