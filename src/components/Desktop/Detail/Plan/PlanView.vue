<template>
    <div class="mt-10 w-[500px] pr-16 ">
      <header>          
          <h1 class="text-3xl font-bold tracking-wide text-slate-700">Select your plan</h1>
          <p class="text-slate-500 mt-2">You have the option of monthly or yearly billing.</p>
      </header>

      <div class="mt-10">
        <div class="flex justify-between items-center">
          <div v-for="plan in plans" :key="plan">
            <PlanCard  :plan="plan" :isMonthly="isMonthly">
              <img :src="getImageUrl(plan['name'])"  alt="" class="w-[40px]">
              <template #planName>
                <span>{{ plan['name'] }}</span>
              </template>
              <template #planPrice>
                <p v-if="isMonthly" >${{ plan['price'] }}/mo</p>
                <p v-else>${{ plan['price'] * 10 }}/yr</p>
              </template>
            </PlanCard>
          </div>
        </div>
      </div>

      <div class="bg-blue-50 mt-10 py-2 rounded-md">
        <div class="flex justify-center items-center gap-8">
          <p>Month</p>
          <div class="toggle-btn flex">
            <label class="relative inline-flex items-center justify-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer">
              <div @click="toggleMonthAndYear" class="w-7 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white  after:border after:rounded-full after:h-3 after:w-3 after:transition-all"></div>
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

import { computed, ref } from 'vue';
import { useUserStore } from '../../../../stores/user';
import BackBtn from '../../../BackBtn.vue';
import NextBtn from '../../../NextBtn.vue';
import PlanCard from './PlanCard.vue';

const getImageUrl = (img) => {
  return `/src/assets/images/icon-${img}.svg`
}


const plans = ref([
  { 'name' : 'arcade', 'price' : 9, 'isSelected' : false },
  { 'name' : 'advanced', 'price' : 12, 'isSelected' : false },
  { 'name' : 'pro', 'price' : 15 , 'isSelected' : false,  } 
])

const choosedPlans = ref([])
const isMonthly = ref(true);

const toggleMonthAndYear = () => {
  isMonthly.value = !isMonthly.value
}


const userStore = useUserStore();

const infoSubmit = () => {
  if (!isMonthly.value) {
    choosedPlans.value = computed(() => {
    const monthlyPlan = plans.value.map(plan => {
      return { ...plan, price: plan.price * 10 }
    })

    return monthlyPlan.filter(plan => plan.isSelected )
  })
  }

  else {
    choosedPlans.value = computed(() => {
      return plans.value.filter(plan => plan.isSelected )
    })
  }
  userStore.$state.user.plan = choosedPlans.value
}

</script>