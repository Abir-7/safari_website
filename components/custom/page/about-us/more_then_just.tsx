"use client";

import Image from "next/image";
import Link from "next/link";

export default function MoreThanJustSafaris() {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      {/* ── Left: Text content ── */}
      <div className="flex flex-col gap-5">
        <h2
          className="text-3xl md:text-4xl font-bold leading-tight"
          style={{ color: "#2c1f0e" }}
        >
          More than Just Safaris
        </h2>

        <p className="text-sm leading-relaxed" style={{ color: "#5c4a32" }}>
          Gofan Safaris acts as your comprehensive Transport and Destination
          Management partner, taking care of all logistical and organizational
          needs for your East African journey. We specialize in crafting
          personalized safaris tailored to your specific interests, alongside
          providing seamless car hire and airport transfers across the region.
          Additionally, we offer reliable cargo and goods transportation
          services.
        </p>

        <p className="text-sm leading-relaxed" style={{ color: "#5c4a32" }}>
          We prioritize direct ground operations, meaning we manage your
          bookings and arrangements ourselves. This approach minimizes reliance
          on third parties, ensuring you receive the best possible rates and a
          smooth, uninterrupted travel experience from start to finish.
        </p>

        <div className="mt-2">
          <Link
            href="/packages"
            className="inline-block px-6 py-3 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#3d2510", color: "#f5f0e8" }}
          >
            Explore Packages
          </Link>
        </div>
      </div>

      {/* ── Right: Image ── */}
      <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80"
          alt="Safari jeep at sunset on the African savanna"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
