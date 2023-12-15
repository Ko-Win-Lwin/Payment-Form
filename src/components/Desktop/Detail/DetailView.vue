<template>
  <div class="relative">
    <div v-if="currentStep.$state.step == 1">
      <YourInfo></YourInfo>
    </div>
    <div v-else-if="currentStep.$state.step == 2">
      <PlanView></PlanView>
    </div>
    <div v-else-if="currentStep.$state.step == 3">
      <AddOnview></AddOnview>
    </div>
    <div v-else-if="currentStep.$state.step == 4">
      <FinishingUp></FinishingUp>
    </div>
  </div>
</template>

<script setup>
import { useStepStore } from '../../../stores/step';

import YourInfo from '../../YourInfo.vue';
import PlanView from '../Detail/Plan/PlanView.vue';
import AddOnview from './Add/AddOnview.vue';
import FinishingUp from './Voucher/FinishingUp.vue';

const currentStep = useStepStore()


</script>

<style>

</style>