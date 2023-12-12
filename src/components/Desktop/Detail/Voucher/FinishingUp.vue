<template>
    <div class="mt-10 w-[500px] pr-16 ">
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
                    <ChangeBtn></ChangeBtn>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import VoucherCard from "../Voucher/VoucherCard.vue"
import { useUserStore } from "../../../../stores/user";
import BackBtn from "../../../BackBtn.vue";
import ChangeBtn from "../../../ChangeBtn.vue";
const userStore = useUserStore()

</script>