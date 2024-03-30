import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useTokenStore = create<TokenStore, [["zustand/persist", TokenStore]]>(
  persist(
    (set) => ({
      token: null,
      setToken: (token) => set((state) => ({ token })),
    }),
    {
      name: "token",
      storage: createJSONStorage(() => localStorage),
      skipHydration: true
    }
  )
);
