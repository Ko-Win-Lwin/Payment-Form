<template>
    <div class="bg-blue-50 w-[100vw] h-[85vh]  grid place-items-center relative">
        <div class="absolute top-0 left-0">
            <SideBar></SideBar>
        </div>
        <div class="bg-white mt-5 p-5 w-[90%] rounded-[10px] flex justify-between gap-24 z-10 absolute top-20">
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