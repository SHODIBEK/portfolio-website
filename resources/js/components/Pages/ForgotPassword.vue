<script setup>
  import { reactive, computed } from "vue";
  import { Input, Button } from "flowbite-vue";
  import { useAuthStore } from "@/stores/useAuthStore";
  import useValidate from "@vuelidate/core";
  import { required, email } from "@vuelidate/validators";

  let form = reactive({
    email: "",
  });

  const authStore = useAuthStore();

  const rules = computed(() => ({
    email: { required, email },
  }));

  const v$ = useValidate(rules, form);

  const handleForgotPassword = async () => {
    const result = await v$.value.$validate();

    if (result) await authStore.forgotPassword(form);
  };
</script>

<template>
  <h2 class="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
    Forgot your password?
  </h2>
  <p class="text-base font-normal text-gray-500 dark:text-gray-400">
    Don't fret! Just type in your email and we will send you a code to reset
    your password!
  </p>
  <form class="mt-8 space-y-6" @submit.prevent="handleForgotPassword">
    <Input
      v-model="form.email"
      placeholder="name@company.com"
      label="Your email"
    >
      <template #helper v-if="v$.email.$error">
        <span class="text-sm text-red-600 dark:text-red-500 font-medium">{{
          v$.email.$errors[0].$message
        }}</span>
      </template>
    </Input>
    <Button
      type="submit"
      size="lg"
      :disabled="authStore.getLoading"
      :loading="authStore.getLoading"
      class="w-full justify-center text-center"
    >
      <span v-if="authStore.getLoading">Loading...</span>
      <span v-if="!authStore.getLoading">Send Password Reset Link</span>
    </Button>
  </form>
</template>
