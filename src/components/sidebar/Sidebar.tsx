"use client";
import { Drawer, List, Divider, useMediaQuery } from "@mui/material";
import { FaChevronRight } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Image from "next/image"; 
import UserSection from "../layout/Sidebar/UserSection";
import { menuItems } from "@/data/menuItems";

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
  const bgColor = bgColors[pathname] || bgColors["default"];

  // Responsive Sidebar Width
  const isMediumScreen = useMediaQuery("(min-width: 768px)");
  const sidebarWidth = isMediumScreen ? "256px" : "75vw";

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
            overflow: "hidden",
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
        {/* Fix: Curved Connector to Main Content */}
        <div className="absolute -left-[0.5rem] top-0 w-8 h-8">
          <div className="w-full h-full bg-dashboard-bg rounded-tr-[1.25rem]" />
        </div>
        <div className="absolute top-8 left-0 w-[1.5rem] h-full bg-dashboard-bg"></div>

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
                  <div key={item.id} className="mb-3 relative">
                    {isActive && (
                      <>
                        {/* Left Side Curved Connectors */}
                        <div className="absolute left-0 -top-[32px] w-8 h-8 bg-dashboard-bg">
                          <div className="w-full h-full rounded-bl-[1.25rem]" style={{ backgroundColor: bgColor }} />
                        </div>
                        <div className="absolute left-0 -bottom-[32px] w-8 h-8 bg-dashboard-bg">
                          <div className="w-full h-full rounded-tl-[1.25rem]" style={{ backgroundColor: bgColor }} />
                        </div>
                      </>
                    )}

                    <div
                      className={`flex items-center justify-between px-4 py-2 ${
                        isActive
                          ? "bg-dashboard-bg text-slate-700 rounded-r-2xl"
                          : "hover:bg-white/10 rounded-lg"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={24}
                          height={24}
                          className={isActive ? "brightness-0" : "brightness-0 invert"}
                          style={
                            isActive
                              ? {
                                  filter:
                                    "invert(45%) sepia(99%) saturate(1234%) hue-rotate(346deg) brightness(98%) contrast(96%)",
                                }
                              : {}
                          }
                        />
                        <span className="text-sm">{item.title}</span>
                      </div>
                      {item.subItems && (
                        <span>
                          <FaChevronRight size={16} />
                        </span>
                      )}
                    </div>
                    {item.subItems && (
                      <div className="ml-8 mt-1">
                        {item.subItems.map((sub) => {
                          const isSubActive = pathname === sub.path;
                          return (
                            <div
                              key={sub.id}
                              className={`flex items-center gap-3 px-4 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 ${
                                isSubActive ? "bg-white/10" : ""
                              }`}
                            >
                              <Image
                                src="/icons/radio_checked.svg"
                                alt="subItemIcon"
                                width={15}
                                height={15}
                              />
                              <span className="text-sm">{sub.title}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
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
