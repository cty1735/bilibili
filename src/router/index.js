import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
import UseInfo from '@/views/UseInfo.vue'
import Edit from '@/views/Edit.vue'
Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      component: Home,
      meta:{
        keepalive:true
      }
    },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/login',
    component: Login
  },
  {
    path:'/userinfo',
    component:UseInfo
  },
  {
    path:'/edit',
    component:Edit
  }
]

const router = new VueRouter({
  routes
})

export default router
