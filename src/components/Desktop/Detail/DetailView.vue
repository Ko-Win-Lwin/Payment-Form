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
  </div>
</template>

<script setup>
import YourInfo from './YourInfo.vue';
import { useStepStore } from '../../../stores/step';
import PlanView from '../Detail/Plan/PlanView.vue';
import AddOnview from './Add/AddOnview.vue';

const currentStep = useStepStore()


</script>

<style>

</style>