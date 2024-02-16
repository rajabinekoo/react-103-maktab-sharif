import { GuardProvider } from "@/providers/guard-provider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin dashboard",
  description: "Accouting agency admin dashboard",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <GuardProvider roleMode="admin">{children}</GuardProvider>;
}
