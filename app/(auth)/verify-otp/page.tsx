/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { RHFForm } from "@/components/custom/form/RHFForm";
import { RHFInput } from "@/components/custom/form/RHFInput";
import { Button } from "@/components/ui/button";
import { useResetPassword } from "@/hooks/react_query/use_auth.hook";

import Image from "next/image";
import { toast } from "sonner";

import logo from "../../../assets/image/logo.png";
import login_image from "@/assets/image/auth/login.jpg";

import { useRouter } from "next/navigation";
import {
  ResetPassword,
  ResetPasswordSchema,
} from "@/schema/reset_password.schema";

export default function VerifyotpPage() {
  const resetPassword = useResetPassword();
  const router = useRouter();
  const handleSendOtp = async (data: ResetPassword) => {
    try {
      const res = await resetPassword.mutateAsync(data);
      console.log(res);
      if (res.success) {
        toast.success("Code verified.");
        router.push("/login");
      }
    } catch (err: any) {
      toast.success(err.message || "Verification failed");
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
            Reset password
          </h1>
          <p className="text-app-accent font-medium mb-6 text-center">
            Please enter your new password
          </p>

          <RHFForm
            schema={ResetPasswordSchema}
            onSubmit={handleSendOtp}
            defaultValues={{
              confirm_password: "",
              new_password: "",
            }}
            className="space-y-4"
          >
            <RHFInput
              name="new_password"
              label="New Password"
              type="password"
              placeholder="Enter your new password"
            />
            <RHFInput
              name="confirm_password"
              label="Confirm Password"
              type="password"
              placeholder="Enter your confirm password"
            />

            <Button
              type="submit"
              className="w-full hover:bg-app-secondary bg-app-primary"
            >
              {resetPassword.isPending ? "Loading..." : "Verify"}
            </Button>
          </RHFForm>
        </div>
      </div>
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
