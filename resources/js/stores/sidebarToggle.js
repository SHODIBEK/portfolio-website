import { defineStore } from "pinia";

export const useSidebarStore = defineStore("Sidebar", {
  state: () => ({
    sidebarOpen: false,
  }),

  getters: {
    stateSidebar: (state) => state.sidebarOpen,
  },

  actions: {
    sidebarToggle() {
      this.sidebarOpen = !this.sidebarOpen;
    },
  },
});
