import * as z from "zod";

export const registrationFormSchema = z
  .object({
    username: z
      .string()
      .min(5, "Should be more then 5 character")
      .trim()
      .toLowerCase(),
    email: z
      .string()
      .regex(
        /^(([A-Za-z])([A-Za-z]|\+|\.)*)@hogwarts(\.eu)?\.com$/i,
        "Invalid email"
      ),
    password: z.string(),
    // .regex(/[a-z]+/, "Lowercase alphabet required")
    // .regex(/[A-Z]+/, "Uppercase alphabet required")
    // .regex(/\d+/, "Digits required")
    // .regex(/[@$!%*?&]+/, "Special character required (@$!%*?&)"),
    // .regex(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    //   "Invalid password"
    // ),
    repeatPassword: z.string().min(1, "* Required").trim(),
  })
  .refine((data) => data.password === data.repeatPassword, {
    path: ["repeatPassword"],
    message: "Should be equals with password",
  })
  .superRefine((val, ctx) => {
    let errorMessage = "";
    const lowercaseRegExp = /[a-z]+/;
    const uppercaseRegExp = /[A-Z]+/;
    const digitsRegExp = /[0-9]+/;
    const specialCharacterRegExp = /[@$!%*?&]+/;

    if (!lowercaseRegExp.test(val.password)) {
      errorMessage += `Lowercase alphabet required. `;
    }

    if (!uppercaseRegExp.test(val.password)) {
      errorMessage += `Uppercase alphabet required. `;
    }

    if (!digitsRegExp.test(val.password)) {
      errorMessage += `Digits required. `;
    }

    if (!specialCharacterRegExp.test(val.password)) {
      errorMessage += `Special characters required (@$!%*?&). `;
    }

    if (val.password?.trim?.()?.length < 8) {
      errorMessage += "At least 8 characters.";
    }

    if (errorMessage.length !== 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: errorMessage,
        path: ["password"],
      });
    }
  });

export type RegistrationForm = z.infer<typeof registrationFormSchema>;
