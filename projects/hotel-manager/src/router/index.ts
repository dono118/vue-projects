import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      meta: { title: '登录' },
      component: () => import('../views/Login.vue')
    },
    {
      path: '/login',
      redirect: '/'
    },
    {
      path: '/index',
      meta: { title: 'Bing酒店综合平台' },
      component: () => import('../views/Index.vue'),
      children: [
        {
          path: '/home',
          meta: { title: '首页' },
          component: () => import('../views/Home.vue')
        },
        {
          path: '/message',
          meta: { title: '消息' },
          component: () => import('../views/Message.vue')
        },
        {
          path: '/mine',
          meta: { title: '个人中心' },
          component: () => import('../views/user/Mine.vue')
        },
        {
          path: '/role',
          meta: { title: '角色管理' },
          component: () => import('../views/user/Role.vue')
        },
        {
          path: '/user',
          meta: { title: '用户管理' },
          component: () => import('../views/user/User.vue')
        },
        {
          path: '/roomType',
          meta: { title: '房型管理' },
          component: () => import('../views/room/RoomType.vue')
        },
        {
          path: '/room',
          meta: { title: '房间管理' },
          component: () => import('../views/room/Room.vue')
        },
        {
          path: '/checkIn',
          meta: { title: '入住管理' },
          component: () => import('../views/customer/CheckIn.vue')
        },
        {
          path: '/order',
          meta: { title: '订单管理' },
          component: () => import('../views/customer/Order.vue')
        },
        {
          path: '/menu',
          meta: { title: '菜单管理' },
          component: () => import('../views/system/Menu.vue')
        },
        {
          path: '/dictionary',
          meta: { title: '字典管理' },
          component: () => import('../views/system/Dictionary.vue')
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach((to, from) => {
  if (to?.meta?.title) {
    document.title = to.meta.title.toString()
  }
  NProgress.done()
})

export default router
