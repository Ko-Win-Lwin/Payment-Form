<template>
<div :class="{'hidden': currentStep.$state.step == 1}">
    <button @click="goBack" class="text-slate-500 px-5 py-2">Go Back</button>
</div>  
</template>

<script setup>
import { useStepStore } from '../stores/step';

const currentStep = useStepStore()

const goBack = () => {
    currentStep.backStep()
}
</script>

<style>

</style>