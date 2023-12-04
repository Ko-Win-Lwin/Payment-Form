<template>
  <div>
    <YourInfo></YourInfo>
    <div class="mt-16 flex justify-between mr-20">
      <BackBtn></BackBtn>
      <div class="ml-auto">
        <NextBtn></NextBtn>
      </div>
    </div>
  </div>
</template>

<script setup>
import YourInfo from './YourInfo.vue';
import NextBtn from '../../NextBtn.vue'
import BackBtn from '../../BackBtn.vue';


</script>

<style>

</style>