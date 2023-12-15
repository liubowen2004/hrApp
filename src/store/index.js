import Vue from "vue"
import Vuex from "vuex"
import muenList from "./modules/muenList"
import employes from './modules/employes'
import getters from "./getters"
import theme from "./theme"
Vue.use(Vuex)

export default new Vuex.Store({
	getters,
  modules: {
		employes,
		muenList,
		theme
	}
})
