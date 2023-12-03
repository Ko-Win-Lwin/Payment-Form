<template>
  <div class="flex justify-between items-center gap-5 uppercase">
        <div class="border text-white text-sm font-semibold rounded-full w-[35px] h-[35px] flex justify-center items-center">
            <p id="step text-white">
                <slot name="step"></slot>
            </p>
        </div>

        <div class="text-[12px] text-white ">
          <p id="stepNum" class="text-slate-300">
            <slot name="stepNum" ></slot>
            </p>
          <p id="stepName" class="font-semibold text-[14px] tracking-wide">
            <slot name="stepName"></slot>
          </p>
        </div>

    </div>
</template>

<script setup>
</script>

<style>

</style>