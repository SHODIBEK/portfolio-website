<script setup>
  import { useDarkStore } from "@/stores/themeToggle";

  const store = useDarkStore();
</script>

<template>
  <div :class="store.isDark ? 'dark' : ''">
    <section class="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div
        class="flex flex-col items-center justify-center px-6 py-8 w-full min-h-screen"
      >
        <div
          class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <router-view />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
