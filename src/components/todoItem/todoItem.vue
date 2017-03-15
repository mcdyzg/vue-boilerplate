

<template>
	<div class="hello">
		我是{{text}}
		<button @click='$emit("remove")' >X</button>
		<button @click='clickMe("哈哈",$event)' >哈</button>
	</div>
</template>

<script>

export default {
	name: 'header',
	props:['text'],
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
