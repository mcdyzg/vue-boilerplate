<template>
	<div>
		
		<div>{{count}}</div>
		<div @click='changeStore'>点击我增加store</div>
		<div @click="decrement">点我减少store</div>
		<div @click="$store.dispatch('incrementAsync',{haha:'我是参数'})">点我异步增加store</div>
		<div>{{ getter1 }}</div>

		<br />
		<br />
		<br />
		<br />
		<br />
		
		<div>{{get1}}</div>
		<div>{{part2}}</div>
		<div @click='add'>点我增加part2的num</div>
		<div @click='addSync'>点我异步增加part2的num</div>

		<br />
		<br />
		<br />
		<br />
		<br />

		<router-link to="/">上一页</router-link>
	</div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
	name:'TestVuex',
	components:{
		
	},
	computed:{
		...mapGetters([
			'getter1',
			'get1'
			]),
		...mapState([
			'count',
			'part2'
		])
	},
	data(){
		return {
		}
	},
	methods:{
		changeStore(){
			this.$store.commit('increment')
		},
		...mapMutations([
			'decrement',
			'add'
			]),
		...mapActions([
			'incrementAsync',
			'addSync'
			])
	}
}
</script>
<style lang='sass' scoped>
</style>
