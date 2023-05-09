<script setup>
  import { reactive, ref, computed } from "vue";
  import { Input, Button } from "flowbite-vue";
  import { useAuthStore } from "@/stores/useAuthStore";
  import useValidate from "@vuelidate/core";
  import { required, email, sameAs, minLength } from "@vuelidate/validators";

  const authStore = useAuthStore();

  let loading = ref(false);

  let state = reactive({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const rules = computed(() => ({
    email: { required, email },
    password: { required, minLength: minLength(6) },
    confirmPassword: { required, sameAsPassword: sameAs(state.password) },
  }));

  const v$ = useValidate(rules, state);

  const register = async () => {
    const result = await v$.value.$validate();

    if (result) await authStore.register(state);
  };
</script>

<template>
  <h1
    class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
  >
    Create account
  </h1>
  <form class="space-y-4 md:space-y-6" @submit.prevent="register">
    <!-- Your Name -->
    <Input v-model="state.name" placeholder="John Doe" label="Your name" />

    <!-- Your Email -->
    <Input
      v-model="state.email"
      type="email"
      placeholder="name@company.com"
      label="Your email"
    >
      <template #helper v-if="v$.email.$error">
        <span class="text-sm text-red-600 dark:text-red-500 font-medium">{{
          v$.email.$errors[0].$message
        }}</span>
      </template>
    </Input>

    <!-- Password -->
    <Input
      v-model="state.password"
      placeholder="••••••••"
      label="Password"
      type="password"
    >
      <template #helper v-if="v$.password.$error">
        <span class="text-sm text-red-600 dark:text-red-500 font-medium">{{
          v$.password.$errors[0].$message
        }}</span>
      </template>
    </Input>

    <!-- Confirm Password -->
    <Input
      v-model="state.confirmPassword"
      placeholder="••••••••"
      label="Confirm Password"
      type="password"
    >
      <template #helper v-if="v$.confirmPassword.$error">
        <span class="text-sm text-red-600 dark:text-red-500 font-medium">{{
          v$.confirmPassword.$errors[0].$message
        }}</span>
      </template>
    </Input>

    <!-- Button -->
    <Button
      size="lg"
      :disabled="loading"
      :loading="loading"
      type="submit"
      class="w-full justify-center text-center"
    >
      <span v-if="loading">Loading...</span>
      <span v-if="!loading">Create an account</span>
    </Button>
    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
      Already have an account?
      <router-link
        to="/login"
        class="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >Login here</router-link
      >
    </p>
  </form>
</template>
