export interface SubMenuItem {
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
  subItems?: SubMenuItem[];
}

export type MenuItems = MenuItem[];