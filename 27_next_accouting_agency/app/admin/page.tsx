import { getAllUsers } from "@/pocketbase/users";
import { UsersList } from "@/components/lists/users-list";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function AdminPanel() {
  let users: PocketbaseResponse<IUser>;
  try {
    users = await getAllUsers(1);
  } catch (error) {
    redirect("/login");
  }

  return (
    <main className="container mx-auto py-xl">
      <UsersList users={users?.items || []} />
    </main>
  );
}
