<template>
  <div class="relative">
    <div v-if="currentStep.$state.step == 1">
      <YourInfo/>
    </div>
    <div v-else-if="currentStep.$state.step == 2">
      <PlanView/>
    </div>
    <div v-else-if="currentStep.$state.step == 3">
      <AddOnView/>
    </div>
    <div v-else-if="currentStep.$state.step == 4">
      <FinishingUp/>
    </div>
  </div>
</template>

<script setup>
import { useStepStore } from '../stores/step';

import YourInfo from './YourInfo.vue';
import PlanView from './Plan/PlanViwe.vue'
import AddOnView from './Add/AddOnview.vue';
import FinishingUp from "./Voucher/FinishingUp.vue"

const currentStep = useStepStore()
</script>

