import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => ({
        isMonthly: true,

        user: {}
    }),

    actions: {
        togglePlan() {
            return this.isMonthly = !this.isMonthly
        }
    }

})