import { create } from "zustand";

interface NavigationStore {
  title: string;
  handleTitle: (title: string) => void;
}

export const useNavigationStore = create<NavigationStore>((set) => ({
  // Initial value
  title: "Home > ",

  // Actions
  handleTitle: (title: string) => set({ title }),
}));
