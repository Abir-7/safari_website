/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import PaymentTypeModal from "./payment_type_modal";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface BookingData {
  name: string;
  email: string;
  phone: string;
  country: string;
  numberOfPeople: number;
  numberOfChildren: number;
  resident: string;
  numberOfSeats: number;
}

interface PassItem {
  id: string;
  label: string;
  price: number;
  quantity: number;
}

// ---------------------------------------------------------------------------
// Static helpers
// ---------------------------------------------------------------------------
const BOOKING_FIELDS: { label: string; key: keyof BookingData }[] = [
  { label: "Name", key: "name" },
  { label: "Email", key: "email" },
  { label: "Phone", key: "phone" },
  { label: "Country", key: "country" },
  { label: "Number of people", key: "numberOfPeople" },
  { label: "Number of children", key: "numberOfChildren" },
  { label: "Resident", key: "resident" },
  { label: "Number of seats", key: "numberOfSeats" },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function BookingInfoSummary() {
  const [bookingData, setBookingData] = useState<BookingData | null>(null);
  const [coupon, setCoupon] = useState<string>("");

  const [passes, setPasses] = useState<PassItem[]>([
    {
      id: "adult",
      label: "Safari Park Pass (Adult)",
      price: 500,
      quantity: 0,
    },
    {
      id: "child",
      label: "Safari Park Pass (Child)",
      price: 250,
      quantity: 0,
    },
  ]);

  // ---------------------------------------------------------------------------
  // Load booking data
  // ---------------------------------------------------------------------------
  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = localStorage.getItem("booking_data");
    if (!stored) return;

    try {
      const parsed = JSON.parse(stored);

      const mapped: BookingData = {
        name: parsed.form?.name ?? "",
        email: parsed.form?.email ?? "",
        phone: parsed.form?.phone ?? "",
        country: parsed.form?.country ?? "",
        numberOfPeople: Number(parsed.form?.number_of_people ?? 0),
        numberOfChildren: Number(parsed.form?.number_of_chlids ?? 0),
        resident: parsed.form?.residents ?? "",
        numberOfSeats: Number(parsed.form?.number_of_sits ?? 0),
      };

      setBookingData(mapped);
    } catch (error) {
      console.error("Invalid booking data in localStorage");
    }
  }, []);

  // ---------------------------------------------------------------------------
  // Sync passes with booking data
  // ---------------------------------------------------------------------------
  useEffect(() => {
    if (!bookingData) return;

    setPasses([
      {
        id: "adult",
        label: "Safari Park Pass (Adult)",
        price: 500,
        quantity: bookingData.numberOfPeople,
      },
      {
        id: "child",
        label: "Safari Park Pass (Child)",
        price: 250,
        quantity: bookingData.numberOfChildren,
      },
    ]);
  }, [bookingData]);

  // ---------------------------------------------------------------------------
  // Update quantity
  // ---------------------------------------------------------------------------
  const updateQuantity = (id: string, delta: number): void => {
    setPasses((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, quantity: Math.max(0, p.quantity + delta) } : p,
      ),
    );
  };

  // ---------------------------------------------------------------------------
  // Total calculation
  // ---------------------------------------------------------------------------
  const total = passes.reduce((sum, p) => sum + p.price * p.quantity, 0);

  // ---------------------------------------------------------------------------
  // Loading state
  // ---------------------------------------------------------------------------
  if (!bookingData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading booking information...</p>
      </div>
    );
  }

  return (
    <div className="flex">
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-5" style={{ color: "#2c1f0e" }}>
          Booking info
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-5 items-start">
          {/* Left Section */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            {BOOKING_FIELDS.map((field, i) => (
              <div
                key={field.key}
                className="flex items-center justify-between px-5 py-3.5"
                style={{
                  borderBottom:
                    i < BOOKING_FIELDS.length - 1
                      ? "1px solid #f0ebe0"
                      : "none",
                }}
              >
                <span className="text-sm" style={{ color: "#7a6a55" }}>
                  {field.label}
                </span>
                <span
                  className="text-sm font-medium"
                  style={{ color: "#2c1f0e" }}
                >
                  {bookingData[field.key]}
                </span>
              </div>
            ))}
          </div>

          {/* Price Section */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="px-5 pt-5 pb-3">
              <h3 className="font-bold text-base" style={{ color: "#2c1f0e" }}>
                Price
              </h3>
            </div>

            <div className="px-5 space-y-3 pb-4">
              {passes.map((pass) => (
                <div
                  key={pass.id}
                  className="flex items-center justify-between border-b pb-3"
                  style={{ borderColor: "#f0ebe0" }}
                >
                  <span className="text-sm" style={{ color: "#5c4a32" }}>
                    {pass.label}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(pass.id, -1)}
                      className="w-6 h-6 rounded-full flex items-center justify-center font-bold hover:bg-[#f0ebe0]"
                      style={{ color: "#8b6f47" }}
                    >
                      −
                    </button>

                    <span
                      className="w-4 text-center text-sm font-semibold"
                      style={{ color: "#2c1f0e" }}
                    >
                      {pass.quantity}
                    </span>

                    <button
                      onClick={() => updateQuantity(pass.id, 1)}
                      className="w-6 h-6 rounded-full flex items-center justify-center font-bold hover:bg-[#f0ebe0]"
                      style={{ color: "#8b6f47" }}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="px-5 pb-4">
              <div
                className="relative rounded-xl border"
                style={{ borderColor: "#c8b49a" }}
              >
                <label
                  className="absolute -top-2.5 left-3 text-xs px-1 bg-white"
                  style={{ color: "#8b6f47" }}
                >
                  Coupon
                </label>
                <input
                  type="text"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  placeholder="Apply here"
                  className="w-full px-3 py-3 text-sm rounded-xl focus:outline-none focus:ring-1 bg-transparent"
                  style={{ color: "#2c1f0e" }}
                />
              </div>
            </div>

            <div
              className="mx-5 mb-4 rounded-xl px-4 py-3 flex items-center justify-between"
              style={{ backgroundColor: "#f0e8d8" }}
            >
              <span className="text-sm font-bold" style={{ color: "#2c1f0e" }}>
                Total
              </span>
              <span className="text-sm font-bold" style={{ color: "#2c1f0e" }}>
                ${total.toLocaleString()}
              </span>
            </div>

            <div className="px-5 pb-5">
              <PaymentTypeModal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
