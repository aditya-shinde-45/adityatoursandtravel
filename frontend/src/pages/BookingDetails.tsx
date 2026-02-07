import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import {
  MapPin,
  Calendar,
  Clock,
  ArrowRight,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function BookingDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialData = location.state || {};

  const [formData, setFormData] = useState({
    pickup: initialData.pickup || "",
    drop: initialData.drop || "",
    date: initialData.date || "",
    time: initialData.time || "",
    tripType: "one-way",
  });

  const [availability, setAvailability] = useState<
    "checking" | "available" | "unavailable" | null
  >(null);

  const checkAvailability = () => {
    setAvailability("checking");
    // Simulate checking availability
    setTimeout(() => {
      // Random availability for demo
      const isAvailable = Math.random() > 0.2;
      setAvailability(isAvailable ? "available" : "unavailable");
    }, 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (availability === "available") {
      // Calculate mock distance
      const distance = Math.floor(Math.random() * 150) + 20;
      navigate("/price-summary", {
        state: { ...formData, distance },
      });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Header />

      <div className="pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0B2C4D] mb-4">
              Book Your Ertiga
            </h1>
            <p className="text-gray-600">
              Fill in your trip details to check availability
            </p>
          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border-2 border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Pickup Location */}
              <div>
                <label className="block text-sm font-semibold text-[#0B2C4D] mb-2">
                  Pickup Location *
                </label>
                <div className="relative">
                  <MapPin
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[#F7941D]"
                    size={20}
                  />
                  <input
                    type="text"
                    value={formData.pickup}
                    onChange={(e) =>
                      setFormData({ ...formData, pickup: e.target.value })
                    }
                    placeholder="Enter pickup location"
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#F7941D] focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Drop Location */}
              <div>
                <label className="block text-sm font-semibold text-[#0B2C4D] mb-2">
                  Drop Location *
                </label>
                <div className="relative">
                  <MapPin
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0B2C4D]"
                    size={20}
                  />
                  <input
                    type="text"
                    value={formData.drop}
                    onChange={(e) =>
                      setFormData({ ...formData, drop: e.target.value })
                    }
                    placeholder="Enter drop location"
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#F7941D] focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Date and Time */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#0B2C4D] mb-2">
                    Date *
                  </label>
                  <div className="relative">
                    <Calendar
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-[#F7941D]"
                      size={20}
                    />
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#F7941D] focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0B2C4D] mb-2">
                    Time *
                  </label>
                  <div className="relative">
                    <Clock
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0B2C4D]"
                      size={20}
                    />
                    <input
                      type="time"
                      value={formData.time}
                      onChange={(e) =>
                        setFormData({ ...formData, time: e.target.value })
                      }
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#F7941D] focus:outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Trip Type */}
              <div>
                <label className="block text-sm font-semibold text-[#0B2C4D] mb-2">
                  Trip Type
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, tripType: "one-way" })
                    }
                    className={`p-4 border-2 rounded-lg transition-all ${
                      formData.tripType === "one-way"
                        ? "border-[#F7941D] bg-[#F7941D] bg-opacity-10"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <p className="font-semibold text-[#0B2C4D]">One-Way</p>
                    <p className="text-sm text-gray-600">Single journey</p>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, tripType: "round-trip" })
                    }
                    className={`p-4 border-2 rounded-lg transition-all ${
                      formData.tripType === "round-trip"
                        ? "border-[#F7941D] bg-[#F7941D] bg-opacity-10"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <p className="font-semibold text-[#0B2C4D]">Round Trip</p>
                    <p className="text-sm text-gray-600">Return journey</p>
                  </button>
                </div>
              </div>

              {/* Check Availability Button */}
              {!availability && (
                <button
                  type="button"
                  onClick={checkAvailability}
                  className="w-full bg-[#0B2C4D] text-white py-4 rounded-lg hover:bg-[#164164] transition-colors font-semibold"
                >
                  Check Availability
                </button>
              )}

              {/* Availability Status */}
              {availability === "checking" && (
                <div className="text-center py-4">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#F7941D]"></div>
                  <p className="text-gray-600 mt-2">Checking availability...</p>
                </div>
              )}

              {availability === "available" && (
                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 flex items-center gap-3">
                  <CheckCircle className="text-green-600" size={24} />
                  <div>
                    <p className="font-semibold text-green-800">
                      Vehicle Available!
                    </p>
                    <p className="text-sm text-green-700">
                      You can proceed with the booking
                    </p>
                  </div>
                </div>
              )}

              {availability === "unavailable" && (
                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 flex items-center gap-3">
                  <XCircle className="text-red-600" size={24} />
                  <div>
                    <p className="font-semibold text-red-800">
                      Already Booked
                    </p>
                    <p className="text-sm text-red-700">
                      Please try a different date or time
                    </p>
                  </div>
                </div>
              )}

              {/* Proceed Button */}
              {availability === "available" && (
                <button
                  type="submit"
                  className="w-full bg-[#F7941D] text-white py-4 rounded-lg hover:bg-[#e08519] transition-colors font-semibold flex items-center justify-center gap-2"
                >
                  Proceed to Price Summary
                  <ArrowRight size={20} />
                </button>
              )}
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
