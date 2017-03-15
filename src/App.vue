<template>
  <div id="app">
    <Header1 />
    <router-view></router-view>
    ————————————————————————————
    <div @click='changeComputed'>点我改变computed</div>
    <div>{{appComputed}}</div>
  </div>
</template>

<script>
import Header1 from './components/Header/Header'

export default {
  name: 'app',
  components: {
    Header1
  },
  data(){
    return {
      num:'1111111'
    }
  },
  methods:{
    changeComputed(){
      this.num = 33333;
    }
  },
  computed:{
    appComputed(){
      console.log(111)
      return this.num+Date.now()
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
