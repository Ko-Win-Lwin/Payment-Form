<template>
    <div class="relative">
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
                <ChangeBtn></ChangeBtn>
            </div>
        </div>
      </div>
      
    </div>  
</template>

<script setup>
import { useUserStore } from "../../../../stores/user";
import VoucherCard from "./VoucherCard.vue";
import BackBtn from "../../../BackBtn.vue";
import ChangeBtn from "../../../ChangeBtn.vue";
const userStore = useUserStore()
</script>