import { GuardProvider } from "@/providers/guard-provider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User dashboard",
  description: "Accouting agency user dashboard",
};

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <GuardProvider roleMode="user">{children}</GuardProvider>;
}
