import "./bootstrap";
import { createApp, markRaw } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
// Toast Notification
import Vue3Toastify from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const pinia = createPinia();

// Use router in Pinia
pinia.use(({ store }) => {
    store.router = markRaw(router);
});

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(Vue3Toastify, {
    autoClose: 3000,
});
app.mount("#app");
