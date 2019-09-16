import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VuexStore from '@/components/vuex/vuexStore'
import LifeCycle from '@/components/vue/lifeCycle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/vuexStore',
      name: 'VuexStore',
      component: VuexStore
    },
    {
      path: '/lifeCycle',
      name: 'LifeCycle',
      component: LifeCycle
    } 
  ]
})
