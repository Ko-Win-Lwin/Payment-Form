import { defineStore } from "pinia";


export const useStepStore = defineStore("step" , {
    state: () => ({
        step: 1
    }),

    actions: {
        nextStep() {
            if (this.step == 4) {
                this.backStep()
                return
            }
            this.step++;
        },

        backStep() {
            if (this.step != 1 ) {
                this.step--;
            }
            
        }
    }
})