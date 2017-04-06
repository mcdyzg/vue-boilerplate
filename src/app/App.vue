<template>
  <div id="app">
    <Header1 />
    <div>{{this.text}}</div>
    <router-view></router-view>
    
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
</style>
