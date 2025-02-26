"use client";
import { Drawer, List, Divider, useMediaQuery } from "@mui/material";
import { FaChevronRight } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image"; 
import UserSection from "../layout/Sidebar/UserSection";
import { menuItems } from "@/data/menuItems";
import MenuItem from "@/data/MenuItem";

// Define background colors for each route
const bgColors: { [key: string]: string } = {
  "/": "#00194D", // Deep blue
  "/register": "#10B981", // Green
  "/classification": "#F97316", // Orange
  "/athletes": "#EF4444", // Red
  "default": "#FBBF24", // Yellow
};

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const router = useRouter();
  const bgColor = bgColors[pathname] || bgColors["default"];

  // Responsive Sidebar Width
  const isMediumScreen = useMediaQuery("(min-width: 768px)");
  const sidebarWidth = isMediumScreen ? "256px" : "75vw";

  // Handle menu item click
  const handleMenuItemClick = (path: string | undefined) => {
    if (path) {
      router.push(path); // Navigate to the selected path only if it's defined
    }
  };

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
            backgroundColor: `${bgColor} !important`,
            color: "#ffffff",
            transition: "width 0.3s ease-in-out",
            height: "calc(100vh - 4rem)",
            borderBottomLeftRadius: "20px",
            overflow: "visible", // Allow overflow for the curved connector
            boxShadow: "none",
            backgroundImage: "none !important",
            opacity: 1,
            position: "fixed", // Fixes the blending issue
            right: 0,
            top: "4rem",
          },
          "& .MuiDrawer-root": {
            backgroundColor: `${bgColor} !important`,
            backdropFilter: "none !important", 
          },
        }}
      >
        {/* Curved Connector */}
        <div className="absolute -left-[0.6rem] top-0 w-10 h-8">
          <div className="w-full h-full bg-dashboard-bg rounded-tr-[1.25rem]" />
        </div>
        <div className="absolute -left-[0.6rem] top-8 w-10 h-[calc(100vh-4rem)] bg-dashboard-bg"></div>

        {/* Sidebar Menu */}
        <List
          sx={{
            overflowY: "auto",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          <div className="h-full pt-8 pl-6">
            {/* User Profile Section */}
            <UserSection />

            {/* Menu Items */}
            <div className="mt-10 pr-1 space-y-1">
              {menuItems.map((item) => {
                const isActive = pathname === item.path;

                return (
                  <MenuItem
                    key={item.id}
                    item={item}
                    isActive={isActive}
                    onClick={() => handleMenuItemClick(item.path)} // Pass the click handler
                    bgColor={bgColor}
                  />
                );
              })}
            </div>
          </div>
        </List>

        <Divider />
      </Drawer>

      {/* Adjust Main Content Area When Sidebar Opens */}
      <style jsx global>{`
        main {
          margin-right: ${isOpen ? sidebarWidth : "0px"};
          transition: margin-right 0.3s ease-in-out;
        }
      `}</style>
    </>
  );
};

export default Sidebar;