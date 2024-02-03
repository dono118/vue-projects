import { defineStore } from 'pinia'

export default defineStore('user', {
  state() {
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
  }
})
