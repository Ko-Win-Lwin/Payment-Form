<template>
  <div class="relative lg:mt-10 lg:w-[500px] lg:pr-16">
    <header>
        <h1 class="text-2xl font-bold tracking-wide text-slate-600">Personal info</h1>
        <p class="text-slate-500 mt-2">Please provide your name, email address and phone number.</p>
    </header>

    <form @submit.prevent="" class="mt-10 flex flex-col gap-8 text-[12px] font-bold text-slate-600 ">
        <div class="name">
            <div v-if="nameError">
                <div class="flex justify-between items-center">
                    <label for="name" class="text-slate-700  mb-2 ">Name</label>
                    <p class="text-red-400">This field is required</p>
                </div>
                <input @blur="checkName" v-model="userName" type="text" id="name" name="name"  required autofocus class="outline-none px-2 py-3 border rounded-md w-full" placeholder="e.g Stephen King" :class="{'border-red-300': nameError}">
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
  </div>

  <div v-if="responsiveStore.$state.isMobile">
      <div class="flex justify-center items-center fixed bottom-5 right-5 w-full">
        <div class="flex w-full  h-full">
            <BackBtn></BackBtn>
            <div class="ml-auto">
                <NextBtn @infoSubmit="infoSubmit"></NextBtn>
            </div>
        </div>
      </div>
  </div>

  <div v-else>
    <div class="absolute bottom-10 right-16">
        <div class="flex gap-48 justify-around items-center ">
          <div class=''>
            <NextBtn @infoSubmit="infoSubmit"></NextBtn>
          </div>
        </div>
      </div>
  </div>

    

</template>

<script setup>
import { onMounted, ref } from "vue"
import { useUserStore } from "../stores/user";
import { useStepStore } from "../stores/step";
import { useResponsiveStore } from "../stores/responsive";

import NextBtn from "./NextBtn.vue";
import BackBtn from "./BackBtn.vue";

const userStore = useUserStore()
const currentStep = useStepStore()
const responsiveStore = useResponsiveStore()

const userName = ref('')
const userEmail = ref('')
const userPhone = ref('')

const nameError = ref(false)
const emailError = ref(false)
const phoneError = ref(false)

const checkName = () => {
    if (userName.value) {
        userStore.$state.user.info = { "name" : userName.value }
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

        userStore.$state.user.info = {
            "name" : userName.value,
            "email" : userEmail.value,
            "phone" : userPhone.value,
        }
        currentStep.nextStep()
    }
}


const infoSubmit = () => {
    validateUserInfo()
}

// onMounted( () => {
//   window.addEventListener('resize', responsiveStore.updateResponsiveState)
// })




</script>

<style>

</style>