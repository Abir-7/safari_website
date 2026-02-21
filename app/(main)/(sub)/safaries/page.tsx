"use client";

import example from "@/assets/image/home/about_2.jpg";
import { C_Card } from "@/components/custom/common/C_Card";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const demoThings = [
  {
    id: 1,
    title: "Nairobi National Park Game Drive",

    description:
      "It is a place that seeks to secure our environment. Our main work is to carry out environment conserving initiatives.",
    image: example,
  },
  {
    id: 2,
    title: "Lake Safari Adventure",

    description:
      "Experience breathtaking wildlife moments with our guided safari experience.",
    image: example,
  },
  {
    id: 3,
    title: "City Cultural Tour",

    description:
      "Explore the cultural heart of the city with our expert local guides.",
    image: example,
  },
  {
    id: 4,
    title: "City Cultural Tour",

    description:
      "Explore the cultural heart of the city with our expert local guides.",
    image: example,
  },
];

const Safaries = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  return (
    <div className="space-y-6">
      <h1 className="md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-app-primary">
        {type}
      </h1>

      {/* Responsive Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {demoThings.map((item) => (
          <C_Card key={item.id} {...item} type="details" />
        ))}
      </div>
    </div>
  );
};

export default Safaries;
