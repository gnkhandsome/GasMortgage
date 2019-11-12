import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import LookForwardTo from '@/components/LookForwardTo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LookForwardTo',
      component: LookForwardTo
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    }
  ]
})
