import { z } from "zod";

export const ResetPasswordSchema = z
  .object({
    new_password: z
      .string({ error: "New password is required" })
      .min(1, { error: "New password is required" })
      .min(6, { error: "Password must be at least 6 characters" }),

    confirm_password: z
      .string({ error: "Confirm password is required" })
      .min(1, { error: "Confirm password is required" })
      .min(6, { error: "Password must be at least 6 characters" }),
  })
  .refine((data) => data.new_password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

export type ResetPassword = z.infer<typeof ResetPasswordSchema>;
