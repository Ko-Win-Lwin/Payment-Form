<template>
    <div class="relative py-3 lg:py-0 lg:mt-10 lg:w-[500px] lg:pr-16">
      <header class="px-2 lg:px-0">          
          <h1 class="text-2xl lg:text-3xl font-bold tracking-wide text-slate-600">Pick add-ons</h1>
          <p class="text-slate-500 mt-2">Add-ons help enhance your gaming experience.</p>
      </header>

      <div class="mt-5 lg:mt-10">
        <div class="flex flex-col gap-5">
          <div v-for="add in addOns" :key="add">
            <AddOnCard :add="add">
                <template #addName>
                    <p class="font-semibold text-[15px] capitalize text-slate-600">{{ add['name'] }}</p>
                </template>
                <template #addDetail>
                    <p class="text-slate-400 text-sm normal-case">{{ add['detail'] }}</p>
                </template>

                
                <template #addPrice>
                    <p v-if="userStore.$state.isMonthly" class="text-sm text-blue-900">+${{ add['price'] }}/mo</p>
                    <p v-else class="text-sm text-blue-900">+${{ add['price'] * 10}}/yr</p>
                </template>
            </AddOnCard>
          </div>
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
import { useStepStore } from '../../stores/step';
import { useUserStore } from '../../stores/user';
import { useResponsiveStore } from '../../stores/responsive';

import AddOnCard from './AddOnCard.vue';
import NextBtn from '../NextBtn.vue';
import BackBtn from '../BackBtn.vue';

const stepStore = useStepStore()
const userStore = useUserStore()
const responsiveStore = useResponsiveStore()

const addOns = ref([
  { 'name' : 'online service', 'detail': 'Access to multiplayer games',  'price' : 1, 'isSelected' : false },
  { 'name' : 'larger storage', 'detail': 'Extra 1TB of cloud save',  'price' : 2, 'isSelected' : false },
  { 'name' : 'customizable profile', 'detail': 'Custom theme on your profile',  'price' : 2, 'isSelected' : false },
])

const choosedAdds = ref([])

const monthlyPlan = ref([])



const infoSubmit = () => {
  monthlyPlan.value = addOns.value.map(add => {
      return {...add, price: add.price * 10}
  })

  if (!userStore.$state.isMonthly) {
      choosedAdds.value = computed(() => {
        return monthlyPlan.value.filter(add => add.isSelected)
      })
  } else {
      choosedAdds.value = computed(() => {
        return addOns.value.filter(add => add.isSelected)
      })
  }

  userStore.$state.user.addOns = choosedAdds.value
  stepStore.nextStep()
}

</script>