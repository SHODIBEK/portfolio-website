<script setup>
  const menuItems = [
    {
      title: "Dashboard",
      href: "DashboardIndex",
    },
    {
      title: "Settings",
      href: "DashboardIndex",
    },
    {
      title: "Sign out",
      href: null,
    },
  ];

  const emit = defineEmits(["logout"]);

  const handlerLogout = () => {
    emit("logout");
  };
</script>

<template>
  <ul class="py-1" role="none">
    <li v-for="item in menuItems" :key="item.title">
      <router-link
        v-if="item.href != null"
        :to="{ name: item.href }"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
        role="menuitem"
        >{{ item.title }}
      </router-link>
      <button
        v-else
        @click.prevent="handlerLogout"
        class="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        {{ item.title }}
      </button>
    </li>
  </ul>
</template>
