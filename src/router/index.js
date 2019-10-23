import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routers = [
  {
    path: '/',
    name: 'HelloWorld',
    meta: { title: 'helloWorld' },
    component: () => import('@/components/HelloWorld')
  },
  {
    path: '/agv',
    component: () => import('@/views/agv'),
    children: [{
      path: '',
      name: 'home',
      meta: { title: 'User' },
      component: () => import('@/views/agv/home')
    }]
  }
]

export default new Router({
  mode: 'history', // 后端支持可开
  routes: routers
})
