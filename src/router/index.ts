import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { layout: 'empty' }
    },
    {
      path: '/project/academy',
      name: 'academy',
      meta: { layout: 'empty' },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/project/AcademyView.vue'),
    },
    {
      path: '/project/barua',
      name: 'barua',
      meta: { layout: 'empty' },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/project/BaruaView.vue'),
    },
  ],
})

export default router
