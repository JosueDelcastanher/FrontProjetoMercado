import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    anonimo: [],
    clientes: []
  },
  mutations: {
    cadastrar(state, clientes){
      state.clientes.push(clientes)
    }
  },
  actions: {
  },
  modules: {
  }
})
