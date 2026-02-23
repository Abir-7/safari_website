"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
type PaymentMethod = "stripe" | "paypal";

interface PaymentOption {
  id: PaymentMethod;
  label: string;
  icon: React.ReactNode;
}

// ---------------------------------------------------------------------------
// Icons
// ---------------------------------------------------------------------------
function StripeIcon() {
  return (
    <div
      className="w-8 h-8 rounded-md flex items-center justify-center"
      style={{ backgroundColor: "#635BFF" }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M7.2 5.8c0-.7.6-1 1.5-.9 1.3.1 2.6.6 3.5 1.3V3.1C11.2 2.4 10 2 8.7 2 6 2 4.2 3.4 4.2 5.9c0 3.9 5.4 3.3 5.4 5 0 .8-.7 1-1.6 1-1.4 0-3-.6-4-1.4v3.1c1.1.5 2.3.8 3.5.8 2.7 0 4.6-1.3 4.6-3.9C12.1 6.7 7.2 7.4 7.2 5.8z"
          fill="white"
        />
      </svg>
    </div>
  );
}

function PaypalIcon() {
  return (
    <div
      className="w-8 h-8 rounded-md flex items-center justify-center"
      style={{ backgroundColor: "#003087" }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M12.5 4.5C12.5 6.9 10.9 8.5 8 8.5H6.5L5.5 14H3L5 2h5C11.7 2 12.5 3.1 12.5 4.5z"
          fill="#009CDE"
        />
        <path
          d="M13.5 6C13.5 8.4 11.9 10 9 10H7.5L6.5 15H4L6 3h5C12.7 3 13.5 4.6 13.5 6z"
          fill="white"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Payment options
// ---------------------------------------------------------------------------
const PAYMENT_OPTIONS: PaymentOption[] = [
  { id: "stripe", label: "Stripe", icon: <StripeIcon /> },
  { id: "paypal", label: "Paypal", icon: <PaypalIcon /> },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
const PaymentTypeModal = () => {
  const [selected, setSelected] = useState<PaymentMethod | null>(null);

  const handleContinue = (): void => {
    if (!selected) return;
    console.log("Payment method selected:", selected);
  };

  return (
    <Dialog>
      <DialogTrigger
        className="w-full py-3.5 rounded-xl font-bold text-base tracking-wide hover:opacity-90"
        style={{
          backgroundColor: "#3d2510",
          color: "#f5f0e8",
        }}
      >
        Payment
      </DialogTrigger>

      <DialogContent
        className="sm:max-w-md rounded-2xl p-7"
        style={{ fontFamily: "'Georgia', serif" }}
      >
        <DialogHeader className="mb-4">
          <DialogTitle
            className="text-xl font-bold"
            style={{ color: "#2c1f0e" }}
          >
            Payment method
          </DialogTitle>
          <DialogDescription
            className="text-sm mt-1"
            style={{ color: "#7a6a55" }}
          >
            Choose the type of payment you&apos;re looking for.
          </DialogDescription>
        </DialogHeader>

        {/* Options */}
        <div
          className="rounded-xl overflow-hidden border"
          style={{ borderColor: "#e8e0d0" }}
        >
          {PAYMENT_OPTIONS.map((option, i) => (
            <button
              key={option.id}
              onClick={() => setSelected(option.id)}
              className="w-full flex items-center justify-between px-4 py-4 transition-colors hover:bg-[#faf7f2] focus:outline-none"
              style={{
                borderBottom:
                  i < PAYMENT_OPTIONS.length - 1 ? "1px solid #e8e0d0" : "none",
                backgroundColor:
                  selected === option.id ? "#faf7f2" : "transparent",
              }}
            >
              {/* Left: icon + label */}
              <div className="flex items-center gap-3">
                {option.icon}
                <span
                  className="text-sm font-medium"
                  style={{ color: "#2c1f0e" }}
                >
                  {option.label}
                </span>
              </div>

              {/* Right: radio circle */}
              <div
                className="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors"
                style={{
                  borderColor: selected === option.id ? "#3d2510" : "#c8b49a",
                }}
              >
                {selected === option.id && (
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: "#3d2510" }}
                  />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Continue button */}
        <div className="flex justify-end mt-5">
          <button
            onClick={handleContinue}
            disabled={!selected}
            className="px-7 py-3 rounded-full font-bold text-sm tracking-wide transition-opacity"
            style={{
              backgroundColor: selected ? "#3d2510" : "#c8b49a",
              color: "#f5f0e8",
              fontFamily: "'Georgia', serif",
              cursor: selected ? "pointer" : "not-allowed",
              opacity: selected ? 1 : 0.7,
            }}
          >
            Continue
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentTypeModal;
