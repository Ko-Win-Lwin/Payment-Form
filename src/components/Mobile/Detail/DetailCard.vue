<template>
    <div class="bg-blue-50  grid place-items-center relative" id="blue_bg">
        <div class="absolute top-0 left-0">
            <SideBar></SideBar>
        </div>
        <div class="bg-white shadow-lg mt-5 p-5 w-[90%] rounded-[10px] flex justify-between gap-24 z-10 absolute top-20">
            <DetailView></DetailView>
        </div>
    </div>
  
</template>

<script setup>
import SideBar from '../SideBar/SideBar.vue';
import DetailView from '../Detail/DetailView.vue'
</script>

<style>

</style>