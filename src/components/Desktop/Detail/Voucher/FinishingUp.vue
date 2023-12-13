<template>
    <div class="mt-10 w-[500px] pr-16" v-if="!isFinished">
        <header>          
            <h1 class="text-3xl font-bold tracking-wide text-slate-700">Finishing Up</h1>
            <p class="text-slate-500 mt-2">Double-check everything looks OK before confirming.</p>
        </header>
        <div class="mt-10">
            <VoucherCard></VoucherCard>
        </div>

        <div class="absolute bottom-10">
            <div class="flex gap-56 justify-around items-center ">
                <BackBtn></BackBtn>
                <div class=''>
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
import { useUserStore } from "../../../../stores/user";
import BackBtn from "../../../BackBtn.vue";
import ConfirmBtn from "../../../ConfirmBtn.vue";
import ThankYou from "./ThankYou.vue";
import { ref } from "vue";
const userStore = useUserStore()

const isFinished = ref(false)

const confirm = () => {
    isFinished.value = true
   
}

</script>