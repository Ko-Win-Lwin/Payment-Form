<template>
  <div class="relative">
    <img src="../../../assets/images/bg-sidebar-desktop.svg" alt="" class="relative">

    <div class="absolute top-10 left-5 flex flex-col justify-center items-start gap-8">

      <SideBarTab>
        <div class="border text-white text-sm font-semibold rounded-full w-[35px] h-[35px] flex justify-center items-center"
        :class="{'bg-green-200': currentStep.$state.step == 1}">
          <p :class="{'text-slate-600': currentStep.$state.step == 1}">1</p>
        </div>
        <template #stepNum>Step 1</template>
        <template #stepName>Your Info</template>
      </SideBarTab>

      <SideBarTab>
        <div class="border text-white text-sm font-semibold rounded-full w-[35px] h-[35px] flex justify-center items-center"
        :class="{'bg-green-200': currentStep.$state.step == 2}">
          <p :class="{'text-slate-600': currentStep.$state.step == 2}">2</p>
        </div>
        <template #stepNum>Step 2</template>
        <template #stepName>Select Plan</template>
      </SideBarTab>

      <SideBarTab>
        <div class="border text-white text-sm font-semibold rounded-full w-[35px] h-[35px] flex justify-center items-center"
        :class="{'bg-green-200': currentStep.$state.step == 3}">
          <p :class="{'text-slate-600': currentStep.$state.step == 3}">3</p>
        </div>
        <template #stepNum>Step 3</template>
        <template #stepName>Add-Ons</template>
      </SideBarTab>

      <SideBarTab>
        <div class="border text-white text-sm font-semibold rounded-full w-[35px] h-[35px] flex justify-center items-center"
        :class="{'bg-green-200': currentStep.$state.step == 4}">
          <p :class="{'text-slate-600': currentStep.$state.step == 4}">4</p>
        </div>
        <template #stepNum>Step 4</template>
        <template #stepName>Summary</template>
      </SideBarTab>
    </div>
  </div>
</template>

<script setup>
import SideBarTab from './SideBarTab.vue';
import { useStepStore } from '../../../stores/step';

const currentStep = useStepStore()
</script>

<style scoped>
</style>