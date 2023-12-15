<template>
    <div class="bg-blue-200 w-[100vw] h-[100vh]  grid place-items-center">
        <div class="bg-white p-5 rounded-[10px] flex justify-between gap-24">
            <SideBar/>
            <DetailView/>
        </div>
    </div>
  
</template>

<script setup>
import SideBar from '../SideBar/SideBar.vue';
import DetailView from "../../DetailView.vue"
</script>

<style>

</style>