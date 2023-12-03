<template>
  <div v-if="responsiveStore.isMobile">
    <MobileView></MobileView>
  </div>
  <div v-else>
    <DesktopView></DesktopView>
  </div>
</template>

<script setup>
import MobileView from './MobileView.vue';
import DesktopView from './DesktopView.vue';
import { useResponsiveStore } from '../stores/responsive';
import { onMounted } from 'vue';


const responsiveStore = useResponsiveStore();

onMounted( () => {
  window.addEventListener('resize', responsiveStore.updateResponsiveState)
})



</script>
