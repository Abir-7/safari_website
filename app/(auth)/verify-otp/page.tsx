/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import Image from "next/image";
import { useRef, useState } from "react";
import { toast } from "sonner";

import logo from "../../../assets/image/logo.png";
import login_image from "@/assets/image/auth/login.jpg";

import { useRouter } from "next/navigation";

export default function VerifyOtpPage() {
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]); // ✅ 4 digits
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const router = useRouter();

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;

    const updated = [...otp];
    updated[index] = value;
    setOtp(updated);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus(); // ✅ max index 3
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 4); // ✅ only 4 digits

    const updated = [...otp];

    pasted.split("").forEach((char, i) => {
      if (i < 4) updated[i] = char;
    });

    setOtp(updated);

    const nextEmpty = updated.findIndex((v) => !v);
    const focusIndex = nextEmpty === -1 ? 3 : nextEmpty;
    inputRefs.current[focusIndex]?.focus();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const code = otp.join("");

    if (code.length < 4) {
      toast.error("Please enter the full 4-digit code.");
      return;
    }

    try {
      console.log("OTP:", code);
      // verify api call here
      router.push("/reset-password");
    } catch (err: any) {
      toast.error(err.message || "Verification failed");
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 p-4">
      {/* Left: Form */}
      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-4">
            <Image
              className="w-[120px] sm:w-[140px] lg:w-[150px] h-auto"
              src={logo}
              width={150}
              height={60}
              alt="Logo"
              priority
            />
          </div>

          <h1 className="text-2xl font-semibold text-center mb-2 text-app-primary">
            Verify OTP
          </h1>
          <p className="text-app-accent font-medium mb-8 text-center">
            Enter the 4-digit code sent to your email
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-neutral-700 block text-center">
                One-Time Password
              </Label>

              <div className="flex justify-center gap-3">
                {otp.map((digit, index) => (
                  <Input
                    key={index}
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    className="w-14 h-14 text-center text-xl font-semibold bg-app-bg-color border-neutral-300 focus-visible:ring-app-primary rounded-xl"
                  />
                ))}
              </div>
            </div>

            <Button
              type="submit"
              className="w-full hover:bg-app-secondary bg-app-primary"
            >
              Verify
            </Button>
          </form>

          <p className="text-center text-sm text-neutral-500 mt-6">
            Didn&apos;t receive a code?{" "}
            <button
              type="button"
              className="text-app-primary font-medium hover:underline"
              onClick={() => toast.info("Resend code coming soon.")}
            >
              Resend
            </button>
          </p>
        </div>
      </div>

      {/* Right: Image */}
      <div className="relative hidden lg:block">
        <Image
          src={login_image}
          alt="Login Image"
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>
    </div>
  );
}
