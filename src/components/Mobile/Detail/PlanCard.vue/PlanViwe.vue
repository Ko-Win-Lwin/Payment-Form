<template>
  <div class="relative">
    <header class="px-2">
        <h1 class="text-2xl font-bold tracking-wide text-slate-600">Select your plan</h1>
        <p class="text-slate-500 mt-2">You have the option of monthly or yearly billing.</p>
    </header>

    <div class="mt-5 w-full flex flex-col gap-3" >
      <div v-for="plan in plans" :key="plan">
        <PlanCard>
          <img :src="getImageUrl(plan['name'])" alt="">
          <template #planName>{{ plan['name'] }}</template>
          <template #planPrice>
            <p v-if="isMonthly">${{ plan['price']}}/mo</p>
            <p v-else>${{ plan['price'] * 10}}/yr</p>
          </template>
        </PlanCard>
      </div>
    </div>

    <div class="bg-blue-50 mt-5 py-2 rounded-md">
        <div class="flex justify-center items-center gap-8">
          <p>Month</p>
          <div class="flex">
            <label class="relative inline-flex items-center justify-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer">
              <div @click="toggleMonthAndYear" class="w-7 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white  after:border after:rounded-full after:h-3 after:w-3 after:transition-all"></div>
            </label>
          </div>
          <p>Year</p>
        </div>
    </div>


      <div class="flex justify-center items-center mt-[49px]  absolute right-0 w-full">
        <div class="flex w-full h-full">
            <BackBtn></BackBtn>
            <div class="ml-auto">
                <NextBtn @infoSubmit="infoSubmit"></NextBtn>
            </div>
        </div>
    </div>
  </div>
  

    

</template>

<script setup>
import { ref } from 'vue';
import PlanCard from './PlanCard.vue';
import BackBtn from '../../../BackBtn.vue';
import NextBtn from '../../../NextBtn.vue';

const plans = ref([
  { 'name' : 'arcade', 'price' : 9 },
  { 'name' : 'advanced', 'price' : 12 },
  { 'name' : 'pro', 'price' : 15 } 
])

const getImageUrl = (img) => {
  return `/src/assets/images/icon-${img}.svg`
}

const isMonthly = ref(true);

const toggleMonthAndYear = () => {
  isMonthly.value = !isMonthly.value
}
</script>

<style>

</style>