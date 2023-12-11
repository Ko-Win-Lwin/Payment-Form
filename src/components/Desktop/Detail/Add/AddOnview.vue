<template>
    <div class="mt-10 w-[500px] pr-16">
      <header>          
          <h1 class="text-3xl font-bold tracking-wide text-slate-700">Pick add-ons</h1>
          <p class="text-slate-500 mt-2">Add-ons help enhance your gaming experience.</p>
      </header>

      <div class="mt-10">
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
                    
                    <div v-if="userStore.$state.isMonthly">
                        <p class="text-sm text-blue-900">+${{ add['price'] }}/mo</p>
                    </div>
                    <div v-else>
                        <p class="text-sm text-blue-900">+${{ add['price'] * 10}}/yr</p>
                    </div>
                </template>
            </AddOnCard>
          </div>
        </div>
      </div>

      <div class="absolute bottom-10">
        <div class="flex gap-48 justify-around items-center ">
          <BackBtn></BackBtn>
          <div class=''>
            <NextBtn @infoSubmit="infoSubmit"></NextBtn>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useStepStore } from '../../../../stores/step';
import { useUserStore } from '../../../../stores/user';
import AddOnCard from '../Add/AddOnCard.vue';
import NextBtn from '../../../NextBtn.vue';
import BackBtn from '../../../BackBtn.vue';

const stepStore = useStepStore()
const userStore = useUserStore()
const addOns = ref([
  { 'name' : 'online service', 'detail': 'Access to multiplayer games',  'price' : 1, 'isSelected' : false },
  { 'name' : 'larger storage', 'detail': 'Extra 1TB of cloud save',  'price' : 2, 'isSelected' : false },
  { 'name' : 'customizable profile', 'detail': 'Custom theme on your profile',  'price' : 2, 'isSelected' : false },
])

const choosedAdds = ref([])

const validateAdds = () => {}


const infoSubmit = () => {
  if (!userStore.$state.isMonthly) {
    choosedAdds.value = computed(() => {
    const monthlyAdds = addOns.value.map(add => {
      return { ...add, price: add.price * 10 }
    })

    return monthlyAdds.filter(add => add.isSelected )
  })
  }

  else {
    choosedAdds.value = computed(() => {
      return addOns.value.filter(add => add.isSelected )
    })
  }

  userStore.$state.user.addOns = choosedAdds.value
  stepStore.nextStep()
}

</script>