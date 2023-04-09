<template>
    <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
            <div>
                <component :is="Component" :key="$route.path" />
            </div>
        </transition>
    </router-view>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
