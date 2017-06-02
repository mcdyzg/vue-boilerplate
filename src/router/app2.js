import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/pages/Hello/Hello'
// import todo from '@/pages/todo'
// import TestVuex from '@/pages/TestVuex'

const Hello = resolve => require(['@/pages/Hello/Hello.vue'], resolve)
const todo = resolve => require(['@/pages/todo/todo.vue'], resolve)
const TestVuex = resolve => require(['@/pages/TestVuex/TestVuex.vue'], resolve)


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todo',
      component: todo
    },
    {
    	path:'/Hello',
    	component:Hello
    },
    {
      path:'/vuex',
      component:TestVuex
    }
  ]
})
