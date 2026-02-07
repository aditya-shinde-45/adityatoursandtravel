import { useState } from "react";
import { useNavigate } from "react-router";
import { MapPin, Calendar, Clock, ArrowRight, Navigation } from "lucide-react";

export function QuickBookingWidget() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    pickup: "",
    drop: "",
    date: "",
    time: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/booking", { state: formData });
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 relative overflow-hidden">
          {/* Decorative Gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#FF9933]/10 to-transparent rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#1B3A5F]/10 to-transparent rounded-tr-full"></div>
          
          <div className="relative z-10">
            {/* Header with Icon */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="bg-gradient-to-br from-[#FF9933] to-[#e68a2e] p-3 rounded-xl shadow-lg">
                <Navigation className="text-white" size={28} strokeWidth={2.5} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5F]">
                Quick Booking
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Pickup Location */}
                <div>
                  <label className="block text-sm font-medium text-[#1B3A5F] mb-2">
                    Pickup Location
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 bg-gradient-to-br from-[#FF9933] to-[#e68a2e] p-2 rounded-lg">
                      <MapPin className="text-white" size={16} strokeWidth={2.5} />
                    </div>
                    <input
                      type="text"
                      value={formData.pickup}
                      onChange={(e) =>
                        setFormData({ ...formData, pickup: e.target.value })
                      }
                      placeholder="Enter pickup location"
                      className="w-full pl-14 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FF9933] focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Drop Location */}
                <div>
                  <label className="block text-sm font-medium text-[#1B3A5F] mb-2">
                    Drop Location
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 bg-gradient-to-br from-[#1B3A5F] to-[#2a4a70] p-2 rounded-lg">
                      <MapPin className="text-white" size={16} strokeWidth={2.5} />
                    </div>
                    <input
                      type="text"
                      value={formData.drop}
                      onChange={(e) =>
                        setFormData({ ...formData, drop: e.target.value })
                      }
                      placeholder="Enter drop location"
                      className="w-full pl-14 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FF9933] focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-sm font-medium text-[#1B3A5F] mb-2">
                    Date
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 bg-gradient-to-br from-[#FF9933] to-[#e68a2e] p-2 rounded-lg">
                      <Calendar className="text-white" size={16} strokeWidth={2.5} />
                    </div>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className="w-full pl-14 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FF9933] focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Time */}
                <div>
                  <label className="block text-sm font-medium text-[#1B3A5F] mb-2">
                    Time
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 bg-gradient-to-br from-[#1B3A5F] to-[#2a4a70] p-2 rounded-lg">
                      <Clock className="text-white" size={16} strokeWidth={2.5} />
                    </div>
                    <input
                      type="time"
                      value={formData.time}
                      onChange={(e) =>
                        setFormData({ ...formData, time: e.target.value })
                      }
                      className="w-full pl-14 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FF9933] focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Map Preview */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 border-2 border-gray-200">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Distance will be calculated automatically</span>
                  <span className="text-[#FF9933] font-semibold flex items-center gap-1">
                    <span className="text-lg">₹12/km</span>
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group w-full bg-gradient-to-r from-[#FF9933] to-[#e68a2e] text-white py-4 rounded-xl hover:shadow-2xl transition-all text-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:scale-105"
              >
                Check Availability
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}