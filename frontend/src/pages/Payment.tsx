import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import {
  CreditCard,
  Smartphone,
  Building2,
  Shield,
  CheckCircle,
} from "lucide-react";

export default function Payment() {
  const navigate = useNavigate();
  const location = useLocation();
  const bookingData = location.state || {};

  const [paymentType, setPaymentType] = useState<"full" | "advance">("full");
  const [paymentMethod, setPaymentMethod] = useState<"upi" | "card" | "netbanking">(
    "upi"
  );
  const [processing, setProcessing] = useState(false);

  const totalFare = bookingData.totalFare || 1000;
  const advanceAmount = Math.round(totalFare * 0.3);
  const amountToPay = paymentType === "full" ? totalFare : advanceAmount;

  const handlePayment = () => {
    setProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      const bookingId = "ADT" + Date.now().toString().slice(-8);
      navigate("/confirmation", {
        state: { ...bookingData, bookingId, amountPaid: amountToPay },
      });
    }, 2000);
  };

  return (
    <div className="bg-white min-h-screen">
      <Header />

      <div className="pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0B2C4D] mb-4">
              Payment
            </h1>
            <p className="text-gray-600">
              Choose your payment method and complete booking
            </p>
          </div>

          {/* Payment Summary */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border-2 border-gray-100 mb-6">
            <h2 className="text-2xl font-bold text-[#0B2C4D] mb-6">
              Payment Summary
            </h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <p className="text-gray-600">Total Fare</p>
                <p className="text-xl font-bold text-[#0B2C4D]">₹{totalFare}</p>
              </div>
            </div>

            {/* Payment Type Selection */}
            <div className="mb-6">
              <p className="font-semibold text-[#0B2C4D] mb-3">
                Select Payment Type
              </p>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setPaymentType("full")}
                  className={`p-4 border-2 rounded-lg transition-all ${
                    paymentType === "full"
                      ? "border-[#F7941D] bg-[#F7941D] bg-opacity-10"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <p className="font-semibold text-[#0B2C4D]">Full Payment</p>
                  <p className="text-lg font-bold text-[#F7941D] mt-1">
                    ₹{totalFare}
                  </p>
                </button>
                <button
                  onClick={() => setPaymentType("advance")}
                  className={`p-4 border-2 rounded-lg transition-all ${
                    paymentType === "advance"
                      ? "border-[#F7941D] bg-[#F7941D] bg-opacity-10"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <p className="font-semibold text-[#0B2C4D]">
                    Advance (30%)
                  </p>
                  <p className="text-lg font-bold text-[#F7941D] mt-1">
                    ₹{advanceAmount}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Pay rest to driver
                  </p>
                </button>
              </div>
            </div>

            {/* Amount to Pay */}
            <div className="bg-[#F7941D] bg-opacity-10 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <p className="font-semibold text-[#0B2C4D]">Amount to Pay</p>
                <p className="text-2xl font-bold text-[#F7941D]">
                  ₹{amountToPay}
                </p>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border-2 border-gray-100 mb-6">
            <h2 className="text-2xl font-bold text-[#0B2C4D] mb-6">
              Payment Method
            </h2>

            <div className="space-y-4 mb-6">
              {/* UPI */}
              <button
                onClick={() => setPaymentMethod("upi")}
                className={`w-full p-4 border-2 rounded-lg transition-all flex items-center gap-4 ${
                  paymentMethod === "upi"
                    ? "border-[#F7941D] bg-[#F7941D] bg-opacity-10"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="bg-[#F7941D] bg-opacity-20 p-3 rounded-lg">
                  <Smartphone className="text-[#F7941D]" size={24} />
                </div>
                <div className="text-left flex-1">
                  <p className="font-semibold text-[#0B2C4D]">UPI</p>
                  <p className="text-sm text-gray-600">
                    Google Pay, PhonePe, Paytm
                  </p>
                </div>
                {paymentMethod === "upi" && (
                  <CheckCircle className="text-[#F7941D]" size={24} />
                )}
              </button>

              {/* Card */}
              <button
                onClick={() => setPaymentMethod("card")}
                className={`w-full p-4 border-2 rounded-lg transition-all flex items-center gap-4 ${
                  paymentMethod === "card"
                    ? "border-[#F7941D] bg-[#F7941D] bg-opacity-10"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="bg-[#F7941D] bg-opacity-20 p-3 rounded-lg">
                  <CreditCard className="text-[#F7941D]" size={24} />
                </div>
                <div className="text-left flex-1">
                  <p className="font-semibold text-[#0B2C4D]">
                    Credit / Debit Card
                  </p>
                  <p className="text-sm text-gray-600">
                    Visa, Mastercard, Rupay
                  </p>
                </div>
                {paymentMethod === "card" && (
                  <CheckCircle className="text-[#F7941D]" size={24} />
                )}
              </button>

              {/* Net Banking */}
              <button
                onClick={() => setPaymentMethod("netbanking")}
                className={`w-full p-4 border-2 rounded-lg transition-all flex items-center gap-4 ${
                  paymentMethod === "netbanking"
                    ? "border-[#F7941D] bg-[#F7941D] bg-opacity-10"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="bg-[#F7941D] bg-opacity-20 p-3 rounded-lg">
                  <Building2 className="text-[#F7941D]" size={24} />
                </div>
                <div className="text-left flex-1">
                  <p className="font-semibold text-[#0B2C4D]">Net Banking</p>
                  <p className="text-sm text-gray-600">All Indian banks</p>
                </div>
                {paymentMethod === "netbanking" && (
                  <CheckCircle className="text-[#F7941D]" size={24} />
                )}
              </button>
            </div>

            {/* Security Note */}
            <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-lg p-4">
              <Shield className="text-green-600" size={20} />
              <p className="text-sm text-green-800">
                Your payment is secure and encrypted
              </p>
            </div>
          </div>

          {/* Pay Button */}
          <button
            onClick={handlePayment}
            disabled={processing}
            className={`w-full text-white py-4 rounded-lg transition-colors font-semibold text-lg flex items-center justify-center gap-2 ${
              processing
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#F7941D] hover:bg-[#e08519]"
            }`}
          >
            {processing ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Processing...
              </>
            ) : (
              `Pay ₹${amountToPay} & Confirm Booking`
            )}
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
