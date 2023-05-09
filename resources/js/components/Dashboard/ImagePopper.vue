<script setup>
  import ImagePopperItems from "./ImagePopperItems.vue";
  import { onMounted } from "vue";
  import { initPopovers } from "flowbite";
  import { useAuthStore } from "@/stores/useAuthStore";

  const authStore = useAuthStore();
  const userName = authStore.user.name;
  const userEmail = authStore.user.email;

  onMounted(() => {
    initPopovers();
  });

  const authLogout = () => {
    authStore.logout();
  };
</script>

<template>
  <div
    data-popover
    id="popover-user-profile"
    role="tooltip"
    class="popover invisible opacity-0"
  >
    <div
      class="px-4 py-3 border-b border-gray-200 dark:border-gray-600 dark:bg-gray-700"
      role="none"
    >
      <p class="text-sm text-gray-900 dark:text-white" role="none">
        {{ userName }}
      </p>
      <p
        class="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
        role="none"
      >
        {{ userEmail }}
      </p>
    </div>
    <ImagePopperItems @logout="authLogout" />
  </div>
</template>

<style>
  .popover {
    @apply absolute z-10 inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm  dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800;
  }
</style>
