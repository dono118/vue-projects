import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/login',
      redirect: '/'
    },
    {
      path: '/index',
      component: () => import('../views/Index.vue')
    }
  ]
})

export default router
