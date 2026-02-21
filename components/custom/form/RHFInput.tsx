"use client";

import { useFormContext, type FieldValues, type Path } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface TextFieldProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  placeholder?: string;
  type?: "text" | "email" | "password";
  className?: string;
}

export function RHFInput<T extends FieldValues>({
  name,
  label,
  placeholder,
  type = "text",
  className,
}: TextFieldProps<T>) {
  const { control } = useFormContext<T>();
  const [showPassword, setShowPassword] = useState(false);

  // Determine input type dynamically for password toggle
  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="relative group">
          {label && (
            <FormLabel
              className={`${className} absolute -top-2 left-3  px-2 text-app-accent-light 
              group-focus-within:text-app-primary transition-colors pointer-events-none z-10 `}
            >
              {label}
            </FormLabel>
          )}
          <FormControl>
            <div className="relative">
              <Input
                {...field}
                placeholder={placeholder}
                type={inputType}
                className="p-5 border-2 border-app-accent-light focus-visible:border-app-primary placeholder:text-app-accent-light focus:placeholder:text-app-primary transition-colors 
                focus-within:text-app-primary
                focus-visible:ring-0
                text-app-primary
                "
              />
              {type === "password" && (
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-app-accent-light  hover:text-app-primary   group-focus-within:text-app-primary"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
