export interface SubMenu {
  id: string;
  title: string;
  path: string;
  isActive: boolean;
}

export interface MenuItem {
  id: string;
  title: string;
  icon: string;
  path?: string;
  isActive: boolean;
  subItems?: SubMenu[];
}

export type MenuItems = MenuItem[];
