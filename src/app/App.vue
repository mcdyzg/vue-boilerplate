<template>
  <div id="app">
    <Header1 />
    <div>{{this.text}}</div>
    <transition mode='out-in' name="fade">
    <router-view></router-view>
    </transition>
    
  </div>
</template>

<script>
import Header1 from '../components/Header/Header'

export default {
  name: 'app',
  components: {
    Header1
  },
  data(){
    return {
      text:'我是内容'
    }
  },
  methods:{
    changeComputed(){
      
    }
  },
  computed:{
    appComputed(){
      
    }
  },
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
