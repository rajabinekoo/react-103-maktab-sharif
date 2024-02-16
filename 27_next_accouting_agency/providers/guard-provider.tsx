import { authorization } from "@/pocketbase/users";
import { redirect } from "next/navigation";

export const GuardProvider: React.FC<
  IHasChild & { roleMode: "admin" | "user" }
> = async ({ children, roleMode }) => {
  const result = await authorization();

  if (!!result.error) {
    redirect("/login");
  }

  if (result.data?.isAdmin && roleMode === "user") {
    redirect("/login");
  }

  if (!result.data?.isAdmin && roleMode === "admin") {
    redirect("/login");
  }

  return <>{children}</>;
};
