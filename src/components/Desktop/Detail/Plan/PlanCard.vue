<template>
    <div @click="selectCard(props.plan)" class="border rounded-md w-[130px] h-[160px] px-3 py-4" :class="{'border-blue-900': props.plan.isSelected }">
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

const props = defineProps(['plan', 'plans'])


const selectCard = (x) => {
    props.plans.forEach(plan => {
        if (plan.name == x.name) {
            x.isSelected = !x.isSelected
        } else {
            plan.isSelected = false
        }
    });
}


</script>