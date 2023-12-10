<template>
    <div class="border rounded-md   px-3 py-4 flex justify-between items-center" >
        <div>
            <slot name="addName">   
            </slot>
            <slot name="addDetail"></slot>
        </div>

        <div>
            <slot name="addPrice"></slot>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['add'])
</script>