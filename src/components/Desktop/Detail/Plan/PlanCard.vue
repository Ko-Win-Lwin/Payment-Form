<template>
    <div @click="selectCard(props.plan)" class="border rounded-md w-[130px] h-[160px] px-3 py-4" :class="{'border-blue-900': activeCard }">
        <slot></slot>

        <div class="mt-10">
            <div id="planName" class="font-bold text-sm text-slate-700">
                <slot name="planName"></slot>
            </div>

            <div id="planPrice" class="text-[12px] font-semibold text-slate-400">
                <slot name="planPrice"></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"

const activeCard = ref(false)
const props = defineProps(['plan', 'selectCard'])

const selectCard = (x) => {
    x.isSelected = !x.isSelected
    activeCard.value = !activeCard.value
}



</script>