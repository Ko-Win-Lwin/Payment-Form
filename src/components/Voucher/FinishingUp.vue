<template>
    <div class="relative py-3 lg:mt-10 lg:w-[500px] lg:pr-16" v-if="!userStore.$state.isFinished">
        <header class="px-2 mb-8 lg:mb-0">          
            <h1 class="text-2xl lg:text-3xl font-bold tracking-wide text-slate-600">Finishing Up</h1>
            <p class="text-slate-500 mt-2">Double-check everything looks OK before confirming.</p>
        </header>
        <div class="px-2 lg:mt-10 lg:px-0">
            <VoucherCard></VoucherCard>
        </div>
    </div>

    <div v-if="!userStore.$state.isFinished">
        <div v-if="responsiveStore.$state.isMobile">
          <div class="w-full fixed bottom-5 right-0 left-0">
            <div class="flex justify-between items-center">
                <BackBtn></BackBtn>
                <div class="mr-5">
                    <ConfirmBtn @click="confirm"></ConfirmBtn>
                </div>
            </div>
          </div>
        </div>

        <div v-else>
            <div class="absolute bottom-10 right-16 left-0">
                <div class="flex  justify-between items-center ">
                    <BackBtn></BackBtn>
                    <ConfirmBtn @click="confirm"></ConfirmBtn>
                </div>
            </div>
        </div>
    </div>

    <div v-else class="">
        <ThankYou></ThankYou>
    </div>
</template>

<script setup>
import VoucherCard from "../Voucher/VoucherCard.vue"
import { useUserStore } from "../../stores/user";
import { useResponsiveStore } from "../../stores/responsive";
import BackBtn from "../BackBtn.vue";
import ConfirmBtn from "../ConfirmBtn.vue";
import ThankYou from "./ThankYou.vue";
import { ref } from "vue";

const userStore = useUserStore()
const responsiveStore = useResponsiveStore()



const confirm = () => {
    userStore.$state.isFinished = true
    if(responsiveStore.$state.isMobile) {
        const blue_bg = window.document.querySelector("#blue_bg");
        blue_bg.style.height = '100vh'
    }
        

}

</script>