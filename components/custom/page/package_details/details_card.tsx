"use client";

import Image from "next/image";
import Link from "next/link";

interface SafariImage {
  src: string;
  alt: string;
}

interface SafariDetailsCardProps {
  title: string;
  highlights: string[];
  noBooking: boolean;
  noBookingDetails: string[];
  ticketPrice: number;
  priceUnit: string;
  images: {
    hero: SafariImage;
    thumbnail1: SafariImage;
    thumbnail2: SafariImage;
  };
  showBooking: boolean;
}

const SafariDetailsCard = ({
  title,
  highlights,
  noBooking,
  noBookingDetails,
  ticketPrice,
  priceUnit,
  images,
  showBooking,
}: SafariDetailsCardProps) => {
  return (
    <div className="w-full">
      {/* Section heading */}
      <h2 className="text-2xl lg:text-3xl font-bold text-[#2c1f0e] mb-4 tracking-wide">
        Details
      </h2>

      <div className="rounded-2xl overflow-hidden flex flex-col md:flex-row gap-10">
        {/* Image Section */}
        <div className="md:w-[55%] ">
          <div className="aspect-square w-full grid grid-cols-2 grid-rows-2 gap-2">
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src={images.thumbnail1.src}
                alt={images.thumbnail1.alt}
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>

            <div className="relative rounded-xl overflow-hidden row-span-2">
              <Image
                src={images.hero.src}
                alt={images.hero.alt}
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>

            <div className="relative rounded-xl overflow-hidden">
              <Image
                src={images.thumbnail2.src}
                alt={images.thumbnail2.alt}
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="md:w-[45%]  flex flex-col justify-between">
          <div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2c1f0e] mb-3 leading-tight">
              {title}
            </h3>

            <ul className="space-y-2 mb-4">
              {highlights.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm md:text-base text-[#5c4a32]"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#8b6f47] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-xl font-bold text-[#2c1f0e] mb-3">
              {noBooking ? "Pre-booking required*" : "No pre-booking required*"}
            </p>

            <ul className="space-y-2 mb-6">
              {noBookingDetails.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm md:text-base text-app-primary"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-app-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {showBooking && (
            <div className="space-y-3">
              <div className="bg-[#f0e8d8] rounded-xl px-4 py-3 flex items-center justify-between">
                <span className="text-sm md:text-base font-semibold text-[#2c1f0e]">
                  Ticket price
                </span>
                <span className="text-sm md:text-base font-bold text-[#2c1f0e]">
                  ${ticketPrice}
                  <span className="font-normal text-[#8b6f47]">
                    {" "}
                    / {priceUnit}
                  </span>
                </span>
              </div>

              <Link href={`/packages/${2}/booking`}>
                <button className="w-full bg-[#3d2510] hover:bg-app-primary-hover transition-colors text-app-bg-third font-bold text-base rounded-xl py-3.5 tracking-wide">
                  Book Now
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SafariDetailsCard;
