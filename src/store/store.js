import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart.js'

Vue.use(Vuex)
const state = {
	count : 0,
	map1:1,
	map2:2,
	map3:3
}

const getters = {
	getter1: state => {
		return state.count === 0 ?'true':'false'
	}
}

const mutations = {
	increment(state,a){
		console.log(a)
		state.count++
	},
	decrement(state){
		state.count--
	}
}

const actions = {
	incrementAsync({commit,state,dispatch},haha){
		console.log(state)
		console.log(haha.haha)
		setTimeout(()=>{
			commit('increment')
		},1000)
	},
	getUser({commit}){
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				commit('increment')
				resolve();
			},2000);
		})
	},
	getUser2({commit,dispatch}){
		return dispatch('getUser').then(()=>{
			console.log('111')
			// commit('increment')
		})
	},
	async getUser3({commit}){
		commit('increment', await $.ajax('//api.github.com/search/users?q=a'));
	},
	async getUser4({dispatch,commit}){
		await dispatch('getUser3');
		commit('increment', await $.ajax('//api.github.com/search/users?q=b'));
	}
}

export default new Vuex.Store({
	actions,
	getters,
	modules:{
		cart
	},
  	state,
  	mutations
})