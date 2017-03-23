

<template>
	<div class="hello">
		<!-- 两种都行 -->
		<!-- 我是{{text}} -->
		<div v-once>我是静态内容</div>
		我是{{this.text}}--{{MyLike}}
		<button @click='$emit("remove")' >X</button>
		<button @click='clickMe("哈哈",$event)' >哈</button>
	
		<slot value='我是值' text='我是子组件传给父组件的属性'>只有没有要分发的内容的时候才会显示</slot>
		<slot text='我是作用域插槽' name='header'>头部没有分发内容时才会显示</slot>
		<slot name='footer'>尾部没有分发内容时才会显示</slot>

		<div @click='$emit("event-a")'>点我触发外部事件</div>
	</div>
</template>

<script>

export default {
	name: 'header',
	props:['text','MyLike'],
	data () {
		return {
			
		}
	},
	methods: {
		clickMe: function(txt,e) {
			alert(txt)
			console.log(e)
			console.log(event)
			console.log(this)
		},
		haha: function() {
			alert('haha')
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
