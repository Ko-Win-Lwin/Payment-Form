<template>
    <div>
      <DetailCard></DetailCard>
      <div class="flex justify-center items-center mt-10">
            <div class="flex justify-between items-center px-5 w-full h-full">
              <BackBtn></BackBtn>
              <div class="ml-auto">
                <NextBtn></NextBtn>
              </div>
            </div>
        </div>
    </div>
  </template>
  
  <script setup>
  import DetailCard from '../components/Mobile/Detail/DetailCard.vue';
  import NextBtn from "../components/NextBtn.vue"
  import BackBtn from '../components/BackBtn.vue';
  </script>
  
  <style>
  
  </style>