import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { classNames } from "@/utils/tools";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Accouting Agency",
  description: "Accouting Agency web application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classNames(inter.className, "bg-gray-50")}>
        {children}
      </body>
    </html>
  );
}
