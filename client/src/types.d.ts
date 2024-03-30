interface Software {
  _id: string;
  name: string;
  category: Category[];
  src: string;
  price: "free" | "paid";
}

type Category = "software" | "web" | "app" | "game";

interface User {
  _id: string;
  username: string;
  email: string;
  role: "admin" | "user";
  createdAt: Date;
  updatedAt: Date;
}

interface Job {
  _id: string;
  title: string;
  jobType: "internship" | "part-time" | "full-time";
  workMode: "remote" | "hybrid" | "on-site";
  description: string;
  createdAt: string;
  updatedAt: string;
}

interface UserStore {
  user: User | null;
  setUser: (user: User | null) => void;
}

interface TokenStore {
  token: string | null;
  setToken: (user: string | null) => void;
}

interface ModalStore {
  jobModalOpen: boolean;
  setJobModalOpen: (open: boolean) => void;

  userDeleteModalOpen: boolean;
  setUserDeleteModalOpen: (open: boolean) => void;
}

interface SelectedJobStore {
  selectedJob: Job | null;
  setSelectedJob: (selectedJob: Job) => void;
}
