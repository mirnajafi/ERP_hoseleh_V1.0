import Link from "next/link";
import Image from "next/image";
import { SubMenuItem } from "@/types/menu";

interface SubMenuProps {
  items: SubMenuItem[];
}

export default function SubMenu({ items }: SubMenuProps) {
  return (
    <div className="mr-4 mt-1 relative">
      {/* Vertical connecting line - positioned to align with icons */}
      {/* <div className="absolute left-[7px] h-full top-2 bottom-2 w-[1px] bg-white/10" /> */}

      {items.map((item, index) => (
        <div className="relative flex items-center gap-3 px-4" key={item.id}>
          <div className="relative">
            {index !== items.length - 1 && (
              <div
                className="absolute top-[13px] right-[5.5px] h-[177%] w-[2px] bg-white"
                style={{
                  opacity: 0.93 - index * 0.3, // Slightly reduced fade effect
                }}
              ></div>
            )}
            <Image
              src="/icons/radio_checked.svg"
              alt="subItemIcon"
              width={15}
              height={15}
              className="brightness-0 invert relative z-10"
              style={{
                opacity: 0.93 - index * 0.3, // Slightly reduced fade effect
              }}
            />
          </div>

          <Link
            href={item.path}
            // className="flex items-center gap-3 px-4 py-2 text-white/70 hover:bg-white/10 rounded-lg relative"
            className="flex items-center gap-3 pr-1 py-2 text-white hover:bg-white/10 rounded-lg w-full"
            style={{
              opacity: 0.93 - index * 0.3, // Slightly reduced fade effect
            }}
          >
            <span className="text-sm">{item.title}</span>
          </Link>
        </div>
      ))}
    </div>
  );
}
