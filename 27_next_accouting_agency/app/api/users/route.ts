import { authorization, deleteUsers } from "@/pocketbase/users";

export async function DELETE(request: Request) {
  const params = new URLSearchParams(request.url.split("?")[1]);
  const userId = params.get("userId");

  if (!userId) {
    return Response.json({ error: "userId query string required" });
  }

  const result = await authorization();
  if (!result.data?.isAdmin) {
    return Response.json({ error: "Forbidden access" });
  }

  await deleteUsers(userId);
  return Response.json({ message: "ok" });
}
