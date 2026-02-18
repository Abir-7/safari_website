/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import example from "@/assets/image/home/about_2.jpg";

const demoThings = [
  {
    id: 1,
    title: "Nairobi National Park Game Drive",
    price: 50,
    description:
      "It is a place that seeks to secure our environment. Our main work is to carry out environment conserving initiatives.",
    image: example,
  },
  {
    id: 2,
    title: "Lake Safari Adventure",
    price: 70,
    description:
      "Experience breathtaking wildlife moments with our guided safari experience.",
    image: example,
  },
  {
    id: 3,
    title: "City Cultural Tour",
    price: 30,
    description:
      "Explore the cultural heart of the city with our expert local guides.",
    image: example,
  },
];

const ThingsToDo = () => {
  return (
    <div className="space-y-6">
      <h1 className="md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-app-primary">
        Things to do
      </h1>

      {/* Responsive Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {demoThings.map((item) => (
          <GameDriveCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ThingsToDo;

interface GameDriveCardProps {
  title: string;
  price: number;
  description: string;
  image: any;
}

function GameDriveCard({
  title,
  price,
  description,
  image,
}: GameDriveCardProps) {
  return (
    <Card className="overflow-hidden rounded-2xl shadow-lg border-0 bg-white p-4 hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative w-full h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Content */}
      <CardContent className="px-0 pt-4">
        <div className="flex items-start justify-between gap-2">
          <h2 className="text-[20px] font-semibold text-gray-900 leading-snug">
            {title}
          </h2>

          <span className="text-base font-semibold text-gray-900 whitespace-nowrap">
            ${price}
          </span>
        </div>

        <p className="mt-2 text-sm text-gray-500 leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
