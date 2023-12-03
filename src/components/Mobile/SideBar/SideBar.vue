<template>
  <div class="relative">
    <img src="../../../assets/images/bg-sidebar-mobile.svg  " alt="" class="relative">

    <div class="absolute top-10 left-[50%] translate-x-[-50%] flex justify-center items-center">

      <SideBarTab>
        <template #step>1</template>
      </SideBarTab>

      <SideBarTab>
        <template #step>2</template>
      </SideBarTab>

      <SideBarTab>
        <template #step>3</template>
      </SideBarTab>

      <SideBarTab>
        <template #step>4</template>
      </SideBarTab>
    </div>
  </div>
</template>

<script setup>
import SideBarTab from './SideBarTab.vue';
</script>

<style scoped>
</style>