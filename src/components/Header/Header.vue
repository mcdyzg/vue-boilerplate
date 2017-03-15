

<template>
	<div class="hello">
		头部头部头部头部头部头部头部头部头部头部
	</div>
</template>

<script>
import Vue from 'vue'

export default {
	name: 'header',
	data () {
		return {
			msg: '这是头',
			insertMsg:'插入不会改变的值',
			title: '这是标题',
			show: true,
			disabled:true,
			dynamicId:'id1',
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
