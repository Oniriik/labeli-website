import { createRouter, createWebHistory } from 'vue-router'
import {auth} from '../firebase'
// Pages import
import PageHome from '@/pages/PageHome'
import PageEvents from '@/pages/PageEvents'
import PageContact from '@/pages/PageContact'
import PageDashboard from '@/pages/PageDashboard'
import PageLogin from '@/pages/PageLogin'
import PageRegister from '@/pages/PageRegister'
//

const routes = [
  {
    path: '/',
    name: 'home',
    component: PageHome,
    meta:{
      requiresAuth: false
    }
  },
   {
    path: '/events',
    name: 'events',
    component: PageEvents,
    meta:{
      requiresAuth: false
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: PageContact,
    meta:{
      requiresAuth: false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: PageLogin,
    meta:{
      requiresAuth: false
    }
  },
  {
    path: '/register',
    name: 'register',
    component: PageRegister,
    meta:{
      requiresAuth: false
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: PageDashboard,
    meta:{
      requiresAuth: true
    }
  },
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to,from,next) =>{
  if(to.path === '/login' && auth.currentUser){
    next('/')
    return
  }
  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser){
    next('/login')
    return
  }
  next()
})


export default router