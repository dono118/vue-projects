import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      user: {
        username: ''
      }
    }
  },
  actions: {
    setUser(user: { username: string }) {
      this.user = user
    }
  },
  // 模块开启持久化
  persist: true
})
