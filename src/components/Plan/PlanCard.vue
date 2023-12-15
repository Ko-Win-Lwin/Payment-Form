<template>
    <div @click="selectCard(props.plan)" class="border rounded-lg lg:rounded-md lg:w-[130px] lg:h-[160px] h-[80px] px-3 py-4 flex  lg:block gap-5 " :class="{'border-blue-900': props.plan.isSelected }">
        <slot></slot>

        <div class="lg:mt-10">
            <div id="planName" class="font-bold text-sm text-slate-700">
                <slot name="planName"></slot>
            </div>

            <div id="planPrice" class="text-[13px] lg:text-[12px] font-semibold text-slate-400">
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