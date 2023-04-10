import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token : localStorage.getItem('token') || 0
  }),

  actions:{
    setToken(payload){
      localStorage.setItem('token', payload)
    },
    removeToken(){
      localStorage.removeItem('token');
    }
  },

  getters:{
    getToken: (state) => state.token
  }
})