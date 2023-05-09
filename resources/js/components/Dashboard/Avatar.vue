<script setup>
  import { onMounted } from "vue";
  import { initPopovers } from "flowbite";
  import ImagePopper from "./ImagePopper.vue";

  onMounted(() => {
    initPopovers();
  });
</script>

<template>
  <button
    data-popover-target="popover-user-profile"
    data-popover-trigger="click"
    data-popover-placement="bottom"
    type="button"
    class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
  >
    <span class="sr-only">Open user menu</span>
    <img
      class="w-8 h-8 rounded-full"
      src="/images/dashboard/user.png"
      alt="user photo"
    />
  </button>
  <ImagePopper />
</template>
