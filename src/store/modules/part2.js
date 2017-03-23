const state = {
	num:1
}

const getters = {
	get1: state => state.num+'part2'
}

const mutations = {
	add(state,a){
		state.num++
	}
}

const actions = {
	addSync({state,commit,rootState}){
		commit('add')
	}
}

export default {
	actions,
	mutations,
	getters,
	state
}