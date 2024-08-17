import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/index', // 首页
    name: 'Index',
    component: () => import('@/views/index')
  },
  {
    path: '/community', // 社区
    name: 'Community',
    component: () => import('@/views/community')
  },
  {
    path: '/welfare', // 福利
    name: 'Welfare',
    component: () => import('@/views/welfare')
  },
  {
    path: '/mine', // 我的
    name: 'Mine',
    component: () => import('@/views/mine')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
