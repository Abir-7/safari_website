"use client";

import Image from "next/image";
import { useState } from "react";

interface Animal {
  id: number;
  name: string;
  src: string;
  className: string;
}

const animals: Animal[] = [
  {
    id: 1,
    name: "Deer",
    src: "https://images.unsplash.com/photo-1484406566174-9da000fda645?w=400",
    className: "col-start-1 col-end-2 row-start-1 row-end-2",
  },
  {
    id: 2,
    name: "Peacock",
    src: "https://images.unsplash.com/photo-1606567595334-d39972c85dbe?w=500",
    className: "col-start-2 col-end-3 row-start-1 row-end-3",
  },
  {
    id: 3,
    name: "Tiger",
    src: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=600",
    className: "col-start-3 col-end-5 row-start-1 row-end-2",
  },
  {
    id: 4,
    name: "Bear",
    src: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?w=400",
    className: "col-start-1 col-end-2 row-start-2 row-end-3",
  },
  {
    id: 5,
    name: "Rabbit",
    src: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400",
    className: "col-start-3 col-end-4 row-start-2 row-end-3",
  },
  {
    id: 6,
    name: "Macaw",
    src: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400",
    className: "col-start-4 col-end-5 row-start-2 row-end-3",
  },
];

export default function ZooGallery() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="p-6 rounded-2xl mx-auto ">
      <h2 className="text-4xl font-bold text-app-primary mb-6">
        Our Upcoming Zoo Animals
      </h2>

      <div
        className="grid gap-2"
        style={{
          gridTemplateColumns: "1fr 1.2fr 1fr 1fr",
          gridTemplateRows: "240px 200px",
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
