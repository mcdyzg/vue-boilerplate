<template>
  <div id="app">
    <Header1 />
    <div>{{this.text}}</div>
    <transition mode='out-in' :name="transitionName">
    <router-view class='child-view'></router-view>
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
      text:'我是内容',
      transitionName:'slide-left',
    }
  },
  methods:{
    changeComputed(){

    }
  },
  watch:{
    '$route'(to,from){
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
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

.child-view {
  position: absolute;
  transition: all .5s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>
