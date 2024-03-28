import { create } from "zustand";

export const useModalStore = create<ModalStore>((set) => ({
  jobModalOpen: false,
  setJobModalOpen: (open) => set((state) => ({ jobModalOpen: open })),

  userDeleteModalOpen: false,
  setUserDeleteModalOpen: (open) => set((state) => ({ jobModalOpen: open })),
}));
