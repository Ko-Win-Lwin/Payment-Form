<template>
    <div  @click="selectCard(props.plan)" class="border rounded-lg  px-3 py-5 flex items-center gap-5" :class="{ 'border-blue-900': activeCard }">
        <slot></slot>

        <div class="">
            <div id="planName" class="font-bold text-[16px] text-slate-700">
                <slot name="planName"></slot>
            </div>

            <div id="planPrice" class="text-[13px] font-semibold text-slate-400">
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