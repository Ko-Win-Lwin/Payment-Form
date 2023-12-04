<template>
  <div class="relative">
    <img src="../../../assets/images/bg-sidebar-mobile.svg  " alt="" class="relative">

    <div class="absolute top-10 left-[50%] translate-x-[-50%] flex justify-center items-center">

      <SideBarTab>
        <div class="border text-white text-sm font-semibold rounded-full w-[35px] h-[35px] flex justify-center items-center"
        :class="{'bg-green-200': currentStep.$state.step == 1}">
            <p id="step" :class="{'text-slate-600':currentStep.$state.step == 1}">
                1
            </p>
        </div>
      </SideBarTab>

      <SideBarTab>
        <div class="border text-white text-sm font-semibold rounded-full w-[35px] h-[35px] flex justify-center items-center"
        :class="{'bg-green-200': currentStep.$state.step == 2}">
            <p id="step" :class="{'text-slate-600':currentStep.$state.step == 2}">
                2
            </p>
        </div>
      </SideBarTab>

      <SideBarTab>
        <div class="border text-white text-sm font-semibold rounded-full w-[35px] h-[35px] flex justify-center items-center"
        :class="{'bg-green-200': currentStep.$state.step == 3}">
            <p id="step " :class="{'text-slate-600':currentStep.$state.step == 3}">
                3
            </p>
        </div>
      </SideBarTab>

      <SideBarTab>
        <div class="border text-white text-sm font-semibold rounded-full w-[35px] h-[35px] flex justify-center items-center"
        :class="{'bg-green-200': currentStep.$state.step == 4}">
            <p id="step" :class="{'text-slate-600':currentStep.$state.step == 4}">
                4
            </p>
        </div>
      </SideBarTab>
    </div>
  </div>
</template>

<script setup>
import { useStepStore } from '../../../stores/step';
import SideBarTab from './SideBarTab.vue';

const currentStep = useStepStore()
</script>

<style scoped>
</style>