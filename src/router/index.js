import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import StduManage1 from '@/components/studentManage/stduManage1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/studentManage1',
      name: 'StduManage1',
      component: StduManage1
    } 
  ]
})
