"use server";

import PocketBase from "pocketbase";
import { CreateTaskType } from "@/utils/validations/create-task-validation";

export const createTask = async (data: CreateTaskType) => {
  const pb = new PocketBase(process.env.serverUrl);
  await pb.admins.authWithPassword(
    process.env.pocketBaseUsername as string,
    process.env.pocketBasePassword as string
  );
  await pb.collection("todo").create(data);
};
