// hooks/useAuth.ts
"use client";

import { useMutation } from "@tanstack/react-query";

import { SignupInput } from "@/schema/signup.schema";
import { LoginInput } from "@/schema/login.schema";
import {
  loginUser,
  resetPassword,
  sendOtp,
  signupUser,
} from "@/action/auth.actions";
import { SentOtpInput } from "@/schema/send_otp.schema";
import { ResetPassword } from "@/schema/reset_password.schema";

export function useSignup() {
  return useMutation({
    mutationFn: async (data: SignupInput) => signupUser(data),
  });
}

export function useLogin() {
  return useMutation({
    mutationFn: async (data: LoginInput) => await loginUser(data),
  });
}

export function useSendOtp() {
  return useMutation({
    mutationFn: async (data: SentOtpInput) => sendOtp(data),
  });
}

export function useResetPassword() {
  return useMutation({
    mutationFn: async (data: ResetPassword) => resetPassword(data),
  });
}
