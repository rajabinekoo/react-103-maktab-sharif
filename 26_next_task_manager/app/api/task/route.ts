import PocketBase from "pocketbase";
import { CreateTaskType } from "@/utils/validations/create-task-validation";

export async function POST(request: Request) {
  const data: CreateTaskType = await request.json();
  if (!data) throw new Error("Invalid body");

  const pb = new PocketBase(process.env.serverUrl);
  await pb.admins.authWithPassword(
    process.env.pocketBaseUsername as string,
    process.env.pocketBasePassword as string
  );
  const record = await pb.collection("todo").create(data);
  return Response.json(record);
}

export async function GET() {
  const pb = new PocketBase(process.env.serverUrl);
  await pb.admins.authWithPassword(
    process.env.pocketBaseUsername as string,
    process.env.pocketBasePassword as string
  );
  const records = await pb.collection("todo").getFullList({
    sort: "-created",
  });
  return Response.json(records);
}
