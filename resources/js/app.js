import "./bootstrap";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import { createPinia } from 'pinia';
// Toast Notification
import Vue3Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const pinia = createPinia();

const app = createApp(App)

app.use(router)
app.use(Vue3Toastify)
app.use(pinia)
app.mount("#app");
