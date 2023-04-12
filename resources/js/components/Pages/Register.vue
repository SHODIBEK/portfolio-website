<script setup>
import { reactive, ref, computed } from 'vue'
import { Input, Button } from 'flowbite-vue'
import { useRouter } from "vue-router"
import { toast } from 'vue3-toastify'
import { useAuthStore } from '@/stores/useAuthStore'
import useValidate from '@vuelidate/core';
import { required, email, sameAs, minLength } from '@vuelidate/validators'

const router = useRouter()
const authStore = useAuthStore()

let loading = ref(false);

let state = reactive({
    name: '',
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

const register = async() => {
    const result = await v$.value.$validate();
    console.log(state)
    if(!result) {
        return
    } else {
        loading.value = true
        await axios.post('/api/register', state).then(response => {
            if(response.data.success) {
                authStore.setToken(response.data.data.token)
                router.push({ name : 'Login' });
            } else {
                toast.success('User created successfully!!!', {
                    autoClose: 3000,
                    position: toast.POSITION.BOTTOM_RIGHT,
                });
            }
        }).finally(() => {
            loading.value = false
        })
    }
}
</script>

<template>
    <section class="h-screen bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 w-full h-screen lg:py-0">
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create account
                    </h1>
                    <form class="space-y-4 md:space-y-6" @submit.prevent="register">
                        <!-- Your Name -->
                        <Input v-model="state.name" placeholder="John Doe" label="Your name" />

                        <!-- Your Email -->
                        <Input v-model="state.email" type="email" placeholder="name@company.com" label="Your email">
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

                        <!-- Button -->
                        <Button size="lg" :disabled="loading" :loading="loading" type="submit" class="w-full justify-center text-center">
                            <span v-if="loading">Loading...</span>
                            <span v-if="!loading">Create an account</span>
                        </Button>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account? <router-link to="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</router-link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>