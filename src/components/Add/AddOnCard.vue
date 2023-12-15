<template>
    <div @click="selectCard(props.add)" class="border rounded-md lg:w-[95%] lg:px-5 px-3 py-3 flex items-center" :class="{'border-blue-900': activeCard }">
        <div class="">
            <input type="checkbox" class="w-[18px] h-[18px] accent-blue-800" v-model="activeCard">
        </div>
        <div class="ml-4 lg:ml-8 flex flex-col">
            <slot name="addName">   
            </slot>
            <slot name="addDetail"></slot>
        </div>

        <div class="ml-auto">
            <slot name="addPrice"></slot>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"
const activeCard = ref(false)
const props = defineProps(['add'])

const selectCard = (x) => {
    x.isSelected = !x.isSelected
    activeCard.value = !activeCard.value
}

</script>