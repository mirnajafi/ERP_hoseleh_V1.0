"use client";
import { useEffect, useState } from "react";
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from "@mui/material";
import SidebarMenu from "./SidebarMenu";
import { menuItems } from "@/data/menuItems";
import { usePathname } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";

interface SidebarProps {
  bgColor?: string;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ bgColor = "bg-gray-900", isOpen, onClose }) => {
  const pathname = usePathname();
  const [sidebarWidth, setSidebarWidth] = useState(isOpen ? "256px" : "0px");

  useEffect(() => {
    setSidebarWidth(isOpen ? "256px" : "0px");
  }, [isOpen]);

  return (
    <>
      {/* Sidebar Drawer */}
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={onClose}
        variant="persistent"
        sx={{
          "& .MuiDrawer-paper": {
            width: sidebarWidth,
            backgroundColor: bgColor.includes("dark") ? "#1E1E1E" : "#ffffff",
            color: bgColor.includes("dark") ? "#ffffff" : "#000000",
            transition: "width 0.3s ease-in-out",
            marginTop: "4rem", // Push sidebar down below the header
            height: "calc(100vh - 4rem)", // Make sure it doesn't overlap the header
          },
        }}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Navigation</h2>
          <button onClick={onClose} className="text-gray-600">
            <FaChevronLeft size={20} />
          </button>
        </div>

        {/* Sidebar Menu */}
        <List>
          <SidebarMenu menuItems={menuItems} pathname={pathname} />
        </List>

        <Divider />
      </Drawer>

      {/* Adjust Main Content Area When Sidebar Opens */}
      <style jsx global>{`
        main {
          margin-right: ${sidebarWidth};
        }
      `}</style>
    </>
  );
};

export default Sidebar;
