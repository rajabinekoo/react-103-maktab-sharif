import * as z from "zod";

export const CreateTaskSchema = z.object({
  title: z.string().min(1, { message: "Required" }),
  description: z.string().min(1, { message: "Required" }),
  isCompleted: z.boolean(),
});

export type CreateTaskType = z.infer<typeof CreateTaskSchema>;
