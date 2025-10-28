import { create } from "zustand";

export const useThemeStore = create((set) => ({
    theme: localStorage.getItem("theme") || "",

    setTheme: (colors) => {
        localStorage.setItem("theme", colors)
        set({ theme: colors })
    },
}));