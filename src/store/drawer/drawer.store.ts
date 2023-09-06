import { create } from "zustand";

interface DrawerStore {
  anchorElNav: HTMLElement | null;
  handleAnchorElNav: (anchorElNav: HTMLElement | null) => void;
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseNavMenu: () => void;
}

export const useDrawerStore = create<DrawerStore>((set) => ({
  // Initial value
  anchorElNav: null,

  // Actions
  handleAnchorElNav: (anchorElNav) => {
    set({ anchorElNav });
  },
  handleOpenNavMenu: (event) => {
    set({ anchorElNav: event.currentTarget });
  },
  handleCloseNavMenu: () => {
    set({ anchorElNav: null });
  },
}));
