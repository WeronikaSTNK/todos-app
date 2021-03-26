import Vue from 'vue'
import VueRouter from 'vue-router'
import TodosList from '../views/TodosList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Moje zadania',
    component: TodosList
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  routes,
  linkExactActiveClass: "router-links",
  linkActiveClass: 'router-links-active'
})

export default router
