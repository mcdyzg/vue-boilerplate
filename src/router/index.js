import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/pages/Hello/Hello'
import todo from '@/pages/todo'

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
    }
  ]
})
