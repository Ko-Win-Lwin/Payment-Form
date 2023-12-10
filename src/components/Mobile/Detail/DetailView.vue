<template>
  <div class="relative">
    <div v-if="currentStep.$state.step == 1">
      <YourInfo></YourInfo>
    </div>
    <div v-else-if="currentStep.$state.step == 2">
      <PlanView></PlanView>
    </div>
  </div>
</template>

<script setup>
import YourInfo from './YourInfo.vue';
import PlanView from '../Detail/PlanCard.vue/PlanViwe.vue';
import { useStepStore } from '../../../stores/step';

const currentStep = useStepStore()
</script>

<style>

</style>