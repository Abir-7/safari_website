"use client";
import PackageFilter from "@/components/custom/page/package/package_filter";
import Link from "next/link";
import { useState } from "react";

/* eslint-disable @next/next/no-img-element */
interface Package {
  id: number;
  title: string;
  description: string;
  price: number;
  time: string;
  availableSeats: number;
  image: string;
}

const packages: Package[] = [
  {
    id: 1,
    title: "Nairobi National Park Game Drive",
    description:
      "It is a place that seeks to secure our environment. Our main work is to carry out environment conserving initiatives. It is a place that seeks to secure our environment.",
    price: 50,
    time: "Afternoon",
    availableSeats: 12,
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=200&h=120&fit=crop",
  },
  {
    id: 2,
    title: "Nairobi National Park Game Drive",
    description:
      "It is a place that seeks to secure our environment. Our main work is to carry out environment conserving initiatives. It is a place that seeks to secure our environment.",
    price: 50,
    time: "Afternoon",
    availableSeats: 12,
    image:
      "https://images.unsplash.com/photo-1504173010664-32509107de5b?w=200&h=120&fit=crop",
  },
  {
    id: 3,
    title: "Nairobi National Park Game Drive",
    description:
      "It is a place that seeks to secure our environment. Our main work is to carry out environment conserving initiatives. It is a place that seeks to secure our environment.",
    price: 50,
    time: "Afternoon",
    availableSeats: 13,
    image:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=200&h=120&fit=crop",
  },
  {
    id: 4,
    title: "Nairobi National Park Game Drive",
    description:
      "It is a place that seeks to secure our environment. Our main work is to carry out environment conserving initiatives. It is a place that seeks to secure our environment.",
    price: 50,
    time: "Afternoon",
    availableSeats: 12,
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=200&h=120&fit=crop",
  },
  {
    id: 5,
    title: "Nairobi National Park Game Drive",
    description:
      "It is a place that seeks to secure our environment. Our main work is to carry out environment conserving initiatives. It is a place that seeks to secure our environment.",
    price: 50,
    time: "Afternoon",
    availableSeats: 12,
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=200&h=120&fit=crop",
  },
  {
    id: 6,
    title: "Nairobi National Park Game Drive",
    description:
      "It is a place that seeks to secure our environment. Our main work is to carry out environment conserving initiatives. It is a place that seeks to secure our environment.",
    price: 50,
    time: "Afternoon",
    availableSeats: 12,
    image:
      "https://images.unsplash.com/photo-1504173010664-32509107de5b?w=200&h=120&fit=crop",
  },
];

function PromoBanner() {
  return (
    <div className="flex gap-3 mb-5">
      {/* Coupon Banner */}
      <div className="flex-1 rounded-2xl bg-[#FFDAE1] md:px-8 md:py-8 px-5 py-4 flex items-center gap-4 relative overflow-hidden">
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-4xl opacity-80">
          🎁
        </div>
        <div>
          <p className="text-xs md:text-sm text-app-accent  font-medium mb-1">
            Use coupon to get exciting offers
          </p>
          <p className="text-lg font-bold text-blue-950 leading-tight">
            Up to 10% discount
          </p>
        </div>
      </div>

      {/* First Visit Banner */}
      <div className="flex-1 rounded-2xl bg-[#BADFFF] md:px-8 md:py-8 px-5 py-4 flex items-center gap-4 relative overflow-hidden">
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <div className="bg-red-500 text-white text-[10px] font-bold rounded-full w-14 h-14 flex flex-col items-center justify-center leading-tight text-center border-2 border-white shadow">
            <span>SPECIAL</span>
            <span>OFFER</span>
          </div>
        </div>
        <div>
          <p className="text-xs md:text-sm text-app-accent font-medium mb-1">
            Get exciting offer in your first visit
          </p>
          <p className="text-lg font-bold text-blue-950 leading-tight">
            Use Code: FIRST12GD1
          </p>
        </div>
      </div>
    </div>
  );
}

function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <div className="bg-app-bg-third rounded-2xl  p-4 flex gap-4 shadow-sm hover:shadow-md transition-shadow duration-200 border border-stone-100">
      <img
        src={pkg.image}
        alt={pkg.title}
        className="w-34 h-24 rounded-lg object-cover shrink-0"
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <Link href={`/packages/${pkg.id}`}>
            <h3 className="font-semibold text-stone-800 text-sm sm:text-lg leading-snug">
              {pkg.title}
            </h3>
          </Link>
          <span className="text-green-600 font-bold text-sm md:text-lg whitespace-nowrap">
            ${pkg.price}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-stone-400 mt-1 leading-relaxed line-clamp-2">
          {pkg.description}
        </p>
        <div className="flex sm:items-center sm:flex-row flex-col gap-1 mt-2">
          <span className="text-xs sm:text-sm text-stone-400">{pkg.time}</span>
          <span className="text-stone-300 text-xs sm:text-sm  hidden sm:block">
            •
          </span>
          <span className="text-xs text-stone-400 sm:text-sm">
            Available seats: {pkg.availableSeats}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Packages() {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const filterOptions = [
    { label: "All", value: "all" },
    { label: "Low to High", value: "low" },
    { label: "High to Low", value: "high" },
  ];
  return (
    <div className=" mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="xl:text-3xl md:text-2xl text-xl font-bold text-stone-800 mb-5">
          Packages
        </h1>
        <PackageFilter
          options={filterOptions}
          selectedValue={selectedFilter}
          onChange={setSelectedFilter}
          buttonText={selectedFilter || "Filter"}
        />
      </div>

      <PromoBanner />

      <div className="flex flex-col gap-3">
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </div>
  );
}
