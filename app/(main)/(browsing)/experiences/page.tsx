"use client";

import example from "@/assets/image/home/about_2.jpg";
import { C_Card } from "@/components/custom/common/C_Card";
import ZooGallery from "@/components/custom/page/experience/large_gallery";

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

interface Animal {
  id: number;
  name: string;
  src: string;
  className: string;
}

const animals: Animal[] = [
  // Row 1–2
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
  // Row 3–4
  {
    id: 7,
    name: "Elephant",
    src: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=600",
    className: "col-start-1 col-end-3 row-start-3 row-end-4",
  },
  {
    id: 8,
    name: "Flamingo",
    src: "https://images.unsplash.com/photo-1544892440-26f7e4c26e42?w=400",
    className: "col-start-3 col-end-4 row-start-3 row-end-5",
  },
  {
    id: 9,
    name: "Giraffe",
    src: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=400",
    className: "col-start-4 col-end-5 row-start-3 row-end-4",
  },
  {
    id: 10,
    name: "Zebra",
    src: "https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=400",
    className: "col-start-1 col-end-2 row-start-4 row-end-5",
  },
  {
    id: 11,
    name: "Lion",
    src: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=400",
    className: "col-start-2 col-end-3 row-start-4 row-end-5",
  },
  {
    id: 12,
    name: "Cheetah",
    src: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=400",
    className: "col-start-4 col-end-5 row-start-4 row-end-5",
  },
];

const Experience = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  return (
    <div className="space-y-6">
      <h1 className="md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-app-primary capitalize ">
        {type}
      </h1>

      {/* Responsive Grid */}
      {type === "activities" ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {demoThings.map((item) => (
            <C_Card key={item.id} {...item} type="experience" />
          ))}
        </div>
      ) : (
        <ZooGallery animals={animals}></ZooGallery>
      )}
    </div>
  );
};

export default Experience;
