<template>
    <div class="relative" v-if="!isFinished">
      <header class="px-2 mb-8">
          <h1 class="text-2xl font-bold tracking-wide text-slate-600">Finishing Up</h1>
          <p class="text-slate-500 mt-2">Double-check everything looks OK before confirming.</p>
      </header>

      <div class="px-2">
          <VoucherCard></VoucherCard>
      </div>

      <div class="flex justify-between items-center fixed bottom-5 left-0 right-0 w-full">
        <div class="flex justify-around items-center gap-20 w-full h-full">
            <BackBtn></BackBtn>
            <div class="">
                <ConfirmBtn @click="confirm"></ConfirmBtn>
            </div>
        </div>
      </div>
      
    </div>  

    <div v-else>
        <ThankYou></ThankYou>
    </div>
</template>

<script setup>
import { useUserStore } from "../../../../stores/user";
import VoucherCard from "./VoucherCard.vue";
import BackBtn from "../../../BackBtn.vue";
import ConfirmBtn from "../../../ConfirmBtn.vue";
import ThankYou from "./ThankYou.vue";
import { ref } from "vue";

const isFinished = ref(false)
const userStore = useUserStore()

const confirm = () => {
    isFinished.value = true
    const blue_bg = window.document.getElementById('blue_bg')
    blue_bg.style.height = '100vh'
}
</script>