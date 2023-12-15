<template>
  <div v-if="responsiveStore.isMobile">
    <MobileView></MobileView>
  </div>
  <div v-else >
    <DesktopView></DesktopView>
  </div>
</template>

<script setup>
import DesktopView from '../components/Desktop/Detail/DesktopView.vue';
import MobileView from '../components/Mobile/Detail/MobileView.vue';
import { useResponsiveStore } from '../stores/responsive';
import { onMounted } from 'vue';


const responsiveStore = useResponsiveStore();

onMounted( () => {
  window.addEventListener('resize', responsiveStore.updateResponsiveState)
})



</script>
