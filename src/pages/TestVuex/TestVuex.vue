<template>
	<div>
		<div class="">
			cart的num {{cart.num}}
		</div>
		<div class="">
			total的num {{num}}
		</div>
		<button @click='add'>mutation: add</button>
		<button @click='addSync'>action : addSync</button>


		<br /><br /><br /><br /><br /><br /><br />
		<div class="">
			total的obj.name {{obj.name}}
		</div>
		<div class="">
			total的obj.name {{obj.subObj.name}}
		</div>

		<br /><br /><br /><br /><br /><br /><br />


		<div class="">
			{{name}}{{cart.name}}{{getter1}}
		</div>


		<!-- <div>{{count222}}</div> -->
		<!-- <div>{{map111}}</div> -->
		<div>{{count}}</div>
		<div @click='changeStore'>点击我增加store</div>
		<div @click="decrement">点我减少store</div>
		<div @click="$store.dispatch('incrementAsync',{haha:'我是参数'})">点我异步增加store</div>
		<div @click="$store.dispatch({type:'incrementAsync',haha:'我是参数二'})">点我异步增加store</div>
		<div @click="this.incrementAsync">点我也异步增加store</div>
		<!-- 这样也可以 -->
		<!-- <div @click="$store.commit('increment','haha')">点击我切换store</div> -->
		我是count2
		<div>{{count2}}</div>

		<div>{{ map1 }}</div>


		<div @click='this.getUser'>点我组合调用action</div>
		<div @click='this.getUser2'>点我组合调用action --2</div>
		<div @click='this.getUser3'>点我组合调用action --3</div>
		<div @click='this.getUser4'>点我组合调用action --4</div>

















		<br />
		<br />
		<br />
		<br />
		<br />


















		<div>{{ getter1 }}</div>




















		<br />
		<br />
		<br />
		<br />
		<br />

















		<!-- 获取到cart这个module的getter的值 -->
		<div>{{get1}}</div>
		<div>{{this.get1}}</div>
		<!-- 获取到cart这个module的state的值 -->
		<div>cart的num:{{this.$store.state.cart.num}}</div>
		<div>{{cart}}</div>

		<!-- 调用cart这个modules的mutations -->
		<div @click="add">cart中的add</div>

		<!-- 调用cart这个modules的actions -->
		<div @click="addSync">cart中的addSync</div>




		<div class="">
			{{hahaha}}
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
	name: 'TestVuex',
	components: {},
	// 一种写法
	// computed:{
	// 	count(){
	// 		return this.$store.state.count
	// 	}
	// },

	// 第二种写法
	// computed:mapState({
	// 	count: $state => $state.count
	// }),

	// 第三种写法
	// computed:mapState([
	// 	'count'
	// ]),

	// 第四种写法
	computed: {
		count2() {
			return this.vis + '333'
		},
		// getter1(){
		// 	return this.$store.getters.getter1
		// },
		...mapGetters(['getter1', 'get1']),
		// 这样写也可以
		...mapState(['count', 'map1', 'cart', 'name', 'num', 'obj']),

		// // 这样写就是给count一个别名 count222
		// ...mapState({
		// 	count222:'count',
		// 	map111:'map1'
		// })
	},

	// computed: mapGetters([
	// 	'haha'
	// ]),
	data() {
		return {
			vis: '222',
			hahaha: 111111,
		}
	},
	methods: {
		changeStore() {
			console.log(this.$store)
			this.$store.commit('increment', 'haha')
		},
		// 调用mutation的方法，除了上面一种，还有这种
		...mapMutations([
			'decrement',
			'add',
			// 如果这里指定了cart module下的add mutation，那么只有cart的namespaced为true才会执行cart的add ,如果没有指定，cart的add不会执行
			'cart/add',
		]),
		...mapActions([
			'incrementAsync',
			'getUser',
			'getUser2',
			'getUser3',
			'getUser4',
			'addSync',
		]),
	},
}
</script>
<style lang='sass' scoped>
</style>
