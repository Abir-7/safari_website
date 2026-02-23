"use client";

import Image from "next/image";
import { useState } from "react";

export interface Animal {
  id: number;
  name: string;
  src: string;
  className: string;
}

interface ZooGalleryProps {
  animals: Animal[];
}

export default function ZooGallery({ animals }: ZooGalleryProps) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className=" rounded-2xl mx-auto">
      <div
        className="grid gap-2"
        style={{
          gridTemplateColumns: "1fr 1.2fr 1fr 1fr",
          gridTemplateRows: "240px 200px 220px 200px",
        }}
      >
        {animals.map((animal) => (
          <div
            key={animal.id}
            className={`relative overflow-hidden rounded-2xl cursor-pointer transition-transform duration-300 ${animal.className} ${
              hovered === animal.id ? "scale-[1.015]" : "scale-100"
            }`}
            onMouseEnter={() => setHovered(animal.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <Image
              src={animal.src}
              alt={animal.name}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />

            <div
              className={`absolute inset-x-0 bottom-0 bg-linear-to-t from-black/60 to-transparent px-3 py-2 transition-opacity duration-300 ${
                hovered === animal.id ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="text-white text-sm font-semibold">
                {animal.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
