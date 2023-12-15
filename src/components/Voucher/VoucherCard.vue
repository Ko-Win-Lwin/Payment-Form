<template>
    <div class=" rounded-md px-4 py-4 bg-slate-50">
        <div id="plan" class="flex justify-between items-center">
            <div>
                <p v-if="userStore.$state.isMonthly" class="capitalize text-slate-700 font-semibold">{{ plan['name'] }} (Monthly)</p>
                <p v-else class="capitalize text-slate-700 font-semibold">{{ plan['name'] }} (Yearly)</p>

                <button class="underline text-slate-400 text-sm hover:text-slate-500">Change</button>
                    
            </div>
            <p v-if="userStore.$state.isMonthly" class="text-sm font-semibold text-slate-700">${{ plan['price'] }}/mo</p>
            <p v-else class="text-sm font-semibold text-slate-700">${{ plan['price'] }}/yr</p>
        </div>
        <div class="mt-4 w-full h-[1.5px] bg-slate-200"></div>
        
        <div class="flex flex-col gap-5 py-5">
            <div id="adds" v-for="add in addOns" :key="add">
                <div  class="flex justify-between items-center">
                    <p class="capitalize text-slate-400 text-sm">{{ add['name'] }}</p>
                    <p v-if="userStore.$state.isMonthly" class=" text-slate-500 text-sm font-semibold">+${{ add['price'] }}/mo</p>
                    <p v-else class=" text-slate-500 text-sm font-semibold">+${{ add['price'] }}</p>
                </div>
            </div>
        </div>
    </div>

    <div class="px-4 py-4">
        <div v-if="userStore.$state.isMonthly" class="flex justify-between items-center">
            <p class="text-slate-400 text-sm">Total (per month)</p>
            <p class="text-blue-600 font-bold">+${{ getTotal() }}/mo</p>
        </div>
        <div v-else class="flex justify-between items-center">
            <p class="text-slate-400 text-sm">Total (per year)</p>
            <p class="text-blue-600 font-bold">+${{ getTotal() }}/mo</p>
        </div>
        
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useUserStore } from '../../stores/user';

const userStore = useUserStore()

const user = userStore.$state.user;
const [plan] = [...user.plan]
const addOns = [...user.addOns]

const getTotal = () => {
    let total = 0

    for (let i =0; i < addOns.length;  i++) {
        total += addOns[i]['price']
    }

    total += plan['price']
    return total
}


</script>