

<template>
	<div class="hello">
		<div>pagehello</div>
		<router-link to="/todo">下一页</router-link>
	</div>
</template>

<script>
import Vue from 'vue'
import './Hello.scss'
import './Hello.css'

// 全局组件
Vue.component('todo-item', {
	props:['todo'],
	template: '<div><li>{{todo.text}}</li></div>'
})

export default {
	name: 'hello',
	data () {
		return {
		}
	},
	methods: {
		
	},
	computed:{
	},
	watch:{
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
