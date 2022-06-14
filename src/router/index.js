import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/pages/PageHome'

const routes = [
  {
    path: '/',
    name: 'home',
    component: PageHome
  },
]


export default createRouter({
  history: createWebHistory(),
  routes,
})