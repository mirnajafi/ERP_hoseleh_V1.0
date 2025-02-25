import { useState } from "react";
import { MenuItems } from "@/types/menu";
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Collapse, List } from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import Link from "next/link";
import Image from "next/image";

interface SidebarMenuProps {
  menuItems: MenuItems;
  pathname: string;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ menuItems, pathname }) => {
  const [openSubMenus, setOpenSubMenus] = useState<{ [key: string]: boolean }>({});

  const toggleSubMenu = (id: string) => {
    setOpenSubMenus((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      {menuItems.map((item) => (
        <div key={item.id}>
          {/* Main Menu Item */}
          <ListItem disablePadding>
            {item.path ? (
              <Link href={item.path} className="w-full">
                <ListItemButton selected={pathname === item.path}>
                  <ListItemIcon>
                    <Image src={item.icon} alt={item.title} width={24} height={24} />
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </Link>
            ) : (
              <ListItemButton onClick={() => toggleSubMenu(item.id)}>
                <ListItemIcon>
                  <Image src={item.icon} alt={item.title} width={24} height={24} />
                </ListItemIcon>
                <ListItemText primary={item.title} />
                {openSubMenus[item.id] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            )}
          </ListItem>

          {/* Submenu */}
          {item.subItems && (
            <Collapse in={openSubMenus[item.id]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {item.subItems.map((sub) => (
                  <ListItem key={sub.id} disablePadding>
                    <Link href={sub.path} className="w-full">
                      <ListItemButton selected={pathname === sub.path} sx={{ pl: 4 }}>
                        <ListItemText primary={sub.title} />
                      </ListItemButton>
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          )}
        </div>
      ))}
    </>
  );
};

export default SidebarMenu;