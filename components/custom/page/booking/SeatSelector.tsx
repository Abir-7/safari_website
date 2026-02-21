"use client";

import { Icon, Sofa } from "lucide-react"; // Sofa is still the normal component
import { steeringWheel } from "@lucide/lab"; // new lab icon
import { useState, useEffect } from "react";

type SeatStatus = "available" | "booked" | "selected";

export interface Seat {
  id: number;
  status: SeatStatus;
}

interface SeatSelectorProps {
  initialSeats: Seat[];
  layout: (number | null)[][];
  driverSeatId?: number; // driver seat
  onSelectionChange?: (selectedIds: number[]) => void;
}

interface LegendItemProps {
  color: string;
  label: string;
}

function LegendItem({ color, label }: LegendItemProps) {
  return (
    <div className="flex items-center gap-1">
      <Sofa color={color} size={20} />
      <span className="text-xs" style={{ color: "#5c4a32" }}>
        {label}
      </span>
    </div>
  );
}

export default function SeatSelector({
  initialSeats,
  layout,
  driverSeatId,
  onSelectionChange,
}: SeatSelectorProps) {
  const [seats, setSeats] = useState(initialSeats);

  useEffect(() => {
    const selectedIds = seats
      .filter((s) => s.status === "selected")
      .map((s) => s.id);
    onSelectionChange?.(selectedIds);
  }, [seats, onSelectionChange]);

  const handleSeatClick = (id: number) => {
    setSeats((prev) =>
      prev.map((s) => {
        if (s.id !== id || s.status === "booked") return s;
        return {
          ...s,
          status: s.status === "selected" ? "available" : "selected",
        };
      }),
    );
  };

  const getSeatColor = (status: SeatStatus) => {
    if (status === "booked") return "#c8b49a";
    if (status === "selected") return "#3d2510";
    return "#5c7a5c";
  };

  const availableCount = seats.filter((s) => s.status === "available").length;
  const selectedCount = seats.filter((s) => s.status === "selected").length;

  return (
    <div className="w-full lg:w-auto bg-white rounded-2xl p-4 shadow-sm shrink-0">
      <h3 className="font-bold text-base mb-3 text-[#2c1f0e]">Select Seat</h3>

      <div className="flex gap-3 mb-4 text-xs">
        <LegendItem color="#5c7a5c" label="Available" />
        <LegendItem color="#c8b49a" label="Booked" />
        <LegendItem color="#3d2510" label="Selected" />
        {driverSeatId && <LegendItem color="#5c7a5c" label="Driver" />}
      </div>

      <div className="rounded-xl p-3 bg-[#f0ebe0]">
        <p className="text-xs mb-3 text-[#7a6a55]">
          Available seats:{" "}
          <span className="font-semibold text-[#2c1f0e]">{availableCount}</span>
        </p>

        <div className="flex flex-col gap-2">
          {layout.map((row, ri) => (
            <div key={ri} className="flex gap-2 justify-center">
              {row.map((seatId, ci) => {
                if (seatId === null)
                  return <div key={ci} className="w-7 h-7" />;

                const seat = seats.find((s) => s.id === seatId);

                // Use Icon for driver seat
                const IconComponent =
                  seatId === driverSeatId
                    ? () => (
                        <Icon
                          iconNode={steeringWheel}
                          color={getSeatColor(seat?.status ?? "available")}
                          size={20}
                        />
                      )
                    : () => (
                        <Sofa
                          color={getSeatColor(seat?.status ?? "available")}
                          size={20}
                        />
                      );

                return (
                  <button
                    key={seatId}
                    onClick={() => handleSeatClick(seatId)}
                    disabled={seat?.status === "booked"}
                    className="transition-transform hover:scale-110"
                    title={`Seat ${seatId}${seatId === driverSeatId ? " (Driver)" : ""}`}
                  >
                    <IconComponent />
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {selectedCount > 0 && (
          <p className="text-xs mt-3 text-center text-[#3d2510]">
            {selectedCount} seat{selectedCount > 1 ? "s" : ""} selected
          </p>
        )}
      </div>
    </div>
  );
}
