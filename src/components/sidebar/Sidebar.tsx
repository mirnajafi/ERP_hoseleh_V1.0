"use client";
import { useEffect, useState } from "react";
import { Drawer, List, Divider } from "@mui/material";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { usePathname } from "next/navigation";
import UserSection from "../layout/Sidebar/UserSection";
import { menuItems } from "@/data/menuItems";

interface SidebarProps {
  bgColor: string; // Background color of the sidebar
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ bgColor, isOpen, onClose }) => {
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});
  const pathname = usePathname();
  const [sidebarWidth, setSidebarWidth] = useState(isOpen ? "256px" : "0px");

  useEffect(() => {
    setSidebarWidth(isOpen ? "256px" : "0px");
  }, [isOpen]);

  const toggleSubmenu = (id: string) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Determine text color based on background color
  const textColor = bgColor.includes("dark") ? "text-white" : "text-black";

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
            backgroundColor: bgColor, // Use the dynamic background color
            color: textColor,
            transition: "width 0.3s ease-in-out",
            marginTop: "4rem", // Push sidebar down below the header
            height: "calc(100vh - 4rem)", // Make sure it doesn't overlap the header
            borderTopLeftRadius: "20px", // Curved top-left edge
            borderBottomLeftRadius: "20px", // Curved bottom-left edge
            overflow: "hidden", // Hide scrollbar
          },
        }}
      >
        {/* Curved connector to main content */}
        <div className="absolute -left-[0.55rem] top-0 w-10 h-8">
          <div className="w-full h-full bg-dashboard-bg rounded-tr-[1.25rem]" />
        </div>
        <div className="absolute top-8 left-0 w-[1.92rem] h-full bg-dashboard-bg"></div>

        {/* Sidebar Menu */}
        <List
          sx={{
            overflowY: "auto", // Enable vertical scrolling
            scrollbarWidth: "none", // Hide scrollbar for Firefox
            "&::-webkit-scrollbar": {
              display: "none", // Hide scrollbar for Chrome, Safari, and Opera
            },
          }}
        >
          <div className="h-full pt-8 pl-6">
            {/* User Profile Section */}
            <UserSection />

            {/* Menu Items */}
            <div className="mt-10 pr-1 space-y-1">
              {menuItems.map((item) => (
                <div key={item.id} className="mb-3 relative">
                  {item.isActive && (
                    <>
                      {/* Left side curved connectors */}
                      <div className="absolute left-[7px] -top-[32px] w-10 h-8 bg-dashboard-bg">
                        <div className="w-full h-full" style={{ backgroundColor: bgColor }} />
                      </div>
                      <div className="absolute left-[7px] -bottom-[32px] w-10 h-8 bg-dashboard-bg">
                        <div className="w-full h-full" style={{ backgroundColor: bgColor }} />
                      </div>
                    </>
                  )}

                  <div
                    className={`flex items-center justify-between px-4 py-2 ${
                      item.isActive
                        ? "bg-dashboard-bg text-slate-700 rounded-r-2xl"
                        : "hover:bg-white/10 rounded-lg"
                    }`}
                    onClick={() => item.subItems && toggleSubmenu(item.id)}
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className={`w-6 h-6 ${
                          item.isActive ? 'brightness-0' : 'brightness-0 invert'
                        }`}
                        style={
                          item.isActive
                            ? {
                                filter:
                                  'invert(45%) sepia(99%) saturate(1234%) hue-rotate(346deg) brightness(98%) contrast(96%)',
                              }
                            : {}
                        }
                      />
                      <span className="text-sm">{item.title}</span>
                    </div>
                    {item.subItems && (
                      <span>
                        {openSubmenus[item.id] ? <FaChevronDown size={16} /> : <FaChevronRight size={16} />}
                      </span>
                    )}
                  </div>
                  {item.subItems && openSubmenus[item.id] && (
                    <div className="ml-8 mt-1">
                      {item.subItems.map((sub) => (
                        <div
                          key={sub.id}
                          className={`flex items-center gap-3 px-4 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 ${
                            pathname === sub.path ? "bg-white/10" : ""
                          }`}
                        >
                          <img src="/icons/radio_checked.svg" alt="subItemIcon" className="w-4 h-4" />
                          <span className="text-sm">{sub.title}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </List>

        <Divider />
      </Drawer>

      {/* Adjust Main Content Area When Sidebar Opens */}
      <style jsx global>{`
        main {
          margin-right: ${sidebarWidth};
          transition: margin-right 0.3s ease-in-out; /* Smooth transition */
        }
      `}</style>
    </>
  );
};

export default Sidebar;