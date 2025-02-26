/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar/Sidebar";
import "@/app/globals.css"; // بررسی کن مسیر درست باشه

export const metadata: Metadata = {
  title: "دکتر حوصله",
  description: "بنیاد سلامت دکتر حوصله",
};

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-dashboard-bg min-h-screen">
        <Header />
        <div className="flex">
          <Sidebar />
          <main className="flex-grow p-6 mr-64 mt-16">{children}</main>
        </div>
      </body>
    </html>
  );
}
