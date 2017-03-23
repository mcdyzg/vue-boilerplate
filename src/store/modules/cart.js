const state = {
	num:1
}

const getters = {
	get1: state => state.num+'hahaha',
	total:(state,getters,rootState)=>{
		console.log(getters,rootState)
		return state.num+1000
	}
}

const mutations = {
	add(state,a){
		state.num++
	}
}

const actions = {
	addSync({state,commit,rootState}){
		console.log(rootState);
		commit('add')
	}
}

export default {
	actions,
	mutations,
	getters,
	state
}