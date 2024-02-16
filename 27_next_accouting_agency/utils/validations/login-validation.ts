import * as z from "zod";

export const loginFormSchema = z.object({
  username: z.string().min(1, { message: "Required" }),
  password: z.string().min(1, { message: "Required" }),
});

export type loginFormType = z.infer<typeof loginFormSchema>;
