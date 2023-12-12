<template>
    <div class="relative py-3">
      <header class="px-2">
          <h1 class="text-2xl font-bold tracking-wide text-slate-600">Pick add-ons</h1>
          <p class="text-slate-500 mt-2">Add-ons help enhance your gaming experience.</p>
      </header>
  
      <div class="mt-5 w-full flex flex-col gap-3" >
        <div v-for="add in addOns" :key="add">
            <AddOnCard :add="add">
                <template #addName>
                    <p class="font-semibold text-[14px] capitalize text-slate-600">{{ add['name'] }}</p>
                </template>
                <template #addDetail>
                    <p class="text-slate-400 text-[12px] normal-case">{{ add['detail'] }}</p>
                </template>

                
                <template #addPrice>
                    
                    <div v-if="userStore.$state.isMonthly">
                        <p class="text-[12px] text-blue-900">+${{ add['price'] }}/mo</p>
                    </div>
                    <div v-else>
                        <p class="text-[12px] text-blue-900">+${{ add['price'] * 10 }}/yr</p>
                    </div>
                </template>
            </AddOnCard>
        </div>
      </div>
  
  
  
        <div class="flex justify-between items-center fixed bottom-5 left-0 right-0 w-full">
          <div class="flex justify-around items-center gap-20 w-full h-full">
              <BackBtn></BackBtn>
              <div class="">
                  <NextBtn @infoSubmit="infoSubmit"></NextBtn>
              </div>
          </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed, ref } from 'vue';
  import AddOnCard from './AddOnCard.vue';
  import BackBtn from '../../../BackBtn.vue';
  import NextBtn from '../../../NextBtn.vue';
  import { useUserStore } from '../../../../stores/user';
  import { useStepStore } from '../../../../stores/step';
  
  const addOns = ref([
  { 'name' : 'online service', 'detail': 'Access to multiplayer games',  'price' : 1, 'isSelected' : false },
  { 'name' : 'larger storage', 'detail': 'Extra 1TB of cloud save',  'price' : 2, 'isSelected' : false },
  { 'name' : 'customizable profile', 'detail': 'Custom theme on your profile',  'price' : 2, 'isSelected' : false },
])
  

  
  const choosedAdds = ref([])
  const monthlyAdd = ref([])
  
  const userStore = useUserStore();
  const stepStore = useStepStore()
  
const infoSubmit = () => {
  monthlyAdd.value = addOns.value.map(add => {
      return {...add, price: add.price * 10}
  })

  if (!userStore.$state.isMonthly) {
      choosedAdds.value = computed(() => {
        return monthlyAdd.value.filter(add => add.isSelected)
      })
  } else {
      choosedAdds.value = computed(() => {
        return addOns.value.filter(add => add.isSelected)
      })
  }

  userStore.$state.user.addOns = choosedAdds.value
  stepStore.nextStep()
}


  // const infoSubmit = () => {
  //   if (!userStore.$state.isMonthly) {
  //     choosedAdds.value = computed(() => {
  //     const monthlyAdd = addOns.value.map(add => {
  //       return { ...add, price: add.price * 10 }
  //     })
  
  //     return monthlyAdd.filter(add => add.isSelected )
  //   })
  //   }
  
  //   else {
  //     choosedAdds.value = computed(() => {
  //       return addOns.value.filter(add => add.isSelected )
  //     })
  //   }
  //   userStore.$state.user.addOns = choosedAdds.value
  //   stepStore.nextStep()
  // }



  </script>
  
  <style>
  
  </style>