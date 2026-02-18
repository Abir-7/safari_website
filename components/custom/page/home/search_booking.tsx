"use client";

import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeftRight, Search } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// Shared button style
const buttonBaseStyle =
  "bg-transparent shadow-none border border-app-primary focus-visible:border-app-primary hover:bg-transparent focus-visible:ring-0 w-full h-15 text-left flex items-center gap-2";

export default function SearchBooking() {
  const [startDestination, setStartDestination] = useState<string>("");
  const [endDestination, setEndDestination] = useState<string>("");
  const [tripDate, setTripDate] = useState<Date | undefined>();
  const [people, setPeople] = useState<number | null>(null);
  const [tripType, setTripType] = useState<string>("option-one");
  return (
    <div className="px-5 py-8 bg-app-bg-third rounded-lg space-y-8">
      <div>
        <RadioSelect value={tripType} onChange={setTripType} />
      </div>
      <div className="flex gap-5 ">
        <div className="flex flex-wrap  gap-5 items-center w-full relative ">
          <div className="flex-1 min-w-[150px]">
            <SelectOption
              value={startDestination}
              onChange={setStartDestination}
              placeholder="Start"
            />
          </div>

          {/* Arrow Icon */}
          <div className=" absolute left-[23.8%] -translate-x-[23.8%]  flex-none w-10 h-10 bg-app-primary rounded-full text-white flex justify-center items-center">
            <ArrowLeftRight />
          </div>
          <div className="flex-1 min-w-[150px]">
            <SelectOption
              value={endDestination}
              onChange={setEndDestination}
              placeholder="End"
            />
          </div>

          {/* Date Picker */}
          <div className="flex-1 min-w-[180px]">
            <SelectDate value={tripDate} onChange={setTripDate} />
          </div>

          {/* People Selector */}
          <div className="flex-1 min-w-[150px]">
            <SelectPerson value={people} onChange={setPeople} />
          </div>

          {/* Search Button */}
        </div>

        <Button
          className="h-15 w-15 bg-app-bg-secondary text-white"
          variant="outline"
        >
          <Search />
        </Button>
      </div>
    </div>
  );
}

/* ----------------------- SELECT OPTION ----------------------- */
interface SelectOptionProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SelectOption = ({ value, onChange, placeholder }: SelectOptionProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className={buttonBaseStyle} variant="outline">
          {value ? (
            <>
              <div className="text-[18px]">{value.slice(0, 3)}</div>
              <Separator className="bg-app-primary" orientation="vertical" />
              <div className="flex flex-col text-[18px]">
                <span>{value}</span>
                <span className="text-xs text-app-accent-light">
                  One day trip
                </span>
              </div>
            </>
          ) : (
            placeholder || "Select Option"
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="bg-app-bg-color">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Choose</DropdownMenuLabel>
          {["Mymensingh", "Chittagong"].map((loc) => (
            <DropdownMenuItem key={loc} onClick={() => onChange(loc)}>
              {loc}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => onChange("Cox Bazar")}>
            Cox Bazar
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

/* ----------------------- SELECT DATE ----------------------- */
interface SelectDateProps {
  value: Date | undefined;
  onChange: (date: Date) => void;
}

const SelectDate = ({ value, onChange }: SelectDateProps) => {
  const shortDate = value ? format(value, "dd") : "";
  const monthName = value ? format(value, "MMMM") : "";
  const timeYear = value ? format(value, "hh:mm a, yyyy") : "";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className={buttonBaseStyle} variant="outline">
          {value ? (
            <>
              <div className="text-[18px]">{shortDate}</div>
              <Separator className="bg-app-primary" orientation="vertical" />
              <div className="flex flex-col text-[18px]">
                <span>{monthName}</span>
                <span className="text-xs text-app-accent-light">
                  {timeYear}
                </span>
              </div>
            </>
          ) : (
            "Select Date"
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="bg-app-bg-color p-2">
        <Calendar
          mode="single"
          selected={value}
          onSelect={onChange}
          className="w-full rounded-lg border-none shadow-none bg-app-bg-color"
          required
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

/* ----------------------- SELECT PERSON ----------------------- */
interface SelectPersonProps {
  value: number | null;
  onChange: (value: number) => void;
}

const SelectPerson = ({ value, onChange }: SelectPersonProps) => {
  const options = Array.from({ length: 7 }, (_, i) => i + 1);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className={buttonBaseStyle} variant="outline">
          {value ? (
            <>
              <div className="text-[18px]">{value}</div>
              <Separator className="bg-app-primary" orientation="vertical" />
              <div className="flex flex-col text-[18px]">
                <span>
                  {value} {value === 1 ? "Person" : "People"}
                </span>
                <span className="text-xs text-app-accent-light">Max 7</span>
              </div>
            </>
          ) : (
            "Select People"
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="bg-app-bg-color">
        <DropdownMenuLabel className="px-2 py-1 text-app-primary">
          Select Number of People
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {options.map((num) => (
            <DropdownMenuItem key={num} onClick={() => onChange(num)}>
              {num}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

interface RadioSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const RadioSelect = ({ value, onChange }: RadioSelectProps) => {
  return (
    <RadioGroup value={value} onValueChange={onChange} className="flex gap-4">
      <div
        className={`flex items-center gap-3 border p-3 rounded-lg cursor-pointer transition-all
          ${
            value === "option-one"
              ? "border-app-primary bg-app-primary text-white"
              : "border-app-accent-light text-app-accent-light"
          }`}
      >
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>

      <div
        className={`flex items-center gap-3 border p-3 rounded-lg cursor-pointer transition-all
          ${
            value === "option-two"
              ? "border-app-primary bg-app-primary text-white"
              : "border-app-accent-light text-app-accent-light"
          }`}
      >
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
    </RadioGroup>
  );
};
