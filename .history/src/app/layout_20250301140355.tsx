/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import "@/app/globals.css";


export const metadata: Metadata = {
  title: "دکتر حوصله",
  description: "بنیاد سلامت دکتر حوصله",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-dashboard-bg min-h-screen">
        {/* Header includes SidebarToggle, so no need to add Sidebar separately */}
        <Header />
        {/* Main Content Area */}
        <main className="transition-all duration-300 mt-16 p-6">
          {children}
        </main>

      </body>
    </html>
  );
}
