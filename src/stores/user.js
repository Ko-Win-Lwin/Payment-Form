import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => ({
        isMonthly: true,
        isFinished: false,

        user: {}
    }),

    actions: {
        togglePlan() {
            return this.isMonthly = !this.isMonthly
        }
    }

})