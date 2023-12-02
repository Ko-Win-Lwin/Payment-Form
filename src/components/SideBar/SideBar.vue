<template>
  <div class="relative">
    <img src="../../assets/images/bg-sidebar-desktop.svg" alt="" class="relative">

    <div class="absolute top-10 left-5 flex flex-col justify-center items-start gap-8">

      <SideBarTab>
        <template #step>1</template>
        <template #stepNum>Step 1</template>
        <template #stepName>Your Info</template>
      </SideBarTab>

      <SideBarTab>
        <template #step>2</template>
        <template #stepNum>Step 2</template>
        <template #stepName>Select Plan</template>
      </SideBarTab>

      <SideBarTab>
        <template #step>3</template>
        <template #stepNum>Step 3</template>
        <template #stepName>Add-Ons</template>
      </SideBarTab>

      <SideBarTab>
        <template #step>4</template>
        <template #stepNum>Step 4</template>
        <template #stepName>Summary</template>
      </SideBarTab>
    </div>
  </div>
</template>

<script setup>
import SideBarTab from './SideBarTab.vue';
</script>

<style scoped>
</style>