import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/pages/PageHome'
import PageContact from '@/pages/PageContact'
const routes = [
  {
    path: '/',
    name: 'home',
    component: PageHome
  },
  {
    path: '/contact',
    name: 'contact',
    component: PageContact
  },
]


export default createRouter({
  history: createWebHistory(),
  routes,
})