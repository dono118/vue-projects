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
  // persist: true
  persist: {
    // 存储的 key， 默认是 defineStore 的第一个参数
    key: id => `hm_${id}`,
    // 存储位置，默认 localStorage
    storage: sessionStorage,
    // 指定内容
    paths: ['user.username']
  }
})
