import { MenuItems } from "@/types/menu";

export const menuItems: MenuItems = [
  {
    id: "home",
    title: "خانه",
    icon: "/icons/home.svg",
    path: "/",
    isActive:true,
  },
  {
    id: "register",
    title: "ثبت‌نام",
    icon: "/icons/task check.svg",
    path: "/Register",
    isActive:false,
  },
  {
    id: "classification",
    title: "کلاس‌بندی",
    icon: "/icons/board.svg",
    path: "/classification",
    isActive:false,
  },
  {
    id: "athletes",
    title: "ورزشکاران",
    icon: "/icons/Athletes.svg",
    subItems: [
      {
        id: "athletes-list",
        title: "زیرمنوی یک",
        path: "/athletes/list",
        isActive:false,
      },
      {
        id: "athletes-new",
        title: "زیرمنوی دو",
        path: "/athletes/new",
        isActive:false,
      },
      {
        id: "athletes-new",
        title: "زیرمنوی سه",
        path: "/athletes/new",
        isActive:false,
      }
    ]
  },
  {
    id: "nutrition",
    title: "واحد تغذیه",
    icon: "/icons/home.svg",
    path: "/nutrition",
    isActive:false,
  },
  {
    id: "mental-health",
    title: "مراجعین سلامت روان",
    icon: "/icons/home.svg",
    path: "/mental-health",
    isActive:false,
  },
  {
    id: "sport-protocols",
    title: "پروتکل‌های ورزشی",
    icon: "/icons/home.svg",
    path: "/sport-protocols",
    isActive:false,
  },
  {
    id: "sport-movements",
    title: "حرکات ورزشی",
    icon: "/icons/home.svg",
    path: "/sport-movements",
    isActive:false,
  },
  {
    id: "financial",
    title: "مالی",
    icon: "/icons/money bag-dollar.svg",
    path: "/financial",
    isActive:false,
  },
  {
    id: "statistics",
    title: "آمارها",
    icon: "/icons/chart-arrow-up.svg",
    path: "/statistics",
    isActive:false,
  },
  {
    id: "users",
    title: "تعریف کاربر",
    icon: "/icons/organization.svg",
    path: "/users",
    isActive:false,
  }
]; 