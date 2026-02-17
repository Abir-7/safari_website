import { z } from "zod";

export const SendOtpSchema = z.object({
  email: z.email("Invalid email"),
});

export type SentOtpInput = z.infer<typeof SendOtpSchema>;
