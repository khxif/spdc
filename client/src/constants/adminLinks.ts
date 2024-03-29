import { BotMessageSquare, Users, Wrench } from "lucide-react";

export const adminLinks = [
  {
    id: 1,
    label: "Add Jobs",
    href: "/admin/add-jobs",
    icon: Wrench,
  },
  {
    id: 2,
    label: "Add Softwares",
    href: "/admin/add-softwares",
    icon: BotMessageSquare,
  },
  {
    id: 3,
    label: "Manage Users",
    href: "/admin/users",
    icon: Users,
  },
];
