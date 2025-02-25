/* eslint-disable @next/next/no-img-element */

import UserSection from "./UserSection";
import MenuItem from "./MenuItem";
import { menuItems } from "@/data/menuItems";

export default function Sidebar() {
  return (
    <aside className="w-[17rem] bg-secondry-blue-900 fixed top-16 right-0 bottom-0">
      {/* Curved connector to main content */}
      <div className="absolute -left-[0.55rem] top-0 w-10 h-8">
        <div className="w-full h-full bg-dashboard-bg rounded-tr-[1.25rem]" />
      </div>
      <div className="absolute top-8 left-0 w-[1.92rem] h-full bg-dashboard-bg"></div>

      {/* Sidebar content */}
      <div className="h-full pt-8 pl-6">
        {/* User Profile Section */}
        <UserSection />

        {/* Menu Items */}
        <div className="mt-10 pr-1 space-y-1">
          {menuItems.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </aside>
  );
}
