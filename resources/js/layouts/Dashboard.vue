<script setup>
  import Navigation from "@components/Dashboard/Navigation.vue";
</script>

<template>
  <div
    class="relative h-screen flex overflow-hidden bg-gray-50 dark:bg-gray-900"
  >
    <div class="flex-1 flex flex-col overflow-hidden">
      <Navigation />
      <main
        class="flex-1 relative pt-20 z-0 overflow-y-auto focus:outline-none"
      >
        <router-view />
      </main>
    </div>
  </div>
</template>
