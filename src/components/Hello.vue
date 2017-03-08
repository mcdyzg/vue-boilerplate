

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 v-bind:title="title">hover显示标题</h2>
    <h2 v-if="show">显示我</h2>
    <ul>
      <li v-for='todo in todos'>
        {{todo.text}}
      </li>
    </ul>

    <div v-on:click='clickMe'>
        点击我
    </div>

    <div>{{inputword}}</div>
    <input type="text" v-model='inputword' name="">
  
    <br />
    <todo-item v-for='todo in todos' v-bind:todo='todo' :key="todo.text" ></todo-item>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import './Hello.scss'
import './Hello.css'

Vue.component('todo-item', {
  props:['todo'],
  template: '<div><li>{{todo.text}}</li></div>'
})

export default {
  name: 'hello',
  data () {
    return {
      msg: '这是头',
      title: '这是标题',
      show: true,
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ],
      inputword:'hahaha'
    }
  },
  methods: {
    clickMe: function() {
        this.msg = 'hahahaha'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
