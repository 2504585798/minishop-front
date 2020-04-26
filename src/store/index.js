import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'
import theme from './modules/theme'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules:{
		user,
		theme
	},
	getters
})

export default store