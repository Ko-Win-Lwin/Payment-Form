<template>
    <div class="mt-10 w-[500px] pr-16 ">
      <header>          
          <h1 class="text-3xl font-bold tracking-wide text-slate-700">Select your plan</h1>
          <p class="text-slate-500 mt-2">You have the option of monthly or yearly billing.</p>
      </header>

      <div class="mt-10">
        <div class="flex justify-between items-center">
          <PlanCard>
            <img src="../../../../assets/images/icon-arcade.svg" alt="" class="w-[40px]">
            <template #planName>
              <span>Arcade</span>
            </template>
            <template #planPrice>
              <p v-if="true" >$9/mo</p>
              <p v-else>$190/yr</p>
            </template>
          </PlanCard>

          <PlanCard>
            <img src="../../../../assets/images/icon-advanced.svg" alt="">
            <template #planName>
              <span>Advanced</span>
            </template>
            <template #planPrice> 
              <p v-if="true">$12/mo</p>
              <p v-else>$120/yr</p>
            </template>
          </PlanCard>

          <PlanCard>
            <img src="../../../../assets/images/icon-pro.svg" alt="">
            <template #planName>
              <span>Pro</span>
            </template>
            <template #planPrice> 
              <p v-if="true">$15/mo</p>
              <p v-else>$150/yr</p>
            </template>
          </PlanCard>
        </div>
      </div>

      <div class="bg-blue-50 mt-10 py-2 rounded-md">
        <div class="flex justify-center items-center gap-8">
          <p>Month</p>
          <div>
            <label class="relative inline-flex items-center justify-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer">
              <div class="w-7 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white  after:border after:rounded-full after:h-3 after:w-3 after:transition-all"></div>
            </label>
          </div>
          <p>Year</p>
        </div>
      </div>

      <div class="mt-32 flex justify-between items-center ">
      <BackBtn></BackBtn>
      <div class="ml-auto">
        <NextBtn @infoSubmit="infoSubmit"></NextBtn>
      </div>
    </div>

    </div>
</template>

  
<script setup>
import { ref } from 'vue';
import BackBtn from '../../../BackBtn.vue';
import NextBtn from '../../../NextBtn.vue';
import PlanCard from './PlanCard.vue';



</script>