<template>
<div>
	<div>page todo</div>
	
	<router-link to="/vuex">下一页</router-link>
</div>
	
</template>

<script>
// console.log(this)
// bus.$on('id-selected', function (id) {
//   	console.log(id)
// })
import Vue from 'vue'


export default {
	name:'todo',
	components:{
		
	},
	// 自定义指令
	directives: {

	},
	data(){
		return {

		}
	},
	methods:{

	}
}
</script>
<style lang='scss' scoped>
div{
	color:#fff;
	div{
		color:red;
	}
}
</style>
