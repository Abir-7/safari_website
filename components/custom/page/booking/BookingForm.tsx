/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { RHFForm } from "@/components/custom/form/RHFForm";
import { RHFInput } from "@/components/custom/form/RHFInput";
import { RHFSelect } from "@/components/custom/form/RHFSelect";
import type { ZodType } from "zod";
import type { SubmitHandler } from "react-hook-form";

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

        <div className="mb-4">
          <RHFSelect
            className="bg-app-bg-third"
            name="packageType"
            label="Package Type"
            placeholder="Select package"
            options={[
              { label: "Budget", value: "budget" },
              { label: "Premium", value: "premium" },
              { label: "VIP", value: "vip" },
            ]}
          />
        </div>

        <button
          className="w-full py-3.5 rounded-xl font-bold text-base tracking-wide transition-opacity hover:opacity-90 "
          style={{ backgroundColor: "#3d2510", color: "#f5f0e8" }}
        >
          Next
        </button>
      </RHFForm>
    </div>
  );
}
