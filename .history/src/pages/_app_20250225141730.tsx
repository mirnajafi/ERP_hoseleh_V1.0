import type { AppProps } from "next/app";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar/Sidebar";
import "global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-dashboard-bg min-h-screen">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-grow p-6 mr-64 mt-16">
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  );
}
