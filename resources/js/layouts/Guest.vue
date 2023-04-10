<template>
  <div class="min-h-screen backdrop:bg-gray-50 dark:bg-gray-900">
    <h1>Home page</h1>
    <router-link class="mr-3" to="/dashboard">ADMIN</router-link>
    <router-link class="mr-3" to="/login">Login</router-link>
    <router-link to="/register">Registration</router-link>
    <router-view />
  </div>
</template>
