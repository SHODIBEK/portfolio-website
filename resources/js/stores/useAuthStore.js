import { defineStore } from "pinia";
import axios from "axios";
import { toast } from "vue3-toastify";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    loading: false,
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || 0,
  }),

  getters: {
    stateUser: (state) => state.user,
    stateToken: (state) => state.token,
    getLoading: (state) => state.loading,
  },

  actions: {
    setToken(data) {
      localStorage.setItem("token", data);
      this.token = localStorage.getItem("token");
    },

    async getUser() {
      const data = await axios.get("/api/user");
      localStorage.setItem("user", JSON.stringify(data.data));

      this.user = JSON.parse(localStorage.getItem("user"));
    },

    async login(data) {
      this.loading = true;

      await axios
        .post("/api/login", data)
        .then((response) => {
          if (response.data.success) {
            this.setToken(response.data.data.token);
            this.getUser();
            this.router.push({ name: "DashboardIndex" });
          } else {
            toast.error("Email or Password incorrect");
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },

    async register(data) {
      this.loading = true;
      await axios
        .post("/api/register", data)
        .then((response) => {
          if (response.data.success) {
            toast.success("User created successfully!!!");
            this.router.push({ name: "Login" });
          } else {
            toast.error("Oops!!! Something went wrong");
          }
        })
        .catch((errors) => {
          toast.error(errors.response.data.message.email);
        })
        .finally(() => {
          this.loading = false;
        });
    },

    async forgotPassword(email) {
      this.loading = true;
      await axios
        .post("/api/forgot-password", email)
        .then((response) => {
          toast.success(response.data.success.message);
        })
        .catch((errors) => {
          toast.error(errors.response.data.error.message);
        })
        .finally(() => {
          this.loading = false;
        });
    },

    async resetPassword(data) {
      this.loading = true;

      await axios
        .post("/api/reset-password", {
          token: data.token,
          email: data.email,
          password: data.password,
          password_confirmation: data.password_confirmation,
        })
        .then((response) => {
          toast.success(response.data.success.message);
          this.router.push({ name: "Login" });
        })
        .catch((errors) => {
          toast.error(errors.response.data.error.message);
        })
        .finally(() => {
          this.loading = false;
        });
    },

    logout() {
      this.token = "";
      localStorage.removeItem("token");
      this.router.push({ name: "Login" });
    },
  },
});
