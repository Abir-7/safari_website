/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface GameDriveCardProps {
  title: string;
  price?: number;
  description: string;
  image: any;
  type: "details" | "tickets";
}

export function C_Card({
  title,
  price,
  description,
  image,
  type,
}: GameDriveCardProps) {
  return (
    <Card className="overflow-hidden rounded-2xl  border-0  p-4 hover:shadow-xl transition-shadow duration-300">
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
          {type === "tickets" ? (
            <Link href="#">
              <h2 className="text-[20px] font-semibold text-gray-900 leading-snug">
                {title}
              </h2>
            </Link>
          ) : (
            <Link href={`/safaries/${title}`}>
              <h2 className="text-[20px] font-semibold text-gray-900 leading-snug">
                {title}
              </h2>
            </Link>
          )}

          {price !== undefined && (
            <span className="text-base font-semibold text-gray-900 whitespace-nowrap">
              ${price}
            </span>
          )}
        </div>

        <p className="mt-2 text-sm text-gray-500 leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
