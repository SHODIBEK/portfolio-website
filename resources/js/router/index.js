import { createRouter, createWebHistory } from "vue-router";

// ADMIN
import AdminHome from "@/views/admin/index.vue";
// Login page
import LoginPage from '@/views/auth/login.vue';
// Registration Page
import RegPage from '@/views/auth/registration.vue';
// Home Page
import HomeIndex from "@/views/home/index.vue";
// Not Found
import PageNotFound from "@/views/notFound.vue";

const routes = [
    { path: "/", component: HomeIndex },
    { path: "/admin/home", component: AdminHome },
    { path: "/login", component: LoginPage },
    { path: "/registration", component: RegPage },
    { path: "/:pathMatch(.*)*", component: PageNotFound },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
