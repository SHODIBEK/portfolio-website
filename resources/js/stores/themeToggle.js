import { defineStore } from "pinia";
import { useDark, useToggle } from "@vueuse/core";

export const useDarkStore = defineStore("ThemeToggler", {
  state: () => ({
    isDark: useDark() || auto,
  }),

  getters: {
    stateDark: (state) => state.isDark,
  },

  actions: {
    toggleDark() {
      useToggle(this.isDark);
      this.isDark = !this.isDark;
    },
  },
});
