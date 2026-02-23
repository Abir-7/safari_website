/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { getCurrentUser } from "@/action/session.actions";
import { RHFForm } from "@/components/custom/common/form/RHFForm";
import { RHFInput } from "@/components/custom/common/form/RHFInput";
import { Button } from "@/components/ui/button";
import { useLogin } from "@/hooks/react_query/use_auth.hook";

import { setAuth } from "@/lib/redux/features/authSlice/auth_slice";
import { useAppDispatch } from "@/lib/redux/hook";
import { LoginInput, LoginSchema } from "@/schema/login.schema";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import logo from "../../../assets/image/logo.png";
import Image from "next/image";
import login_image from "@/assets/image/auth/login.jpg";
import Link from "next/link";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const callback = searchParams.get("callback") || "/";
  const dispatch = useAppDispatch();
  const router = useRouter();
  const login = useLogin();

  const handleLogin = async (data: LoginInput) => {
    try {
      const res = await login.mutateAsync(data);
      if (res.success) {
        toast.success("Login Successful.");
        const auth = await getCurrentUser();
        if (auth) dispatch(setAuth(auth.user));
        router.push(callback);
      }
    } catch (err: any) {
      toast.error(err.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 p-4">
      {/* Left side */}
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

          {/* Title */}
          <h1 className="text-xl sm:text-2xl font-semibold text-center text-app-primary">
            Sign In
          </h1>

          <p className="text-center text-app-accent font-medium mb-6 text-sm sm:text-base">
            Please login to continue to your account.
          </p>

          {/* Form */}
          <RHFForm
            schema={LoginSchema}
            onSubmit={handleLogin}
            className="space-y-4"
            defaultValues={{
              email: "dev.abir.07@gmail.com",
              password: "123456",
            }}
          >
            <RHFInput
              className="bg-app-bg-color"
              name="email"
              label="Email"
              type="email"
              placeholder="Enter your email"
            />

            <div>
              <RHFInput
                className="bg-app-bg-color"
                name="password"
                label="Password"
                type="password"
                placeholder="Enter your password"
              />
              <div className="flex text-sm mt-1 items-center justify-end gap-2 text-app-accent font-medium ">
                <Link
                  href="/forgot-password"
                  className="text-app-primary hover:underline underline-offset-1"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
            <Button
              type="submit"
              className="w-full hover:bg-app-secondary bg-app-primary"
            >
              {login.isPending ? "Loading..." : "Login"}
            </Button>
          </RHFForm>

          <div className="flex items-center mt-4 justify-center gap-2 text-app-accent font-medium ">
            <p>Don&apos;t have an account? </p>
            <Link
              href="/signup"
              className="text-app-primary hover:underline underline-offset-1"
            >
              Signup here!
            </Link>
          </div>
        </div>
      </div>

      {/* Right side image */}
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
