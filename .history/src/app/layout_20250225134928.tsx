/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar/Sidebar";
import "./globals.css";


export const metadata: Metadata = {
  title: "دکتر حوصله",
  description: "بنیاد سلامت دکتر حوصله",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-dashboard-bg min-h-screen">
        <Header />

        <Sidebar />
        <

        <main className="mr-64 mt-16 p-6">{children}</main>
      </body>
    </html>
  );
}
