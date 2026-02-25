"use client";

import BookingForm from "@/components/custom/page/booking/BookingForm";
import SeatSelector, {
  Seat,
} from "@/components/custom/page/booking/SeatSelector";
import { useState } from "react";
import z from "zod";

export const bookingSchema = z.object({
  name: z
    .string({ error: "Name is required" })
    .min(2, { message: "Name must be at least 2 characters" }),

  email: z
    .string({ error: "Email is required" })
    .email({ message: "Please enter a valid email address" }),

  phone: z
    .string({ error: "Phone number is required" })
    .min(10, { message: "Phone number must be at least 10 digits" }),

  country: z
    .string({ error: "Country is required" })
    .min(2, { message: "Country name must be at least 2 characters" }),

  number_of_people: z.string({ error: "Number of people is required" }),
  number_of_chlids: z.string({ error: "Number of chlids is required" }),
  residents: z.string({ error: "Residents is required" }),
  number_of_sits: z.string({ error: "Number of sits is required" }),
});

const INITIAL_SEATS: Seat[] = [
  { id: 1, status: "booked" },
  { id: 2, status: "booked" },
  { id: 3, status: "available" },
  { id: 4, status: "available" },
  { id: 5, status: "available" },
  { id: 6, status: "available" },
  { id: 7, status: "available" },
];

const SEAT_LAYOUT: (number | null)[][] = [
  [1, 0],
  [2, 3],
  [4, 5],
  [6, 7],
];

export default function BookingInformation() {
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const handleBookingSubmit = (data: z.infer<typeof bookingSchema>) => {
    const bookingPayload = {
      form: data,
      seats: selectedSeats,
    };

    if (typeof window !== "undefined") {
      localStorage.setItem("booking_data", JSON.stringify(bookingPayload));
    }

    console.log("Saved to localStorage:", bookingPayload);
  };

  return (
    <div className="w-full flex flex-col lg:flex-row gap-5 items-start">
      <BookingForm
        schema={bookingSchema}
        onSubmit={handleBookingSubmit}
        defaultValues={{
          name: "",
          email: "",
          phone: "",
          country: "",
          number_of_people: "",
          number_of_chlids: "",
          residents: "",
          number_of_sits: "",
        }}
      />
      <SeatSelector
        initialSeats={INITIAL_SEATS}
        layout={SEAT_LAYOUT}
        onSelectionChange={setSelectedSeats}
        driverSeatId={0}
      />
    </div>
  );
}
