import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'todosList',
    component: () => import('../views/TodosList.vue')
  },
  {
    path: '/task/:id?',
    name: "taskDetails",
    component: () => import('../views/TaskDetails.vue')
  }
]

const router = new VueRouter({
  routes,
})

export default router
