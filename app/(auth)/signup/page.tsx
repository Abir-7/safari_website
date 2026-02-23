/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { RHFForm } from "@/components/custom/common/form/RHFForm";
import { RHFInput } from "@/components/custom/common/form/RHFInput";
import { Button } from "@/components/ui/button";
import { useSignup } from "@/hooks/react_query/use_auth.hook";

import { SignupSchema, SignupInput } from "@/schema/signup.schema";
import Image from "next/image";
import { toast } from "sonner";

import logo from "../../../assets/image/logo.png";
import login_image from "@/assets/image/auth/login.jpg";
import Link from "next/link";
export default function SignupPage() {
  const signup = useSignup();

  const handleSignup = async (data: SignupInput) => {
    try {
      const res = await signup.mutateAsync(data);
      if (res.success) {
        toast.success("Signup Successfull.");
      }
    } catch (err: any) {
      toast.success(err.message || "Signup failed");
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
          <h1 className="text-2xl font-semibold text-center mb-6 text-app-primary">
            Sign Up
          </h1>

          <RHFForm
            schema={SignupSchema}
            onSubmit={handleSignup}
            defaultValues={{
              name: "",
              email: "",
              password: "",
              confirm_password: "",
            }}
            className="space-y-4"
          >
            <RHFInput
              className="bg-app-bg-color"
              name="name"
              label="Full Name"
              placeholder="Enter your name"
            />

            <RHFInput
              className="bg-app-bg-color"
              name="email"
              label="Email"
              type="email"
              placeholder="Enter your email"
            />

            <RHFInput
              className="bg-app-bg-color"
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
            />

            <RHFInput
              className="bg-app-bg-color"
              name="confirm_password"
              label="Confirm Password"
              type="password"
              placeholder="Confirm your password"
            />

            <Button
              type="submit"
              className="w-full hover:bg-app-secondary bg-app-primary"
            >
              {signup.isPending ? "Loading..." : "Sign Up"}
            </Button>
          </RHFForm>
          <div className="flex items-center mt-4 justify-center gap-2 text-app-accent font-medium ">
            <p>Already have an account? </p>
            <Link
              href="/login"
              className="text-app-primary hover:underline underline-offset-1"
            >
              Login here!
            </Link>
          </div>
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
