import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/useAuthStore";

// Layouts
import DashboardLayout from "@layouts/Dashboard.vue";
import GuestLayout from "@layouts/Guest.vue";
import ErrorLayout from "@layouts/Error.vue";

// Pages
import Login from "@components/Pages/Login.vue";
import Register from "@components/Pages/Register.vue";
import Password from "@components/Pages/Password.vue";
import Dashboard from "@components/Pages/Dashboard.vue";
import Error404 from "@components/Pages/Error404.vue";

const baseURL = "/";

const routes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        component: DashboardLayout,
        children: [
            {
                path: "",
                name: "DashboardIndex",
                component: Dashboard,
            },
        ],
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/",
        name: "Guest",
        component: GuestLayout,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            requiresAuth: false,
        },
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta: {
            requiresAuth: false,
        },
    },
    {
        path: "/password",
        name: "Password",
        component: Password,
        meta: {
            requiresAuth: false,
        },
    },
    {
        path: "/",
        name: "Error",
        component: ErrorLayout,
        children: [
            {
                path: "404",
                name: "Error404",
                component: Error404,
                meta: {
                    requiresAuth: false,
                },
            },
        ],
    },
    {
        path: "/:pathMatch(.*)*",
        beforeEnter: (to, from, next) => {
            next({ name: "Error404" });
        },
    },
];

const router = createRouter({
    history: createWebHistory(baseURL),
    routes: routes,
});

router.beforeEach(async (to, from) => {
    const store = await useAuthStore();

    if (to.meta.requiresAuth && store.stateToken == 0) {
        return { name: "Login" };
    }
    if (to.meta.requiresAuth == false && store.stateToken != 0) {
        return { name: "Dashboard" };
    }
});

export default router;
