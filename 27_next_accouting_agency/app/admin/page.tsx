import { getAllUsers } from "@/pocketbase/users";
import { UsersList } from "@/components/lists/users-list";

export const dynamic = "force-dynamic";

export default async function AdminPanel() {
  const users = await getAllUsers(1);

  return (
    <main className="container mx-auto py-xl">
      <UsersList users={users?.items || []} />
    </main>
  );
}
