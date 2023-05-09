<script setup>
  import { reactive, ref, computed } from "vue";
  import { Input, Button } from "flowbite-vue";
  import { useAuthStore } from "@/stores/useAuthStore";
  import useValidate from "@vuelidate/core";
  import { required, email } from "@vuelidate/validators";

  let active = ref(false);
  let form = reactive({
    email: "",
    password: "",
  });

  const authStore = useAuthStore();

  const rules = computed(() => ({
    email: { required, email },
    password: { required },
  }));

  const v$ = useValidate(rules, form);

  const handleLogin = async () => {
    const result = await v$.value.$validate();

    if (result) await authStore.login(form);
  };
</script>

<template>
  <h1
    class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
  >
    Sign in to your account
  </h1>
  <form class="space-y-4 md:space-y-6" @submit.prevent="handleLogin">
    <div>
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
    </div>
    <div>
      <Input
        v-model="form.password"
        :type="!active ? 'password' : 'text'"
        placeholder="••••••••"
        label="Password"
      >
        <template #suffix>
          <button
            v-show="form.password"
            class="flex w-6 h-6 fill-gray-300 hover:fill-primary-600 dark:fill-gray-600 transition"
            :class="active ? '!fill-primary-600' : ''"
            title="Show/Hide Password"
            @click.prevent="active = !active"
            type="button"
          >
            <svg
              v-if="!active"
              class="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 96 960 960"
            >
              <path
                d="M480.118 726Q551 726 600.5 676.382q49.5-49.617 49.5-120.5Q650 485 600.382 435.5q-49.617-49.5-120.5-49.5Q409 386 359.5 435.618q-49.5 49.617-49.5 120.5Q310 627 359.618 676.5q49.617 49.5 120.5 49.5Zm-.353-58Q433 668 400.5 635.265q-32.5-32.736-32.5-79.5Q368 509 400.735 476.5q32.736-32.5 79.5-32.5Q527 444 559.5 476.735q32.5 32.736 32.5 79.5Q592 603 559.265 635.5q-32.736 32.5-79.5 32.5ZM480 856q-146 0-264-83T40 556q58-134 176-217t264-83q146 0 264 83t176 217q-58 134-176 217t-264 83Zm0-300Zm-.169 240Q601 796 702.5 730.5 804 665 857 556q-53-109-154.331-174.5-101.332-65.5-222.5-65.5Q359 316 257.5 381.5 156 447 102 556q54 109 155.331 174.5 101.332 65.5 222.5 65.5Z"
              />
            </svg>
            <svg
              v-else
              class="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 96 960 960"
            >
              <path
                d="m629 637-44-44q26-71-27-118t-115-24l-44-44q17-11 38-16t43-5q71 0 120.5 49.5T650 556q0 22-5.5 43.5T629 637Zm129 129-40-40q49-36 85.5-80.5T857 556q-50-111-150-175.5T490 316q-42 0-86 8t-69 19l-46-47q35-16 89.5-28T485 256q143 0 261.5 81.5T920 556q-26 64-67 117t-95 93Zm58 226L648 827q-35 14-79 21.5t-89 7.5q-146 0-265-81.5T40 556q20-52 55.5-101.5T182 360L56 234l42-43 757 757-39 44ZM223 402q-37 27-71.5 71T102 556q51 111 153.5 175.5T488 796q33 0 65-4t48-12l-64-64q-11 5-27 7.5t-30 2.5q-70 0-120-49t-50-121q0-15 2.5-30t7.5-27l-97-97Zm305 142Zm-116 58Z"
              />
            </svg>
          </button>
        </template>
        <template #helper v-if="v$.password.$error">
          <span class="text-sm text-red-600 dark:text-red-500 font-medium">{{
            v$.password.$errors[0].$message
          }}</span>
        </template>
      </Input>
    </div>
    <div>
      <router-link
        :to="{ name: 'ForgotPassword' }"
        class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
        >Forgot password?</router-link
      >
    </div>
    <Button
      size="lg"
      :disabled="authStore.getLoading"
      :loading="authStore.getLoading"
      class="w-full justify-center text-center"
    >
      <span v-if="authStore.getLoading">Loading...</span>
      <span v-if="!authStore.getLoading">Sign in</span>
    </Button>
    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
      Don’t have an account yet?
      <router-link
        to="/register"
        class="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >Sign up</router-link
      >
    </p>
  </form>
</template>
