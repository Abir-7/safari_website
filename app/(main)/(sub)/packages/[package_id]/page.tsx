"use client";

import SafariDetailsCard from "@/components/custom/page/package_details/details_card";

// ---------------------------------------------------------------------------
// Image data
// ---------------------------------------------------------------------------
export const SAFARI_IMAGES = {
  thumbnail1: {
    src: "https://images.unsplash.com/photo-1484406566174-9da000fda645?w=300&q=80",
    alt: "Two deer standing in the forest",
    width: 500,
    height: 500,
  },
  thumbnail2: {
    src: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?w=300&q=80",
    alt: "Brown bear looking at the camera",
    width: 500,
    height: 500,
  },
  hero: {
    src: "https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?w=600&q=80",
    alt: "Peacock displaying its feathers on a log",
    width: 600,
    height: 600,
  },
};

// ---------------------------------------------------------------------------
// Demo data
// ---------------------------------------------------------------------------
export const SAFARI_PASS_DATA = {
  title: "Safari Park Pass",
  highlights: [
    "It is a place that seeks to secure our environment. Our main work is to carry out environment conserving initiatives.",
    "It is a place that seeks to secure our environment. Our main work is to carry out environment conserving initiatives.",
  ],
  noBooking: false,
  noBookingDetails: [
    "It is a place that seeks to secure our environment. Our main work is to carry out environment conserving initiatives.",
    "It is a place that seeks to secure our environment. Our main work is to carry out environment conserving initiatives.",
  ],
  ticketPrice: 50,
  priceUnit: "per person",
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function SafariParkPass() {
  return (
    <>
      <SafariDetailsCard
        showBooking={true}
        {...SAFARI_PASS_DATA}
        images={SAFARI_IMAGES}
      />
    </>
  );
}
