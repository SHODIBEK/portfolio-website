import { createRouter, createWebHistory } from "vue-router";

// ADMIN
import AdminHome from "@/views/admin/index.vue";
// Home Page
import HomeIndex from "@/views/home/index.vue";
// Not Found
import PageNotFound from "@/views/notFound.vue";

const routes = [
    { path: "/", component: HomeIndex },
    { path: "/admin/home", component: AdminHome },
    { path: "/:pathMatch(.*)*", component: PageNotFound },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
