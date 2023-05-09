<script setup>
  import NavigationButton from "@components/Dashboard/Hamburger.vue";
  import NavigationSearch from "@components/Dashboard/Search.vue";
  import ThemeToggleButton from "@components/Dashboard/ThemeButton.vue";
  import Avatar from "@components/Dashboard/Avatar.vue";
</script>

<template>
  <nav
    class="fixed z-30 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start">
          <!-- Navigation Button -->
          <NavigationButton />
          <!-- Navigation Search Form -->
          <NavigationSearch />
        </div>
        <div class="flex items-center">
          <button
            id="toggleNavigationMobileSearch"
            type="button"
            class="p-2 text-gray-500 rounded-lg lg:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span class="sr-only">Search</span>

            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <!-- Toggle Theme Button -->
          <ThemeToggleButton />

          <div class="flex items-center ml-3">
            <!-- Profile Image -->
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  .Navigation-button {
    @apply p-2 text-gray-600 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white;
  }
</style>
