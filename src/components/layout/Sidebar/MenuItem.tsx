// import Image from "next/image";
// import Link from "next/link";
// import { MenuItem as MenuItemType } from "@/types/menu";
// import SubMenu from "./SubMenu";

// interface MenuItemProps {
//   item: MenuItemType;
// }

// export default function MenuItem({ item }: MenuItemProps) {
//   const hasSubItems = item.subItems && item.subItems.length > 0;

//   return (
//     <div className="mb-3 relative">
//       {item.isActive && (
//         <>
//           {/* Left side curved connectors */}
//           <div className="absolute left-[7px] -top-[32px] w-10 h-8 bg-dashboard-bg">
//             <div className="w-full h-full bg-secondry-blue-900 rounded-bl-[1.4rem]" />
//           </div>
//           <div className="absolute left-[7px] -bottom-[32px] w-10 h-8 bg-dashboard-bg">
//             <div className="w-full h-full bg-secondry-blue-900 rounded-tl-[1.25rem]" />
//           </div>
//         </>
//       )}

//       {!hasSubItems ? (
//         <Link
//           href={item.path || "#"}
//           className={`flex items-center gap-3 px-4 mr-1 py-2 ${
//             item.isActive
//               ? "bg-dashboard-bg text-slate-700 rounded-r-2xl"
//               : " hover:bg-white/10 rounded-lg text-white"
//           }`}
//         >
//           <Image
//             src={item.icon}
//             alt={item.title}
//             width={24}
//             height={24}
//             className={item.isActive ? 'brightness-0' : 'brightness-0 invert'}
//             style={item.isActive ? { filter: 'invert(45%) sepia(99%) saturate(1234%) hue-rotate(346deg) brightness(98%) contrast(96%)' } : {}}
//           />
//           <span className="text-sm">{item.title}</span>
//         </Link>
//       ) : (
//         <div>
//           <div className="flex items-center gap-3 px-4 py-2 text-white">
//             <Image
//               src={item.icon}
//               alt={item.title}
//               width={24}
//               height={24}
//               className="brightness-0 invert"
//             />
//             <span className="text-sm">{item.title}</span>
//           </div>
//           {item.subItems && <SubMenu items={item.subItems} />}
//         </div>
//       )}
//     </div>
//   );
// }
