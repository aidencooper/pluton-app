import { DEFAULT_THEME, Theme } from "@/styles/themes";
import { create } from "zustand";

type ThemeStore = {
  theme: Theme;
  actions: {
    setTheme: (theme: Theme) => void;
  };
};

const useThemeStore = create<ThemeStore>((set) => ({
  theme: DEFAULT_THEME,
  actions: {
    setTheme: (theme) => set(() => ({ theme: theme })),
  },
}));

export const useTheme = () => useThemeStore((state) => state.theme);
export const useThemeActions = () => useThemeStore((state) => state.actions);
