import {
  AppWindow,
  Contact,
  Home,
  MonitorCheck,
  PackageSearch,
  SquareActivity,
} from "lucide-react";

export const links = [
  {
    id: 1,
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    id: 2,
    label: "Services",
    href: "/services",
    icon: SquareActivity,
  },
  {
    id: 3,
    label: "Jobs",
    href: "/jobs",
    icon: AppWindow,
  },
  {
    id: 4,
    label: "What we do?",
    href: "/#hero2",
    icon: PackageSearch,
  },
  {
    id: 5,
    label: "Our Products",
    href: "/#products",
    icon: MonitorCheck,
  },
  {
    id: 6,
    label: "Contact Us",
    href: "/#contact",
    icon: Contact,
  },
  
];
