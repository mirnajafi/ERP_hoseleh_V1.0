import Image from "next/image";
import { MenuItem as MenuItemType } from "@/types/menu";
import { FaChevronRight } from "react-icons/fa";

interface MenuItemProps {
  item: MenuItemType;
  isActive: boolean; // Active state
  onClick: () => void; // Click handler
  bgColor: string; // Background color
}

export default function MenuItem({ item, isActive, onClick, bgColor }: MenuItemProps) {
  // const hasSubItems = item.subItems && item.subItems.length > 0;

  return (
    <div className="mb-3 relative">
      {isActive && (
                      <>
                        {/* Left Side Curved Connectors */}
                        <div className="absolute left-0 -top-[32px] w-8 h-8 bg-dashboard-bg ml-2" style={{    marginLeft: 0.4rem
}}>
                        <div style={{ width: '100%', height: '100%', borderRadius: '0 0 0 1.25rem', backgroundColor: bgColor }} />
                        </div>
                        <div className="absolute left-0 -bottom-[32px] w-8 h-8 bg-dashboard-bg ml-2">
                        <div style={{ width: '100%', height: '100%', borderRadius: '1.25rem 0 0 0', backgroundColor: bgColor }} />
                        </div>
                        {/* 
                        <div style={{ position: 'absolute', left: '0', marginLeft: '0.25rem', top: '-32px', width: '2rem', height: '2rem', backgroundColor: 'var(--dashboard-bg)' }}>
                         <div style={{ width: '100%', height: '100%', borderRadius: '0 0 0 1.25rem', backgroundColor: bgColor }} />
                         </div>
                         <div style={{ position: 'absolute', left: '0', marginLeft: '0.25rem', bottom: '-32px', width: '2rem', height: '2rem', backgroundColor: 'var(--dashboard-bg)' }}>
                         <div style={{ width: '100%', height: '100%', borderRadius: '1.25rem 0 0 0', backgroundColor: bgColor }} />
                        </div>

                        <div className="absolute left-0 -top-[32px] w-8 h-8 bg-dashboard-bg">
                          <div className="w-full h-full rounded-bl-[1.25rem]" style={{ backgroundColor: bgColor }} />
                        </div>
                        <div className="absolute left-0 -bottom-[32px] w-8 h-8 bg-dashboard-bg">
                          <div className="w-full h-full rounded-tl-[1.25rem]" style={{ backgroundColor: bgColor }} />
                        </div> */}
                      </>
                      
      )}

      {/* Main Menu Item */}
      <div
        className={`flex items-center justify-between px-4 py-2 ${
          isActive
            ? "bg-dashboard-bg text-slate-700 rounded-r-2xl"
            : "hover:bg-white/10 rounded-lg"
        }`}
        onClick={onClick} // Handle click for navigation
        style={{ cursor: "pointer" }} // Add pointer cursor
      >
        <div className="flex items-center gap-3">
          <Image
            src={item.icon}
            alt={item.title}
            width={24}
            height={24}
            className={isActive ? 'brightness-0' : 'brightness-0 invert'}
            style={
              isActive
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
            <FaChevronRight size={16} />
          </span>
        )}
      </div>

      {/* Submenu Items */}
      {item.subItems && (
        <div className="ml-8 mt-1">
          {item.subItems.map((sub) => (
            <div
              key={sub.id}
              className={`flex items-center gap-3 px-4 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200`}
              onClick={onClick} // Handle click for submenu navigation
              style={{ cursor: "pointer" }} // Add pointer cursor
            >
              <Image src="/icons/radio_checked.svg" alt="subItemIcon" width={15} height={15} />
              <span className="text-sm">{sub.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}