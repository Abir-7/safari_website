/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { RHFForm } from "@/components/custom/common/form/RHFForm";
import { RHFInput } from "@/components/custom/common/form/RHFInput";
import { RHFSelect } from "@/components/custom/common/form/RHFSelect";
import type { ZodType } from "zod";
import type { SubmitHandler } from "react-hook-form";
import Link from "next/link";

//  number_of_people: "",
//           number_of_chlids: "",
//           residents: "",
//           number_of_sits: "",

interface BookingFormProps<T extends Record<string, any>> {
  schema: ZodType<T>;
  onSubmit: SubmitHandler<T>;
  defaultValues?: Partial<T>;
}

export default function BookingForm<T extends Record<string, any>>({
  schema,
  onSubmit,
  defaultValues,
}: BookingFormProps<T>) {
  return (
    <div className="flex-1 w-full lg:w-auto rounded-2xl p-7 shadow-sm bg-app-bg-third">
      <h2 className="text-2xl font-bold mb-6 text-app-primary">
        Booking Information
      </h2>

      <RHFForm
        schema={schema}
        onSubmit={onSubmit as (data: T) => void}
        defaultValues={defaultValues}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <RHFInput name="name" label="Name" className="bg-app-bg-third" />
          <RHFInput name="email" label="Email" className="bg-app-bg-third" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <RHFInput name="phone" label="Phone" className="bg-app-bg-third" />
          <RHFInput
            name="country"
            label="Country"
            className="bg-app-bg-third"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <RHFInput
            type="number"
            name="number_of_people"
            label="Number of people:"
            className="bg-app-bg-third"
          />
        </div>
        <div className="grid grid-cols-1  gap-4 mb-4">
          <RHFInput
            type="number"
            name="number_of_chlids"
            label="Number of people:"
            className="bg-app-bg-third"
          />
        </div>

        <div className="mb-4">
          <RHFSelect
            className="bg-app-bg-third"
            name="residents"
            label="Residents"
            placeholder="Select package"
            options={[
              { label: "Resident(East Africa)", value: "resident" },
              { label: "Non Resident", value: "non_resident" },
            ]}
          />
        </div>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <RHFInput
            type="number"
            name="number_of_sits"
            label="Number of sits:"
            className="bg-app-bg-third"
          />
        </div>
        <Link href={`/packages/${2}/booking/preview`}>
          <button className="w-full bg-[#3d2510] hover:bg-app-primary-hover transition-colors text-app-bg-third font-bold text-base rounded-xl py-3.5 tracking-wide">
            Next
          </button>
        </Link>
      </RHFForm>
    </div>
  );
}
