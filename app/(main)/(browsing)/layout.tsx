import React from "react";
import sample_image from "@/assets/image/safaries/sample.jpg";
import Image from "next/image";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-48 md:h-60 lg:h-72 overflow-hidden">
        <Image
          src={sample_image}
          alt="Sample"
          fill
          priority
          className="object-cover"
        />

        {/* 🔥 Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #4C2A0000 0%, #371E0099 60%, #211200 100%)",
          }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 text-white max-w-5xl">
          <p className="text-sm uppercase tracking-widest opacity-80">
            Tracking
          </p>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold mt-2">
            Tracking Title
          </h1>

          <p className="mt-4 max-w-2xl text-sm md:text-base text-white/80">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            aspernatur beatae vero sint!
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-10 px-5 sm:p-0 sm:max-w-2xl md:max-w-2xl lg:max-w-3xl mx-auto xl:max-w-5xl 2xl:max-w-7xl">
        {children}
      </div>
    </div>
  );
};

export default layout;
