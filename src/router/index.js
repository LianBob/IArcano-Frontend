import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
 
  routes: [
        
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/Services.vue')
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/auth/Auth.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('../views/auth/Login.vue')
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('../views/auth/Register.vue')
        }
      ]
    },
    {
      path: '/user/:id',
      name: 'perfil',
      component: () => import('../views/Perfil.vue')
    },
    {
      path:'/:pathName(.*)*',
      name:'errors',
      component:()=>import('@/views/Error.vue') 
    }

  ]
})

export default router
