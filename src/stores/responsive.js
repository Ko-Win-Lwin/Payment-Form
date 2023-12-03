import { defineStore } from "pinia";

export const useResponsiveStore = defineStore('responsive', {
    state: () => ({
        isMobile: window.innerWidth <= 375,
    }),

    actions: {
        updateResponsiveState() {
            return this.isMobile = window.innerWidth <= 375;
        }
    }
})