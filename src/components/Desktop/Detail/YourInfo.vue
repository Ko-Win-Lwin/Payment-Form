<template>
  <div class="mt-10 pr-20">
    <header>
        <h1 class="text-3xl font-bold tracking-wide text-slate-700">Personal info</h1>
        <p class="text-slate-500 mt-2">Please provide your name, email address and phone number.</p>
    </header>

    <form @submit.prevent="" class="mt-10 flex flex-col gap-8 text-[12px] font-bold text-slate-600 ">
        <div class="name">
            <div v-if="nameError">
                <div class="flex justify-between items-center">
                    <label for="name" class="text-slate-700  mb-2 ">Name</label>
                    <p class="text-red-400">This field is required</p>
                </div>
                <input @blur="checkName" v-model="userName" type="text" id="name" name="name" required autofocus class="outline-none px-2 py-3 border rounded-md w-full" placeholder="e.g Stephen King" :class="{'border-red-300': nameError}">
            </div>
            <div v-else class="flex flex-col">
                <label for="name" class="text-slate-700  mb-2 ">Name</label>
                <input @blur="checkName" v-model="userName" type="text" id="name" name="name" required autofocus class="outline-none px-2 py-3 border rounded-md" placeholder="e.g Stephen King">
            </div>
        </div>

        <div class="email">
            <div v-if="emailError">
                <div class="flex justify-between items-center">
                    <label for="email" class="text-slate-700 mb-2 ">Email Address</label>
                    <p class="text-red-400">This field is required</p>
                </div>
                <input @blur="checkEmail" v-model="userEmail" type="email" id="email" name="email" required class="outline-none px-2 py-3 border rounded-md w-full" placeholder="e.g stephenking@lorem.com" :class="{'border-red-300': emailError}">
            </div>
            <div v-else class="flex flex-col">
                <label for="email" class="text-slate-700 mb-2 ">Email Address</label>
                <input @blur="checkEmail" v-model="userEmail" type="email" id="email" name="email" required class="outline-none px-2 py-3 border rounded-md" placeholder="e.g stephenking@lorem.com">
            </div>
        </div>

        <div class="phone">
            <div v-if="phoneError">
                <div class="flex justify-between items-center">
                    <label for="name" class="text-slate-700  mb-2">Phone Number</label>
                    <p class="text-red-400">This field is required</p>
                </div>
                <input @blur="checkPhone" v-model="userPhone" type="tel" id="name" name="name" required class="outline-none px-2 py-3 border rounded-md w-full" placeholder="e.g +959 965179043" :class="{'border-red-300': phoneError}">
            </div>
            <div v-else class="flex flex-col">
                <label for="name" class="text-slate-700  mb-2">Phone Number</label>
                <input @blur="checkPhone" v-model="userPhone" type="tel" id="name" name="name" required class="outline-none px-2 py-3 border rounded-md" placeholder="e.g +959 965179043">
            </div>
        </div>
    </form>

    <div class="mt-16 flex justify-between mr-20">
      <BackBtn></BackBtn>
      <div class="ml-auto">
        <NextBtn @infoSubmit="infoSubmit"></NextBtn>
      </div>
    </div>
  </div>
</template>

<script setup>
import NextBtn from '../../NextBtn.vue'
import BackBtn from '../../BackBtn.vue';

import { ref } from "vue";
import { useUserStore } from "../../../stores/user";
import { useStepStore } from '../../../stores/step';


const userName = ref('')
const userEmail = ref('')
const userPhone = ref('')

const nameError = ref(false)
const emailError = ref(false)
const phoneError = ref(false)

const userStore = useUserStore()
const currentStep = useStepStore()

const checkName = () => {
    if (userName.value) {
        nameError.value = false
    }

    else {
        nameError.value = true;
    }
}

const checkEmail = () => {
    if (userEmail.value) {
        emailError.value = false
    }

    else {
        emailError.value = true
    }
}

const checkPhone = () => {
    if (userPhone.value) {
        phoneError.value = false
    }

    else {
        phoneError.value = true
    }
}

const validateUserInfo = () => {
    if (!userName.value) {
        nameError.value = true;
    }

    if (!userEmail.value) {
        emailError.value = true
    }

    if (!userPhone.value) {
        phoneError.value = true
    }

    if (userEmail.value && userName.value && userPhone.value) {
        nameError.value = false
        emailError.value = false
        phoneError.value = false

        userStore.$state.user.name = userName.value;
        userStore.$state.user.email = userEmail.value;
        userStore.$state.user.phone = userPhone.value;
        currentStep.nextStep()
    }
}



const infoSubmit = () => {
    validateUserInfo()
}






</script>

<style>

</style>