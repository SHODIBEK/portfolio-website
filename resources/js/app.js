import "./bootstrap";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
// Toast Notification
import Vue3Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

createApp(App)
.use(router)
.use(Vue3Toastify)
.mount("#app");
