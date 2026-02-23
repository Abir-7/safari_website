/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { RHFForm } from "@/components/custom/common/form/RHFForm";
import { RHFInput } from "@/components/custom/common/form/RHFInput";
import { Button } from "@/components/ui/button";
import { useSendOtp } from "@/hooks/react_query/use_auth.hook";

import Image from "next/image";
import { toast } from "sonner";

import logo from "../../../assets/image/logo.png";
import forgot_image from "@/assets/image/auth/forgot.jpg";
import { SendOtpSchema, SentOtpInput } from "@/schema/send_otp.schema";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
  const sendOtp = useSendOtp();
  const router = useRouter();
  const handleSendOtp = async (data: SentOtpInput) => {
    try {
      const res = await sendOtp.mutateAsync(data);
      console.log(res);
      if (res.success) {
        toast.success("Code sent to your email.");
        router.push("/verify-otp");
      }
    } catch (err: any) {
      toast.success(err.message || "Sending email failed");
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 p-4">
      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
        <div className="w-full max-w-md">
          {/* Logo */}
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
            Forgot password
          </h1>
          <p className="text-app-accent font-medium mb-6 text-center">
            Please enter your email to reset your password
          </p>

          <RHFForm
            schema={SendOtpSchema}
            onSubmit={handleSendOtp}
            defaultValues={{
              email: "",
            }}
            className="space-y-4"
          >
            <RHFInput
              className="bg-app-bg-color"
              name="email"
              label="Email"
              type="email"
              placeholder="Enter your email"
            />

            <Button
              type="submit"
              className="w-full hover:bg-app-secondary bg-app-primary"
            >
              {sendOtp.isPending ? "Loading..." : "Continue"}
            </Button>
          </RHFForm>
        </div>
      </div>
      <div className="relative hidden lg:block">
        <Image
          src={forgot_image}
          alt="Login Image"
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>
    </div>
  );
}
