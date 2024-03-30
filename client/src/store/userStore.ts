import { create } from "zustand";

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set((state) => ({ user })),
}));
