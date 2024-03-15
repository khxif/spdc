import {
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
    label: "What we do?",
    href: "/about",
    icon: PackageSearch,
  },
  {
    id: 4,
    label: "Our Products",
    href: "/products",
    icon: MonitorCheck,
  },
  {
    id: 5,
    label: "Contact Us",
    href: "/contact",
    icon: Contact,
  },
];
