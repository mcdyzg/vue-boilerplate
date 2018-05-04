const state = {
	num: 1,
	name: '我是重名的',
}

const getters = {
	get1: state => state.num + 'hahaha',
	total: (state, getters, rootState) => {
		console.log(getters, rootState)
		return state.num + 1000
	},
	getter1: state => {
		return state.name
	},
}

const mutations = {
	increment(state, payload) {
		state.num++
	},
	add(state, a) {
		state.num++
	},
}

const actions = {
	addSync({ state, commit, rootState }) {
		console.log(rootState)
		commit('add')
	},
}

export default {
	// 如果namespaced为true，那么其他模块调用commit('add')本模块收不到，必须使用commit('cart/add')
	// namespaced: true,
	actions,
	mutations,
	getters,
	state,
}
