import Vue from 'vue'
import App from './App'
import router from './router'

// Vue.config.productionTip = false


let data = { a: 1 }



// vm.data.a等同于vm.a
let vm = new Vue({
  el: '#app',
  router,
  data: data,
  template: '<App/>',
  components: { App },
  created() {
    // console.log(this)
  },
  computed:{
  	computedMethod(){
  		return 'hhhh'
  	}
  },
  updated(){
  	console.log(111)
  }
})
console.log(vm)


// 修改vm.a后，将会出发watch事件
vm.$watch('a', function (newVal, oldVal) {
  console.log(newVal,oldVal)
})


data.a = 2;
vm.a = 3;