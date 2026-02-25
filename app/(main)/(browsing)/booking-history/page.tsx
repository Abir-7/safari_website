"use client";

// BookingsComponent.tsx
// Next.js + Tailwind CSS + shadcn/ui
// Place in your components directory

import Image from "next/image";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { C_Card } from "@/components/custom/common/C_Card";

interface Booking {
  id: string;
  title: string;
  description: string;
  image: string;
  timeOfDay: string;
  seats: number;
}

const bookings: Booking[] = [
  {
    id: "1",
    title: "Nairobi National Park Game Drive",
    description:
      "It is a place that seeks to secure our environment. Our main work is to carry out environment conserving initiatives.",
    image: "https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=400", // Replace with actual image paths
    timeOfDay: "Afternoon",
    seats: 12,
  },
  {
    id: "2",
    title: "Nairobi National Park Game Drive",
    description:
      "It is a place that seeks to secure our environment. Our main work is to carry out environment conserving initiatives.",
    image: "https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=400",
    timeOfDay: "Afternoon",
    seats: 12,
  },
  {
    id: "3",
    title: "Nairobi National Park Game Drive",
    description:
      "It is a place that seeks to secure our environment. Our main work is to carry out environment conserving initiatives.",
    image: "https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=400",
    timeOfDay: "Afternoon",
    seats: 12,
  },
];

export default function BookingsSection() {
  const handleCancel = (id: string) => {
    console.log("Cancelling booking:", id);
    // Add your cancel logic here
  };

  return (
    <section className="">
      <h2 className="mb-6   text-2xl lg:text-3xl font-bold text-app-primary">
        Bookings History
      </h2>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {bookings.map((booking) => (
          <C_Card
            key={booking.id}
            title={booking.title}
            description={booking.description}
            image={booking.image}
            timeOfDay={booking.timeOfDay}
            seats={booking.seats}
            type="booking"
            onCancel={handleCancel}
            booking_id={booking.id}
          />
        ))}
      </div>
    </section>
  );
}
