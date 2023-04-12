<script setup>
import { Input, Button } from 'flowbite-vue'
import { reactive, ref, computed } from "vue";
import useValidate from '@vuelidate/core';
import { required, email, sameAs, minLength } from '@vuelidate/validators'

let loading = ref(false);

let state = reactive({
    email: '',
    password: '',
    confirmPassword: ''
});

const rules = computed(() => ({
    email: { required, email },
    password: { required, minLength: minLength(6) },
    confirmPassword: { required, sameAsPassword: sameAs(state.password) }
}));

const v$ = useValidate(rules, state);

const submitHandler = async() => {
    const result = await v$.value.$validate();

    if(!result) {
        return
    } else {

    }
}

</script>

<template>
    <section class="h-screen bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 w-full mx-auto h-screen lg:py-0">
            <div class="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Change Password
                </h2>
                <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" @submit.prevent="submitHandler">
                    <!-- Email -->
                    <Input v-model="state.email" placeholder="name@company.com" label="Your email" type="email">
                        <template #helper v-if="v$.email.$error">
                            <span class="text-sm text-red-600 dark:text-red-500 font-medium">{{ v$.email.$errors[0].$message }}</span>
                        </template>
                    </Input>
                    <!-- Password -->
                    <Input v-model="state.password" placeholder="••••••••" label="Password" type="password">
                        <template #helper v-if="v$.password.$error">
                            <span class="text-sm text-red-600 dark:text-red-500 font-medium">{{ v$.password.$errors[0].$message }}</span>
                        </template>
                    </Input>

                    <!-- Confirm Password -->
                    <Input v-model="state.confirmPassword" placeholder="••••••••" label="Confirm Password" type="password">
                        <template #helper v-if="v$.confirmPassword.$error">
                            <span class="text-sm text-red-600 dark:text-red-500 font-medium">{{ v$.confirmPassword.$errors[0].$message }}</span>
                        </template>
                    </Input>

                    <!-- Submit button -->
                    <Button size="lg" :disabled="loading" :loading="loading" type="submit" class="w-full justify-center text-center">
                        <span v-if="loading">Loading...</span>
                        <span v-if="!loading">Reset Password</span>
                    </Button>
                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                        Do you remember your password? <router-link to="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</router-link>
                    </p>
                </form>
            </div>
        </div>
    </section>
</template>