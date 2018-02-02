import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/pages/Hello/Hello'
// import todo from '@/pages/todo'
// import TestVuex from '@/pages/TestVuex'

// 异步加载方法一：
// const Hello = resolve => require(['@/pages/Hello/Hello.vue'], resolve)
// const todo = resolve => require(['@/pages/todo/todo.vue'], resolve)
// const TestVuex = resolve => require(['@/pages/TestVuex/TestVuex.vue'], resolve)

// 异步加载方法二：
const Hello = () => import('@/pages/Hello/Hello.vue')
const todo = () => import('@/pages/todo/todo.vue')
const TestVuex = () => import('@/pages/TestVuex/TestVuex.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
    	path:'/todo',
    	component:todo
    },
    {
      path:'/vuex',
      component:TestVuex
    }
  ]
})
