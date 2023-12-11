<template>
    <div>
        {{ userStore.$state.user }}
    </div>
</template>

<script setup>
import { useUserStore } from "../../../../stores/user";
const userStore = useUserStore()
</script>