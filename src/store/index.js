import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increment(state){
      state.count++
    },
    decrement(state){
      state.count --
    }
  },
  actions: {
    increment:({commit}) => {
      commit('increment')
    },
    decrement:({commit}) => {
      commit('decrement')
    }
    
  },
  modules: {

  }
})
