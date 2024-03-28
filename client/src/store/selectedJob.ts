import { create } from "zustand";

export const useSelectedJobStore = create<SelectedJobStore>((set) => ({
  selectedJob: null,
  setSelectedJob: (selectedJob) => set((state) => ({ selectedJob })),
}));
