<template>
  <div class="relative h-screen flex overflow-hidden bg-gray-50 dark:bg-dark-body">
      <div class="flex-1 flex flex-col w-0 overflow-hidden">
          <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none">
              <div class="space-y-4">
                  <router-view />
              </div>
          </main>
      </div>
  </div>
</template>