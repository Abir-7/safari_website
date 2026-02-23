"use client";

import { useFormContext, type FieldValues, type Path } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface SelectOption {
  label: string;
  value: string;
}

interface RHFSelectProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  placeholder?: string;
  options: SelectOption[];
  className?: string;
}

export function RHFSelect<T extends FieldValues>({
  name,
  label,
  placeholder,
  options,
  className,
}: RHFSelectProps<T>) {
  const { control } = useFormContext<T>();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="relative group">
          {label && (
            <FormLabel
              className={`${className} absolute -top-2  left-3  px-2 text-app-accent-light
              group-focus-within:text-app-primary transition-colors pointer-events-none z-10`}
            >
              {label}
            </FormLabel>
          )}

          <FormControl>
            <Select
              value={field.value}
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              <SelectTrigger
                className="p-5 w-full  border-2 border-app-accent-light 
                focus:border-app-primary
                focus:ring-0
                text-app-primary "
              >
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>

              <SelectContent className="bg-app-bg-color  ">
                {options.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    className="data-highlighted:bg-app-bg-third"
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
