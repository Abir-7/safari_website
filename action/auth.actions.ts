// app/actions/authActions.ts
"use server";

import { LoginInput } from "@/schema/login.schema";
import { SignupInput } from "@/schema/signup.schema";
import { createSession } from "./session.actions";
import { SentOtpInput } from "@/schema/send_otp.schema";
import { ResetPassword } from "@/schema/reset_password.schema";

function generateToken(email: string) {
  return btoa(`${email}-fake-jwt`); // base64 just for demo
}

//signup
export async function signupUser(data: SignupInput) {
  await new Promise((res) => setTimeout(res, 1000));
  return { success: true, message: "Signup successful!", data };
}

//login
export async function loginUser(data: LoginInput) {
  await new Promise((res) => setTimeout(res, 1000));
  const token = generateToken(data.email);
  await createSession(token);
  return {
    success: true,
    message: "Login successful!",
    user: { email: data.email },
  };
}

export async function sendOtp(data: SentOtpInput) {
  await new Promise((res) => setTimeout(res, 1000));
  return { success: true, message: "Code sent to your email", data };
}

export async function resetPassword(data: ResetPassword) {
  await new Promise((res) => setTimeout(res, 1000));
  return { success: true, message: "Password reset successfully", data };
}
