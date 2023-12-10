import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => ({
        isMonthly: true,

        user: {
            // plan: [
            //     { isMonthly : true }
            // ]
        }
    }),

    actions: {
        togglePlan() {
            return this.isMonthly = !this.isMonthly
        }
    }

})