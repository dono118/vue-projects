<script setup>
import { ref } from 'vue'
let routeList = ref([
  { title: '书城', to: '/' },
  { title: '社区', to: '/community' },
  { title: '福利', to: '/welfare' },
  { title: '我的', to: '/mine' }
])
</script>

<template>
  <div class="bottom-nav">
    <router-link v-for="(r, i) in routeList" :key="i" :to="r.to" exact>
      <span>{{ r.title }}</span>
    </router-link>
  </div>
</template>

<style scoped>
.bottom-nav {
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: #fff;
  box-shadow: 0px -1px 2px rgba(0, 0, 0, 0.1);
}
.bottom-nav router-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: #999;
  text-decoration: none;
}
.bottom-nav router-link.active {
  color: #333;
}
</style>
