<template>
  <div class="relative lg:mt-10 lg:w-[500px] lg:pr-16">
    <header class="px-2">
        <h1 class="text-2xl font-bold tracking-wide text-slate-600">Select your plan</h1>
        <p class="text-slate-500 mt-2">You have the option of monthly or yearly billing.</p>
    </header>

    <div class="mt-5 flex flex-col gap-3" >
      <div class="flex flex-col lg:flex-row gap-5">
        <div v-for="plan in plans" :key="plan">
          <PlanCard :plan="plan" :isMonthly="isMonthly" :plans="plans">
            <img :src="getImageUrl(plan['name'])" alt="">
            <template #planName>${{ plan['name'] }}</template>
            <template #planPrice>
              <div v-if="userStore.$state.isMonthly">
                <p >${{ plan['price']}}/mo</p>
              </div>
              <div v-else>
                <p>${{ plan['price'] * 10}}/yr</p>
                <p class="text-slate-700 font-normal">2 months free</p>
              </div>
            </template>
          </PlanCard>
        </div>
      </div>
    </div>

    <div class="bg-blue-50 lg:mt-10 mt-5 py-2 rounded-md">
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
  </div>

  <div v-if="responsiveStore.$state.isMobile">
      <div class="w-full fixed bottom-5 right-0 left-0">
        <div class="flex justify-between items-center">
            <BackBtn></BackBtn>
            <div class="mr-5">
                <NextBtn @infoSubmit="infoSubmit"></NextBtn>
            </div>
        </div>
      </div>
  </div>

  <div v-else>
    <div class="absolute bottom-10 right-16 left-0">
        <div class="flex  justify-between items-center ">
            <BackBtn></BackBtn>
            <NextBtn @infoSubmit="infoSubmit"></NextBtn>
        </div>
      </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import PlanCard from './PlanCard.vue';
import BackBtn from '../BackBtn.vue';
import NextBtn from '../NextBtn.vue';
import { useUserStore } from '../../stores/user';
import { useStepStore } from '../../stores/step';
import { useResponsiveStore } from '../../stores/responsive';

const plans = ref([
  { 'name' : 'arcade', 'price' : 9 },
  { 'name' : 'advanced', 'price' : 12 },
  { 'name' : 'pro', 'price' : 15 } 
])

const getImageUrl = (img) => {
  return `/src/assets/images/icon-${img}.svg`
}

const choosedPlans = ref([])
const monthlyPlan = ref([])


const toggleMonthAndYear = () => {
  userStore.togglePlan()
}

const userStore = useUserStore();
const stepStore = useStepStore()
const responsiveStore = useResponsiveStore()

const infoSubmit = () => {
    monthlyPlan.value = plans.value.map(plan => {
      return {...plan, price: plan.price * 10}
    })

    if (!userStore.$state.isMonthly) {
      choosedPlans.value = computed(() => {
        return monthlyPlan.value.filter(plan => plan.isSelected)
      })

    }

    else {
      choosedPlans.value = computed(() => {
        return plans.value.filter(plan => plan.isSelected )
      })
    }
    userStore.$state.user.plan = choosedPlans.value
    stepStore.nextStep()
}



onMounted(() => {
    userStore.$state.isMonthly = true
})
</script>

<style>

</style>