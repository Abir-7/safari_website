/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

interface GameDriveCardProps {
  title: string;
  price?: number;
  description: string;
  image: any;
  type: "details" | "tickets" | "booking" | "experience";
  timeOfDay?: string;
  seats?: number;
  onCancel?: (id: string) => void;
  booking_id?: string;
}

export function C_Card({
  title,
  price,
  description,
  image,
  type,
  timeOfDay,
  seats,
  booking_id,
  onCancel,
}: GameDriveCardProps) {
  return (
    <Card className="overflow-hidden rounded-xl  border-0  p-4 hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative w-full h-56">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Content */}
      <CardContent className="px-0 ">
        <div className="flex items-start justify-between gap-2">
          {type === "details" ? (
            <Link href={`/safaries/${title}`}>
              <h2 className="text-[20px] font-semibold text-gray-900 leading-snug mb-2">
                {title}
              </h2>
            </Link>
          ) : (
            <h2 className="text-[20px] font-semibold text-gray-900 leading-snug mb-2">
              {title}
            </h2>
          )}

          {price !== undefined && (
            <span className="text-base font-semibold text-gray-900 whitespace-nowrap">
              ${price}
            </span>
          )}
        </div>

        <p className=" text-sm text-gray-500 leading-relaxed">{description}</p>
      </CardContent>
      {booking_id && type === "booking" && onCancel && (
        <>
          {/* Footer */}
          <CardFooter className="flex items-center justify-between m-0 p-0">
            <div className=" items-center gap-2  text-sm text-app-accent">
              <span>{timeOfDay}</span>
              <span className="mx-1">•</span>
              <span>Seats: {seats}</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              className=" bg-transparent hover:bg-none rounded-full border-app-secondary hover:border-app-primary text-app-secondary hover:text-app-primary"
              onClick={() => onCancel(booking_id)}
            >
              Cancel
            </Button>
          </CardFooter>
        </>
      )}
    </Card>
  );
}
