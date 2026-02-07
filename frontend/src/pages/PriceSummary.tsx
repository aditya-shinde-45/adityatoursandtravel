import { useNavigate, useLocation } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { MapPin, Calendar, Clock, ArrowRight, Car } from "lucide-react";

export default function PriceSummary() {
  const navigate = useNavigate();
  const location = useLocation();
  const bookingData = location.state || {};

  // Price calculations
  const distance = bookingData.distance || 50;
  const ratePerKm = 12;
  const driverAllowance = 300;
  const baseFare = distance * ratePerKm;
  const totalFare =
    bookingData.tripType === "round-trip"
      ? baseFare * 2 + driverAllowance
      : baseFare + driverAllowance;

  const handleProceedToPayment = () => {
    navigate("/payment", {
      state: { ...bookingData, totalFare, distance },
    });
  };

  return (
    <div className="bg-white min-h-screen">
      <Header />

      <div className="pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0B2C4D] mb-4">
              Price Summary
            </h1>
            <p className="text-gray-600">Review your booking details and fare</p>
          </div>

          {/* Trip Details Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border-2 border-gray-100 mb-6">
            <h2 className="text-2xl font-bold text-[#0B2C4D] mb-6">
              Trip Details
            </h2>

            <div className="space-y-4">
              {/* Pickup & Drop */}
              <div className="flex items-start gap-4">
                <div className="bg-[#F7941D] bg-opacity-10 p-3 rounded-lg">
                  <MapPin className="text-[#F7941D]" size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-[#0B2C4D]">Route</p>
                  <p className="text-gray-600">
                    {bookingData.pickup || "Pickup Location"}
                  </p>
                  <p className="text-gray-400 text-sm">↓</p>
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

              {/* Trip Type */}
              <div className="flex items-start gap-4">
                <div className="bg-[#F7941D] bg-opacity-10 p-3 rounded-lg">
                  <Car className="text-[#F7941D]" size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-[#0B2C4D]">Trip Type</p>
                  <p className="text-gray-600 capitalize">
                    {bookingData.tripType || "One-way"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Price Breakdown Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border-2 border-gray-100 mb-6">
            <h2 className="text-2xl font-bold text-[#0B2C4D] mb-6">
              Fare Breakdown
            </h2>

            <div className="space-y-4">
              {/* Distance */}
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <div>
                  <p className="font-semibold text-[#0B2C4D]">Distance</p>
                  <p className="text-sm text-gray-600">
                    {bookingData.tripType === "round-trip"
                      ? `${distance} km × 2 (Round trip)`
                      : `${distance} km`}
                  </p>
                </div>
                <p className="text-lg font-semibold text-[#0B2C4D]">
                  {bookingData.tripType === "round-trip"
                    ? `${distance * 2} km`
                    : `${distance} km`}
                </p>
              </div>

              {/* Rate per km */}
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <p className="font-semibold text-[#0B2C4D]">Rate per km</p>
                <p className="text-lg font-semibold text-[#0B2C4D]">
                  ₹{ratePerKm}
                </p>
              </div>

              {/* Base Fare */}
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <p className="font-semibold text-[#0B2C4D]">Base Fare</p>
                <p className="text-lg font-semibold text-[#0B2C4D]">
                  ₹
                  {bookingData.tripType === "round-trip"
                    ? baseFare * 2
                    : baseFare}
                </p>
              </div>

              {/* Driver Allowance */}
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <div>
                  <p className="font-semibold text-[#0B2C4D]">
                    Driver Allowance
                  </p>
                  <p className="text-sm text-gray-600">Per trip</p>
                </div>
                <p className="text-lg font-semibold text-[#0B2C4D]">
                  ₹{driverAllowance}
                </p>
              </div>

              {/* Total Fare */}
              <div className="flex justify-between items-center pt-4 bg-[#F7941D] bg-opacity-10 p-4 rounded-lg">
                <p className="text-xl font-bold text-[#0B2C4D]">Total Fare</p>
                <p className="text-3xl font-bold text-[#F7941D]">
                  ₹{totalFare}
                </p>
              </div>
            </div>
          </div>

          {/* Important Note */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-900">
              <strong>Note:</strong> This is an estimated fare. Final fare may
              vary based on actual distance and route taken. Toll charges and
              parking fees (if any) are additional.
            </p>
          </div>

          {/* Proceed to Payment Button */}
          <button
            onClick={handleProceedToPayment}
            className="w-full bg-[#F7941D] text-white py-4 rounded-lg hover:bg-[#e08519] transition-colors font-semibold text-lg flex items-center justify-center gap-2"
          >
            Proceed to Payment
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
