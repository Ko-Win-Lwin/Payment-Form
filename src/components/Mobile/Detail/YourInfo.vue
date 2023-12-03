<template>
  <div class="">
    <header class="px-2">
        <h1 class="text-2xl font-bold tracking-wide text-slate-600">Personal info</h1>
        <p class="text-slate-500 mt-2">Please provide your name, email address and phone number.</p>
    </header>

    <form @submit.prevent="" class="mt-5 flex flex-col gap-4 text-sm font-bold text-slate-600 ">
        <div class="flex flex-col">
            <label for="name" class="text-slate-700  mb-2 ">Name</label>
            <input type="text" id="name" name="name" autofocus class="outline-none px-2 py-3 border rounded-md" placeholder="e.g Stephen King">
        </div>

        <div class="flex flex-col">
            <label for="email" class="text-slate-700 mb-2 ">Email Address</label>
            <input type="email" id="email" name="email" class="outline-none px-2 py-3 border rounded-md" placeholder="e.g stephenking@lorem.com">
        </div>

        <div class="flex flex-col">
            <label for="name" class="text-slate-700  mb-2">Phone Number</label>
            <input type="tel" id="name" name="name" class="outline-none px-2 py-3 border rounded-md" placeholder="e.g +959 965179043">
        </div>
    </form>
  </div>
</template>

<script setup>
</script>

<style>

</style>