import Link from "next/link";
import Image from "next/image";
import { MenuItem as MenuItemType } from "@/types/menu";

interface MenuItemProps {
  item: MenuItemType;
  isActive: boolean; // Active state
  onClick: () => void; // Click handler
  bgColor: string; // Background color
}

export default function MenuItem({ item, isActive, onClick, bgColor }: MenuItemProps) {
  const hasSubItems = item.subItems && item.subItems.length > 0;

  return (
    <div className="mb-3 relative">
      {isActive && (
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

      {!hasSubItems ? (
        <Link
          href={item.path || "#"}
          className={`flex items-center gap-3 px-4 mr-1 py-2 ${
            isActive
              ? "bg-dashboard-bg text-slate-700 rounded-r-2xl"
              : "hover:bg-white/10 rounded-lg text-white"
          }`}
          onClick={onClick} // Set this item as active on click
        >
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
        </Link>
      ) : (
        <div>
          <div
            className="flex items-center gap-3 px-4 py-2 text-white cursor-pointer"
            onClick={onClick} // Set this item as active on click
          >
            <Image
              src={item.icon}
              alt={item.title}
              width={24}
              height={24}
              className="brightness-0 invert"
            />
            <span className="text-sm">{item.title}</span>
          </div>
          {item.subItems && (
            <div className="ml-8 mt-1">
              {item.subItems.map((sub) => (
                <Link
                  key={sub.id}
                  href={sub.path}
                  className="flex items-center gap-3 px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                >
                  <Image src="/icons/radio_checked.svg" alt="subItemIcon" width={15} height={15} />
                  <span className="text-sm">{sub.title}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}