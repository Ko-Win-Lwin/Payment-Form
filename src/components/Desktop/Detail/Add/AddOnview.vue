<template>
    <div class="mt-10 w-[500px] pr-16 relative">
      <header>          
          <h1 class="text-3xl font-bold tracking-wide text-slate-700">Pick add-ons</h1>
          <p class="text-slate-500 mt-2">Add-ons help enhance your gaming experience.</p>
      </header>

      <div class="mt-10">
        <div class="flex flex-col gap-5">
          <div v-for="add in addOns" :key="add">
            <AddOnCard>
                <template #addName>
                    <p>{{ add['name'] }}</p>
                </template>
                <template #addDetail>
                    <p>{{ add['detail'] }}</p>
                </template>

                
                <template #addPrice>
                    
                    <div v-if="userStore.$state.isMonthly">
                        <p>+${{ add['price'] }}</p>
                    </div>
                    <div v-else>
                        <p>+${{ add['price'] }}</p>
                    </div>
                </template>
            </AddOnCard>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useStepStore } from '../../../../stores/step';
import { useUserStore } from '../../../../stores/user';
import AddOnCard from '../Add/AddOnCard.vue';

const stepStore = useStepStore()
const userStore = useUserStore()
const addOns = ref([
  { 'name' : 'online service', 'detail': 'access to multiplayer games',  'price' : 1, 'isSelected' : false },
  { 'name' : 'larger storage', 'detail': 'Extra 1TB of cloud save',  'price' : 2, 'isSelected' : false },
  { 'name' : 'customizable profile', 'detail': 'custom theme on your profile',  'price' : 2, 'isSelected' : false },
])

onMounted( () => {
    console.log(userStore.$state.isMonthly)
})
</script>