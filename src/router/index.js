import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VuexStore from '@/components/vuex/vuexStore'
import LifeCycle from '@/components/vue/lifeCycle'
import BaseFactory from '@/components/designPattern/baseFactory'
import AbstractFactory from '@/components/designPattern/abstractFactory'
import FactoryFunc from '@/components/designPattern/factoryFunc'
import FormData from '@/components/frontBase/formData'

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
    },
    {
      path: '/baseFactory',
      name: 'BaseFactory',
      component: BaseFactory
    },
    {
      path: '/abstractFactory',
      name: 'AbstractFactory',
      component: AbstractFactory
    },
    {
      path: '/factoryFunc',
      name: 'FactoryFunc',
      component: FactoryFunc
    },
    {
      path: '/formData',
      name: 'FormData',
      component: FormData
    }
  ]
})
