import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useUserStore = create<UserStore, [["zustand/persist", UserStore]]>(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set((state) => ({ user })),
    }),
    {
      name: "user",
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
    }
  )
);
