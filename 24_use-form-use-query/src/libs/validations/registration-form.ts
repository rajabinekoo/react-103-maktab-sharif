import * as z from "zod";

export const registrationFormSchema = z
  .object({
    username: z
      .string()
      .min(5, "Should be more then 5 character")
      .trim()
      .toLowerCase(),
    password: z.string().min(1, "* Required").trim(),
    repeatPassword: z.string().min(1, "* Required").trim(),
  })
  .refine((data) => data.password === data.repeatPassword, {
    path: ["repeatPassword"],
    message: "Should be equals with password",
  });

export type RegistrationForm = z.infer<typeof registrationFormSchema>;
