import Vue from 'vue'
import Vuex from 'vuex'
import part2 from './modules/part2.js'

Vue.use(Vuex)
const state = {
	count : 0,
}

const getters = {
	getter1: state => {
		return state.count === 0 ?'true':'false'
	}
}

const mutations = {
	increment(state){
		state.count++
	},
	decrement(state){
		state.count--
	}
}

const actions = {
	incrementAsync({commit,state,dispatch}){
		setTimeout(()=>{
			commit('increment')
		},1000)
	}
}

export default new Vuex.Store({
	actions,
	getters,
	modules:{
		part2
	},
  	state,
  	mutations
})