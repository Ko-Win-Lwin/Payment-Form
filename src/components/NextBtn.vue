<template>
  <div :class="{'hidden' : currentStep.$state.step == 4}">
    <button @click="nextStep" class="px-5 py-2 rounded-md text-white font-semibold bg-sky-900">Next Step</button>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useStepStore } from '../stores/step';

const currentStep = useStepStore();

const nextStep = () => {
  currentStep.nextStep()
  console.log(currentStep.$state.step)
}

onMounted(() => {
  console.log(currentStep.$state.step)
})


</script>

<style>

</style>