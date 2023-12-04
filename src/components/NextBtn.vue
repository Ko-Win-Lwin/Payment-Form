<template>
  <div :class="{'hidden' : currentStep.$state.step == 4}">
    <button @click="$emit('infoSubmit')" class="px-5 py-2 rounded-md text-white font-semibold bg-sky-900">Next Step</button>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useStepStore } from '../stores/step';

defineEmits(['infoSubmit'])

const currentStep = useStepStore();


</script>

<style>

</style>